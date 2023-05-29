import { ParserRuleContext } from 'antlr4ts'
import {
	FieldContext,
	SchemaContext,
	SchemaFieldContext,
	SchemaScopedBlockContext,
	ScopedBlockContext,
} from '../antlr4/WickParser'
import { WickParserListener } from '../antlr4/WickParserListener'
import WickErrors from '../errors/WickErrors'
import SchemaType, { schemaTypeIs } from '../language/SchemaType'

export class WickWalker implements WickParserListener {
	scopeLevel: string[] = []
	object: any = {}
	schema: any = {}
	callback: (parsedModule: any) => void

	constructor(callback: (parsedModule: any) => void) {
		this.callback = callback
	}

	private _assignToScope(
		id: string,
		val: any,
		ctx: ParserRuleContext,
		object?: any,
		canMerge = true
	) {
		let obj = object ?? this.object
		this.scopeLevel.forEach((scope) => (obj = obj[scope] ??= {}))

		if (!canMerge && obj[id]) {
			WickErrors.errors.push({
				name: 'RedeclarationError',
				message: `Duplicated field ${id} is not allowed here`,
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

	private _checkSchema(
		id: string,
		val: any,
		types: SchemaType[],
		ctx: FieldContext
	) {
		if (!this.schema) return

		let schema = this.schema
		this.scopeLevel.forEach((scope) => (schema = schema[scope] ??= {}))

		if (!schema[id]) {
			WickErrors.errors.push({
				name: 'SchemaError',
				message: `Field ${id} is not defined in the schema`,
				line: ctx.start.line,
				column: ctx.start.charPositionInLine,
			})
			return
		}

		if (Array.isArray(schema[id])) {
			let schemaTypes = schema[id] as SchemaType[]
			let valTypes = types

			if (schemaTypes.length !== valTypes.length) {
				WickErrors.errors.push({
					name: 'SchemaError',
					message: `Field ${id} expects ${schemaTypes}, got ${valTypes}`,
					line: ctx.start.line,
					column: ctx.start.charPositionInLine,
				})
				return
			}

			for (let i = 0; i < schemaTypes.length; i++) {
				if (schemaTypeIs(schemaTypes[i], valTypes[i])) continue

				WickErrors.errors.push({
					name: 'SchemaError',
					message: `Field ${id} expects ${schemaTypes}, got ${valTypes}`,
					line: ctx.start.line,
					column: ctx.start.charPositionInLine,
				})
			}
		}
	}

	private _checkMissingSchema() {
		if (!this.schema) return

		let scope: string[] = []
		const check = (obj: any, schema: any) => {
			for (let key in schema) {
				if (!obj[key]) {
					WickErrors.errors.push({
						name: 'SchemaError',
						message: `Non-optional field ${scope.join('.')}.${key}(${
							schema[key]
						}) is missing`,
						line: 0,
						column: 0,
					})
				} else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
					scope.push(key)
					check(obj[key], schema[key])
					scope.pop()
				}
			}
		}

		check(this.object, this.schema)
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
		let types: SchemaType[] = []
		ctx.argument() &&
			ctx.argument().forEach((arg) => {
				arg.quotelessArgument() &&
					val.push(arg.quotelessArgument()!.text) &&
					types.push(SchemaType.String)

				arg.str() &&
					val.push(arg.str()!.text.substring(1, arg.str()!.text.length - 1)) &&
					types.push(SchemaType.String)

				arg.number_int() &&
					val.push(parseInt(arg.number_int()!.text)) &&
					types.push(SchemaType.Int)

				arg.number_double() &&
					val.push(parseFloat(arg.number_double()!.text)) &&
					types.push(SchemaType.Double)

				arg.bool() &&
					val.push(arg.bool()!.text === 'true') &&
					types.push(SchemaType.Bool)

				arg.variable() && val.push({ _variable: arg.variable()!.text })
			})

		val.length === 0 && (val = [true]) && types.push(SchemaType.Bool)

		this._checkSchema(id, val, types, ctx)
		this._assignToScope(id, val, ctx)
	}

	// END CONFIG

	exitCompilationUnit() {
		this._checkMissingSchema()
		this.callback(this.object)
	}
}
