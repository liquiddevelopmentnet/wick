parser grammar WickParser;

options {
  tokenVocab=WickLexer;
  language=Typescript;
}

compilationUnit: (statement)* EOF;
statement: ((field | scopedBlock) (SEMICOLON | NL)?);

id: IdLiteral;

str: StringLiteral;
number_int: IntegerLiteral;
number_double: DoubleLiteral;
bool: BooleanLiteral;
variable: VARIABLE_PREFIX id;

argument: (str | number_int | number_double | bool | variable);

field: id argument*;

scopedBlock: id (argument)*? block;
block: LBRACE (statement)* RBRACE;
