parser grammar WickParser;

options {
	tokenVocab = WickLexer;
	language = JavaScript;
}

compilationUnit: (schema)? (statement)* EOF;

// --- END START SCHEMA

schema: SchemaPrefix schemaBlock (NL)*;
schemaBlock: LBRACE (NL)* (schemaStatement)* RBRACE (NL)*;

schemaStatement: (
		(schemaField | schemaScopedBlock) (SEMICOLON | NL)*
	);

schemaField: id SchemaTypeToken schemaType*;
schemaScopedBlock: id (SchemaTypeLiteral)*? schemaBlock;

schemaType: SchemaTypeLiteral;

// END SCHEMA -------------------------------- START CONFIG

statement: ((field | scopedBlock) (SEMICOLON | NL)+);

id: GenericLiteral;
quotelessArgument: GenericLiteral;
str: StringLiteral;
number_int: IntegerLiteral;
number_double: DoubleLiteral;
bool: BooleanLiteral;
variable: VARIABLE_PREFIX id;

argument:
	(
		quotelessArgument
		| str
		| number_int
		| number_double
		| bool
		| variable
	);

field: id argument*;

scopedBlock: id (argument)*? block;
block: LBRACE (NL)* (statement)* RBRACE (NL)*;

// --- END CONFIG
