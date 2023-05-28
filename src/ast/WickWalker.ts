import { ParserRuleContext } from 'antlr4ts'
import {
	FieldContext,
	SchemaContext,
	SchemaFieldContext,
	SchemaScopedBlockContext,
	ScopedBlockContext,
} from '../antlr4/WickParser'
import { WickParserListener } from '../antlr4/WickParserListener'
import { pushError } from '../util/Errors'

export class WickWalker implements WickParserListener {
	scopeLevel: string[] = []
	object: any = {}
	schema: any = {}
	callback: (parsedModule: any) => void

	constructor(callback: (parsedModule: any) => void) {
		this.callback = callback
	}

	_assignToScope(
		id: string,
		val: any,
		ctx: ParserRuleContext,
		object?: any,
		canMerge = true
	) {
		let obj = object ?? this.object
		this.scopeLevel.forEach((scope) => (obj = obj[scope] ??= {}))

		if (!canMerge && obj[id]) {
			pushError({
				name: 'RedeclarationError',
				message: `duplicated field ${id} is not allowed here`,
				line: ctx.start.line,
				column: ctx.start.charPositionInLine,
			})
			return
		}

		if (obj[id] && Array.isArray(obj[id])) {
			// if array is 2d, push, if not make 2d and then push
			if (Array.isArray(obj[id][0])) {
				obj[id].push(val)
			} else {
				obj[id] = [obj[id], val]
			}
		}
		// make array if needed
		else if (obj[id]) {
			obj[id] = [obj[id], val]
		}

		// if not array, just assign
		else {
			obj[id] = val
		}
	}

	// --- START SCHEMA

	enterSchemaField(ctx: SchemaFieldContext) {
		let id: string = ctx.id().text
		let val: string | string[] = ctx.schemaType().map((type) => type.text)
		this._assignToScope(id, val, ctx, this.schema, false)
	}

	enterSchemaScopedBlock(ctx: SchemaScopedBlockContext) {
		this.scopeLevel.push(ctx.id().text)
	}

	exitSchemaScopedBlock() {
		this.scopeLevel.pop()
	}

	exitSchema(ctx: SchemaContext) {
		this._assignToScope('_schema', this.schema, ctx)
		this.scopeLevel = []
	}

	// END SCHEMA
	// ------------------------------
	// START CONFIG

	enterScopedBlock(ctx: ScopedBlockContext) {
		this.scopeLevel.push(ctx.id().text)
	}

	exitScopedBlock() {
		this.scopeLevel.pop()
	}

	enterField(ctx: FieldContext) {
		let id = ctx.id().text
		let val: any = []
		ctx.argument() &&
			ctx.argument().forEach((arg) => {
				arg.quotelessArgument() && val.push(arg.quotelessArgument()!.text)

				arg.str() &&
					val.push(arg.str()!.text.substring(1, arg.str()!.text.length - 1))

				arg.number_int() && val.push(parseInt(arg.number_int()!.text))

				arg.number_double() && val.push(parseFloat(arg.number_double()!.text))

				arg.bool() && val.push(arg.bool()!.text === 'true')

				arg.variable() && val.push({ _variable: arg.variable()!.text })
			})

		val.length === 0 && (val = [true])

		this._assignToScope(id, val, ctx)
	}

	// END CONFIG

	exitCompilationUnit() {
		this.callback(this.object)
	}
}
