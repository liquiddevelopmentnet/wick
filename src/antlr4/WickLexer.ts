// Generated from /home/fb/projects/wick/grammar/WickLexer.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class WickLexer extends Lexer {
	public static readonly StringLiteral = 1;
	public static readonly IntegerLiteral = 2;
	public static readonly DoubleLiteral = 3;
	public static readonly BooleanLiteral = 4;
	public static readonly SchemaPrefix = 5;
	public static readonly SchemaTypeToken = 6;
	public static readonly SchemaTypeLiteral = 7;
	public static readonly GenericLiteral = 8;
	public static readonly DOUBLE_QUOTE = 9;
	public static readonly SINGLE_QUOTE = 10;
	public static readonly LBRACE = 11;
	public static readonly RBRACE = 12;
	public static readonly VARIABLE_PREFIX = 13;
	public static readonly SEMICOLON = 14;
	public static readonly NL = 15;
	public static readonly WHITESPACE = 16;
	public static readonly COMMENT = 17;
	public static readonly LINE_COMMENT = 18;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"StringLiteral", "IntegerLiteral", "DoubleLiteral", "BooleanLiteral", 
		"SchemaPrefix", "SchemaTypeToken", "SchemaTypeLiteral", "GenericLiteral", 
		"DoubleQuotedString", "SingleQuotedString", "HexDigit", "DoubleQuotedStringCharacter", 
		"SingleQuotedStringCharacter", "EscapeSequence", "UnicodeEscape", "DOUBLE_QUOTE", 
		"SINGLE_QUOTE", "LBRACE", "RBRACE", "VARIABLE_PREFIX", "SEMICOLON", "NL", 
		"WHITESPACE", "COMMENT", "LINE_COMMENT",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, "'@schema'", "':'", 
		undefined, undefined, "'\"'", "'''", "'{'", "'}'", "'$'", "';'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "StringLiteral", "IntegerLiteral", "DoubleLiteral", "BooleanLiteral", 
		"SchemaPrefix", "SchemaTypeToken", "SchemaTypeLiteral", "GenericLiteral", 
		"DOUBLE_QUOTE", "SINGLE_QUOTE", "LBRACE", "RBRACE", "VARIABLE_PREFIX", 
		"SEMICOLON", "NL", "WHITESPACE", "COMMENT", "LINE_COMMENT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(WickLexer._LITERAL_NAMES, WickLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return WickLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(WickLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "WickLexer.g4"; }

	// @Override
	public get ruleNames(): string[] { return WickLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return WickLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return WickLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return WickLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x14\xEA\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x03\x02\x03\x02\x05\x02" +
		"8\n\x02\x03\x03\x06\x03;\n\x03\r\x03\x0E\x03<\x03\x04\x06\x04@\n\x04\r" +
		"\x04\x0E\x04A\x03\x04\x03\x04\x07\x04F\n\x04\f\x04\x0E\x04I\v\x04\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05" +
		"\x05T\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x05\b\x83\n\b\x03\t\x06\t\x86\n\t\r\t\x0E\t\x87\x03\n\x03" +
		"\n\x07\n\x8C\n\n\f\n\x0E\n\x8F\v\n\x03\n\x03\n\x03\v\x03\v\x07\v\x95\n" +
		"\v\f\v\x0E\v\x98\v\v\x03\v\x03\v\x03\f\x03\f\x03\r\x03\r\x05\r\xA0\n\r" +
		"\x03\x0E\x03\x0E\x05\x0E\xA4\n\x0E\x03\x0F\x03\x0F\x03\x0F\x05\x0F\xA9" +
		"\n\x0F\x03\x10\x03\x10\x06\x10\xAD\n\x10\r\x10\x0E\x10\xAE\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x12\x03\x12\x03\x13\x03" +
		"\x13\x03\x14\x03\x14\x03\x15\x03\x15\x03\x16\x03\x16\x03\x17\x05\x17\xC3" +
		"\n\x17\x03\x17\x03\x17\x06\x17\xC7\n\x17\r\x17\x0E\x17\xC8\x03\x18\x06" +
		"\x18\xCC\n\x18\r\x18\x0E\x18\xCD\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19" +
		"\x03\x19\x07\x19\xD6\n\x19\f\x19\x0E\x19\xD9\v\x19\x03\x19\x03\x19\x03" +
		"\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x07\x1A\xE4\n\x1A" +
		"\f\x1A\x0E\x1A\xE7\v\x1A\x03\x1A\x03\x1A\x03\xD7\x02\x02\x1B\x03\x02\x03" +
		"\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02" +
		"\n\x13\x02\x02\x15\x02\x02\x17\x02\x02\x19\x02\x02\x1B\x02\x02\x1D\x02" +
		"\x02\x1F\x02\x02!\x02\v#\x02\f%\x02\r\'\x02\x0E)\x02\x0F+\x02\x10-\x02" +
		"\x11/\x02\x121\x02\x133\x02\x14\x03\x02\t\x03\x022;\b\x02%%//1;C\\aac" +
		"|\x05\x022;CHch\x06\x02\f\f\x0F\x0F$$^^\n\x02$$))^^ddhhppttvv\x04\x02" +
		"\v\v\"\"\x04\x02\f\f\x0F\x0F\x02\xF9\x02\x03\x03\x02\x02\x02\x02\x05\x03" +
		"\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02" +
		"\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02" +
		"\x02\x02\x02!\x03\x02\x02\x02\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02" +
		"\x02\'\x03\x02\x02\x02\x02)\x03\x02\x02\x02\x02+\x03\x02\x02\x02\x02-" +
		"\x03\x02\x02\x02\x02/\x03\x02\x02\x02\x021\x03\x02\x02\x02\x023\x03\x02" +
		"\x02\x02\x037\x03\x02\x02\x02\x05:\x03\x02\x02\x02\x07?\x03\x02\x02\x02" +
		"\tS\x03\x02\x02\x02\vU\x03\x02\x02\x02\r]\x03\x02\x02\x02\x0F\x82\x03" +
		"\x02\x02\x02\x11\x85\x03\x02\x02\x02\x13\x89\x03\x02\x02\x02\x15\x92\x03" +
		"\x02\x02\x02\x17\x9B\x03\x02\x02\x02\x19\x9F\x03\x02\x02\x02\x1B\xA3\x03" +
		"\x02\x02\x02\x1D\xA8\x03\x02\x02\x02\x1F\xAA\x03\x02\x02\x02!\xB5\x03" +
		"\x02\x02\x02#\xB7\x03\x02\x02\x02%\xB9\x03\x02\x02\x02\'\xBB\x03\x02\x02" +
		"\x02)\xBD\x03\x02\x02\x02+\xBF\x03\x02\x02\x02-\xC6\x03\x02\x02\x02/\xCB" +
		"\x03\x02\x02\x021\xD1\x03\x02\x02\x023\xDF\x03\x02\x02\x0258\x05\x13\n" +
		"\x0268\x05\x15\v\x0275\x03\x02\x02\x0276\x03\x02\x02\x028\x04\x03\x02" +
		"\x02\x029;\t\x02\x02\x02:9\x03\x02\x02\x02;<\x03\x02\x02\x02<:\x03\x02" +
		"\x02\x02<=\x03\x02\x02\x02=\x06\x03\x02\x02\x02>@\t\x02\x02\x02?>\x03" +
		"\x02\x02\x02@A\x03\x02\x02\x02A?\x03\x02\x02\x02AB\x03\x02\x02\x02BC\x03" +
		"\x02\x02\x02CG\x070\x02\x02DF\t\x02\x02\x02ED\x03\x02\x02\x02FI\x03\x02" +
		"\x02\x02GE\x03\x02\x02\x02GH\x03\x02\x02\x02H\b\x03\x02\x02\x02IG\x03" +
		"\x02\x02\x02JK\x07v\x02\x02KL\x07t\x02\x02LM\x07w\x02\x02MT\x07g\x02\x02" +
		"NO\x07h\x02\x02OP\x07c\x02\x02PQ\x07n\x02\x02QR\x07u\x02\x02RT\x07g\x02" +
		"\x02SJ\x03\x02\x02\x02SN\x03\x02\x02\x02T\n\x03\x02\x02\x02UV\x07B\x02" +
		"\x02VW\x07u\x02\x02WX\x07e\x02\x02XY\x07j\x02\x02YZ\x07g\x02\x02Z[\x07" +
		"o\x02\x02[\\\x07c\x02\x02\\\f\x03\x02\x02\x02]^\x07<\x02\x02^\x0E\x03" +
		"\x02\x02\x02_`\x07u\x02\x02`a\x07v\x02\x02ab\x07t\x02\x02bc\x07k\x02\x02" +
		"cd\x07p\x02\x02d\x83\x07i\x02\x02ef\x07k\x02\x02fg\x07p\x02\x02gh\x07" +
		"v\x02\x02hi\x07g\x02\x02ij\x07i\x02\x02jk\x07g\x02\x02k\x83\x07t\x02\x02" +
		"lm\x07f\x02\x02mn\x07q\x02\x02no\x07w\x02\x02op\x07d\x02\x02pq\x07n\x02" +
		"\x02q\x83\x07g\x02\x02rs\x07d\x02\x02st\x07q\x02\x02tu\x07q\x02\x02uv" +
		"\x07n\x02\x02vw\x07g\x02\x02wx\x07c\x02\x02x\x83\x07p\x02\x02yz\x07c\x02" +
		"\x02z{\x07p\x02\x02{\x83\x07{\x02\x02|}\x07q\x02\x02}~\x07d\x02\x02~\x7F" +
		"\x07l\x02\x02\x7F\x80\x07g\x02\x02\x80\x81\x07e\x02\x02\x81\x83\x07v\x02" +
		"\x02\x82_\x03\x02\x02\x02\x82e\x03\x02\x02\x02\x82l\x03\x02\x02\x02\x82" +
		"r\x03\x02\x02\x02\x82y\x03\x02\x02\x02\x82|\x03\x02\x02\x02\x83\x10\x03" +
		"\x02\x02\x02\x84\x86\t\x03\x02\x02\x85\x84\x03\x02\x02\x02\x86\x87\x03" +
		"\x02\x02\x02\x87\x85\x03\x02\x02\x02\x87\x88\x03\x02\x02\x02\x88\x12\x03" +
		"\x02\x02\x02\x89\x8D\x05!\x11\x02\x8A\x8C\x05\x19\r\x02\x8B\x8A\x03\x02" +
		"\x02\x02\x8C\x8F\x03\x02\x02\x02\x8D\x8B\x03\x02\x02\x02\x8D\x8E\x03\x02" +
		"\x02\x02\x8E\x90\x03\x02\x02\x02\x8F\x8D\x03\x02\x02\x02\x90\x91\x05!" +
		"\x11\x02\x91\x14\x03\x02\x02\x02\x92\x96\x05#\x12\x02\x93\x95\x05\x1B" +
		"\x0E\x02\x94\x93\x03\x02\x02\x02\x95\x98\x03\x02\x02\x02\x96\x94\x03\x02" +
		"\x02\x02\x96\x97\x03\x02\x02\x02\x97\x99\x03\x02\x02\x02\x98\x96\x03\x02" +
		"\x02\x02\x99\x9A\x05#\x12\x02\x9A\x16\x03\x02\x02\x02\x9B\x9C\t\x04\x02" +
		"\x02\x9C\x18\x03\x02\x02\x02\x9D\xA0\n\x05\x02\x02\x9E\xA0\x05\x1D\x0F" +
		"\x02\x9F\x9D\x03\x02\x02\x02\x9F\x9E\x03\x02\x02\x02\xA0\x1A\x03\x02\x02" +
		"\x02\xA1\xA4\n\x05\x02\x02\xA2\xA4\x05\x1D\x0F\x02\xA3\xA1\x03\x02\x02" +
		"\x02\xA3\xA2\x03\x02\x02\x02\xA4\x1C\x03\x02\x02\x02\xA5\xA6\x07^\x02" +
		"\x02\xA6\xA9\t\x06\x02\x02\xA7\xA9\x05\x1F\x10\x02\xA8\xA5\x03\x02\x02" +
		"\x02\xA8\xA7\x03\x02\x02\x02\xA9\x1E\x03\x02\x02\x02\xAA\xAC\x07^\x02" +
		"\x02\xAB\xAD\x07w\x02\x02\xAC\xAB\x03\x02\x02\x02\xAD\xAE\x03\x02\x02" +
		"\x02\xAE\xAC\x03\x02\x02\x02\xAE\xAF\x03\x02\x02\x02\xAF\xB0\x03\x02\x02" +
		"\x02\xB0\xB1\x05\x17\f\x02\xB1\xB2\x05\x17\f\x02\xB2\xB3\x05\x17\f\x02" +
		"\xB3\xB4\x05\x17\f\x02\xB4 \x03\x02\x02\x02\xB5\xB6\x07$\x02\x02\xB6\"" +
		"\x03\x02\x02\x02\xB7\xB8\x07)\x02\x02\xB8$\x03\x02\x02\x02\xB9\xBA\x07" +
		"}\x02\x02\xBA&\x03\x02\x02\x02\xBB\xBC\x07\x7F\x02\x02\xBC(\x03\x02\x02" +
		"\x02\xBD\xBE\x07&\x02\x02\xBE*\x03\x02\x02\x02\xBF\xC0\x07=\x02\x02\xC0" +
		",\x03\x02\x02\x02\xC1\xC3\x07\x0F\x02\x02\xC2\xC1\x03\x02\x02\x02\xC2" +
		"\xC3\x03\x02\x02\x02\xC3\xC4\x03\x02\x02\x02\xC4\xC7\x07\f\x02\x02\xC5" +
		"\xC7\x07\x0F\x02\x02\xC6\xC2\x03\x02\x02\x02\xC6\xC5\x03\x02\x02\x02\xC7" +
		"\xC8\x03\x02\x02\x02\xC8\xC6\x03\x02\x02\x02\xC8\xC9\x03\x02\x02\x02\xC9" +
		".\x03\x02\x02\x02\xCA\xCC\t\x07\x02\x02\xCB\xCA\x03\x02\x02\x02\xCC\xCD" +
		"\x03\x02\x02\x02\xCD\xCB\x03\x02\x02\x02\xCD\xCE\x03\x02\x02\x02\xCE\xCF" +
		"\x03\x02\x02\x02\xCF\xD0\b\x18\x02\x02\xD00\x03\x02\x02\x02\xD1\xD2\x07" +
		"1\x02\x02\xD2\xD3\x07,\x02\x02\xD3\xD7\x03\x02\x02\x02\xD4\xD6\v\x02\x02" +
		"\x02\xD5\xD4\x03\x02\x02\x02\xD6\xD9\x03\x02\x02\x02\xD7\xD8\x03\x02\x02" +
		"\x02\xD7\xD5\x03\x02\x02\x02\xD8\xDA\x03\x02\x02\x02\xD9\xD7\x03\x02\x02" +
		"\x02\xDA\xDB\x07,\x02\x02\xDB\xDC\x071\x02\x02\xDC\xDD\x03\x02\x02\x02" +
		"\xDD\xDE\b\x19\x02\x02\xDE2\x03\x02\x02\x02\xDF\xE0\x071\x02\x02\xE0\xE1" +
		"\x071\x02\x02\xE1\xE5\x03\x02\x02\x02\xE2\xE4\n\b\x02\x02\xE3\xE2\x03" +
		"\x02\x02\x02\xE4\xE7\x03\x02\x02\x02\xE5\xE3\x03\x02\x02\x02\xE5\xE6\x03" +
		"\x02\x02\x02\xE6\xE8\x03\x02\x02\x02\xE7\xE5\x03\x02\x02\x02\xE8\xE9\b" +
		"\x1A\x02\x02\xE94\x03\x02\x02\x02\x16\x027<AGS\x82\x87\x8D\x96\x9F\xA3" +
		"\xA8\xAE\xC2\xC6\xC8\xCD\xD7\xE5\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!WickLexer.__ATN) {
			WickLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(WickLexer._serializedATN));
		}

		return WickLexer.__ATN;
	}

}

