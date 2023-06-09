lexer grammar WickLexer;

StringLiteral: DoubleQuotedString | SingleQuotedString;

IntegerLiteral: [0-9]+;
DoubleLiteral: [0-9]+ '.' [0-9]*;
BooleanLiteral: 'true' | 'false';

SchemaPrefix: '@schema';
SchemaTypeToken: ':';
SchemaTypeLiteral:
	'str'
	| 'number'
	| 'int'
	| 'double'
	| 'bool'
	| 'object'
	| 'any';

GenericLiteral: [a-zA-Z_\-/#0-9]+;

fragment DoubleQuotedString:
	DOUBLE_QUOTE DoubleQuotedStringCharacter* DOUBLE_QUOTE;

fragment SingleQuotedString:
	SINGLE_QUOTE SingleQuotedStringCharacter* SINGLE_QUOTE;

fragment HexDigit: [0-9a-fA-F];

fragment DoubleQuotedStringCharacter:
	~["\\\r\n]
	| EscapeSequence;

fragment SingleQuotedStringCharacter:
	~["\\\r\n]
	| EscapeSequence;

fragment EscapeSequence: '\\' [btnfr"'\\] | UnicodeEscape;

fragment UnicodeEscape:
	'\\' 'u'+ HexDigit HexDigit HexDigit HexDigit;

DOUBLE_QUOTE: '"';
SINGLE_QUOTE: '\'';

LBRACE: '{';
RBRACE: '}';
VARIABLE_PREFIX: '$';

SEMICOLON: ';';
NL: ('\r'? '\n' | '\r')+;

WHITESPACE: [ \t]+ -> skip;

COMMENT: '/*' .*? '*/' -> skip;

LINE_COMMENT: '//' ~[\r\n]* -> skip;