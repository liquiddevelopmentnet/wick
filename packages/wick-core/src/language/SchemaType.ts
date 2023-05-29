enum SchemaType {
	String = 'str',
	Number = 'number',
	Int = 'int',
	Double = 'double',
	Bool = 'bool',
	Object = 'object',
	Any = 'any',
}

export default SchemaType

export function schemaTypeIs(testfor: SchemaType, value: SchemaType) {
	switch (testfor) {
		case SchemaType.String:
			return value === SchemaType.String
		case SchemaType.Number:
			return value === SchemaType.Int || value === SchemaType.Double
		case SchemaType.Int:
			return value === SchemaType.Int
		case SchemaType.Double:
			return value === SchemaType.Double
		case SchemaType.Bool:
			return value === SchemaType.Bool
		case SchemaType.Object:
			return value === SchemaType.Object
		case SchemaType.Any:
			return true
	}
}
