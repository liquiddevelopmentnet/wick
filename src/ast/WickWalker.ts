import {
	FieldContext,
	SchemaFieldContext,
	SchemaScopedBlockContext,
	ScopedBlockContext,
} from '../antlr4/WickParser'
import { WickParserListener } from '../antlr4/WickParserListener'

export class WickWalker implements WickParserListener {
	scopeLevel: string[] = []
	object: any = {}
	schema: any = {}
	callback: (parsedModule: any) => void

	constructor(callback: (parsedModule: any) => void) {
		this.callback = callback
	}

	_assignToScope(id: string, val: any, object?: any) {
		let obj = object ?? this.object
		this.scopeLevel.forEach((scope) => (obj = obj[scope] ??= {}))
		obj[id] = val
	}

	// --- START SCHEMA

	enterSchemaField(ctx: SchemaFieldContext) {
		let id: string = ctx.id().text
		let val: string | string[] = ctx.schemaType().map((type) => type.text)
		val = val.length === 1 ? val[0] : val
		this._assignToScope(id, val, this.schema)
	}

	enterSchemaScopedBlock(ctx: SchemaScopedBlockContext) {
		this.scopeLevel.push(ctx.id().text)
	}

	exitSchemaScopedBlock() {
		this.scopeLevel.pop()
	}

	exitSchema() {
		this._assignToScope('_schema', this.schema)
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

		val.length === 0 && (val = true)
		val.length === 1 && (val = val[0])

		this._assignToScope(id, val)
	}

	// END CONFIG

	exitCompilationUnit() {
		this.callback(this.object)
	}
}
