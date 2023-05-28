parser grammar WickParser;

options {
  tokenVocab=WickLexer;
  language=JavaScript;
}

compilationUnit: (statement)* EOF;
statement: ((field | scopedBlock) (SEMICOLON | NL)?);

id: GenericLiteral;
quotelessArgument: GenericLiteral;
str: StringLiteral;
number_int: IntegerLiteral;
number_double: DoubleLiteral;
bool: BooleanLiteral;
variable: VARIABLE_PREFIX id;

argument:
    ( quotelessArgument
    | str
    | number_int
    | number_double
    | bool
    | variable
    );

field: id argument*;

scopedBlock: id (argument)*? block;
block: LBRACE (statement)* RBRACE;
