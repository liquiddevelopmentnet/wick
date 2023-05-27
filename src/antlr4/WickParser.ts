// Generated from /home/fb/projects/wick/grammar/WickParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { WickParserListener } from "./WickParserListener";

export class WickParser extends Parser {
	public static readonly StringLiteral = 1;
	public static readonly IntegerLiteral = 2;
	public static readonly DoubleLiteral = 3;
	public static readonly BooleanLiteral = 4;
	public static readonly IdLiteral = 5;
	public static readonly DOUBLE_QUOTE = 6;
	public static readonly SINGLE_QUOTE = 7;
	public static readonly LBRACE = 8;
	public static readonly RBRACE = 9;
	public static readonly VARIABLE_PREFIX = 10;
	public static readonly SEMICOLON = 11;
	public static readonly NL = 12;
	public static readonly WHITESPACE = 13;
	public static readonly COMMENT = 14;
	public static readonly LINE_COMMENT = 15;
	public static readonly RULE_compilationUnit = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_id = 2;
	public static readonly RULE_str = 3;
	public static readonly RULE_number_int = 4;
	public static readonly RULE_number_double = 5;
	public static readonly RULE_bool = 6;
	public static readonly RULE_variable = 7;
	public static readonly RULE_argument = 8;
	public static readonly RULE_field = 9;
	public static readonly RULE_scopedBlock = 10;
	public static readonly RULE_block = 11;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"compilationUnit", "statement", "id", "str", "number_int", "number_double", 
		"bool", "variable", "argument", "field", "scopedBlock", "block",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, "'\"'", 
		"'''", "'{'", "'}'", "'$'", "';'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "StringLiteral", "IntegerLiteral", "DoubleLiteral", "BooleanLiteral", 
		"IdLiteral", "DOUBLE_QUOTE", "SINGLE_QUOTE", "LBRACE", "RBRACE", "VARIABLE_PREFIX", 
		"SEMICOLON", "NL", "WHITESPACE", "COMMENT", "LINE_COMMENT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(WickParser._LITERAL_NAMES, WickParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return WickParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "WickParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return WickParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return WickParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(WickParser._ATN, this);
	}
	// @RuleVersion(0)
	public compilationUnit(): CompilationUnitContext {
		let _localctx: CompilationUnitContext = new CompilationUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, WickParser.RULE_compilationUnit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 27;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === WickParser.IdLiteral) {
				{
				{
				this.state = 24;
				this.statement();
				}
				}
				this.state = 29;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 30;
			this.match(WickParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, WickParser.RULE_statement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 34;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				{
				this.state = 32;
				this.field();
				}
				break;

			case 2:
				{
				this.state = 33;
				this.scopedBlock();
				}
				break;
			}
			this.state = 37;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === WickParser.SEMICOLON || _la === WickParser.NL) {
				{
				this.state = 36;
				_la = this._input.LA(1);
				if (!(_la === WickParser.SEMICOLON || _la === WickParser.NL)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public id(): IdContext {
		let _localctx: IdContext = new IdContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, WickParser.RULE_id);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 39;
			this.match(WickParser.IdLiteral);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public str(): StrContext {
		let _localctx: StrContext = new StrContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, WickParser.RULE_str);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 41;
			this.match(WickParser.StringLiteral);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public number_int(): Number_intContext {
		let _localctx: Number_intContext = new Number_intContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, WickParser.RULE_number_int);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 43;
			this.match(WickParser.IntegerLiteral);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public number_double(): Number_doubleContext {
		let _localctx: Number_doubleContext = new Number_doubleContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, WickParser.RULE_number_double);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 45;
			this.match(WickParser.DoubleLiteral);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bool(): BoolContext {
		let _localctx: BoolContext = new BoolContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, WickParser.RULE_bool);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 47;
			this.match(WickParser.BooleanLiteral);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variable(): VariableContext {
		let _localctx: VariableContext = new VariableContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, WickParser.RULE_variable);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 49;
			this.match(WickParser.VARIABLE_PREFIX);
			this.state = 50;
			this.id();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public argument(): ArgumentContext {
		let _localctx: ArgumentContext = new ArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, WickParser.RULE_argument);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 57;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WickParser.StringLiteral:
				{
				this.state = 52;
				this.str();
				}
				break;
			case WickParser.IntegerLiteral:
				{
				this.state = 53;
				this.number_int();
				}
				break;
			case WickParser.DoubleLiteral:
				{
				this.state = 54;
				this.number_double();
				}
				break;
			case WickParser.BooleanLiteral:
				{
				this.state = 55;
				this.bool();
				}
				break;
			case WickParser.VARIABLE_PREFIX:
				{
				this.state = 56;
				this.variable();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public field(): FieldContext {
		let _localctx: FieldContext = new FieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, WickParser.RULE_field);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 59;
			this.id();
			this.state = 63;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << WickParser.StringLiteral) | (1 << WickParser.IntegerLiteral) | (1 << WickParser.DoubleLiteral) | (1 << WickParser.BooleanLiteral) | (1 << WickParser.VARIABLE_PREFIX))) !== 0)) {
				{
				{
				this.state = 60;
				this.argument();
				}
				}
				this.state = 65;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public scopedBlock(): ScopedBlockContext {
		let _localctx: ScopedBlockContext = new ScopedBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, WickParser.RULE_scopedBlock);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 66;
			this.id();
			this.state = 70;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 67;
					this.argument();
					}
					}
				}
				this.state = 72;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
			}
			this.state = 73;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, WickParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 75;
			this.match(WickParser.LBRACE);
			this.state = 79;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === WickParser.IdLiteral) {
				{
				{
				this.state = 76;
				this.statement();
				}
				}
				this.state = 81;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 82;
			this.match(WickParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x11W\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x03" +
		"\x02\x07\x02\x1C\n\x02\f\x02\x0E\x02\x1F\v\x02\x03\x02\x03\x02\x03\x03" +
		"\x03\x03\x05\x03%\n\x03\x03\x03\x05\x03(\n\x03\x03\x04\x03\x04\x03\x05" +
		"\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\t" +
		"\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n<\n\n\x03\v\x03\v\x07\v@\n\v\f\v\x0E" +
		"\vC\v\v\x03\f\x03\f\x07\fG\n\f\f\f\x0E\fJ\v\f\x03\f\x03\f\x03\r\x03\r" +
		"\x07\rP\n\r\f\r\x0E\rS\v\r\x03\r\x03\r\x03\r\x03H\x02\x02\x0E\x02\x02" +
		"\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16" +
		"\x02\x18\x02\x02\x03\x03\x02\r\x0E\x02T\x02\x1D\x03\x02\x02\x02\x04$\x03" +
		"\x02\x02\x02\x06)\x03\x02\x02\x02\b+\x03\x02\x02\x02\n-\x03\x02\x02\x02" +
		"\f/\x03\x02\x02\x02\x0E1\x03\x02\x02\x02\x103\x03\x02\x02\x02\x12;\x03" +
		"\x02\x02\x02\x14=\x03\x02\x02\x02\x16D\x03\x02\x02\x02\x18M\x03\x02\x02" +
		"\x02\x1A\x1C\x05\x04\x03\x02\x1B\x1A\x03\x02\x02\x02\x1C\x1F\x03\x02\x02" +
		"\x02\x1D\x1B\x03\x02\x02\x02\x1D\x1E\x03\x02\x02\x02\x1E \x03\x02\x02" +
		"\x02\x1F\x1D\x03\x02\x02\x02 !\x07\x02\x02\x03!\x03\x03\x02\x02\x02\"" +
		"%\x05\x14\v\x02#%\x05\x16\f\x02$\"\x03\x02\x02\x02$#\x03\x02\x02\x02%" +
		"\'\x03\x02\x02\x02&(\t\x02\x02\x02\'&\x03\x02\x02\x02\'(\x03\x02\x02\x02" +
		"(\x05\x03\x02\x02\x02)*\x07\x07\x02\x02*\x07\x03\x02\x02\x02+,\x07\x03" +
		"\x02\x02,\t\x03\x02\x02\x02-.\x07\x04\x02\x02.\v\x03\x02\x02\x02/0\x07" +
		"\x05\x02\x020\r\x03\x02\x02\x0212\x07\x06\x02\x022\x0F\x03\x02\x02\x02" +
		"34\x07\f\x02\x0245\x05\x06\x04\x025\x11\x03\x02\x02\x026<\x05\b\x05\x02" +
		"7<\x05\n\x06\x028<\x05\f\x07\x029<\x05\x0E\b\x02:<\x05\x10\t\x02;6\x03" +
		"\x02\x02\x02;7\x03\x02\x02\x02;8\x03\x02\x02\x02;9\x03\x02\x02\x02;:\x03" +
		"\x02\x02\x02<\x13\x03\x02\x02\x02=A\x05\x06\x04\x02>@\x05\x12\n\x02?>" +
		"\x03\x02\x02\x02@C\x03\x02\x02\x02A?\x03\x02\x02\x02AB\x03\x02\x02\x02" +
		"B\x15\x03\x02\x02\x02CA\x03\x02\x02\x02DH\x05\x06\x04\x02EG\x05\x12\n" +
		"\x02FE\x03\x02\x02\x02GJ\x03\x02\x02\x02HI\x03\x02\x02\x02HF\x03\x02\x02" +
		"\x02IK\x03\x02\x02\x02JH\x03\x02\x02\x02KL\x05\x18\r\x02L\x17\x03\x02" +
		"\x02\x02MQ\x07\n\x02\x02NP\x05\x04\x03\x02ON\x03\x02\x02\x02PS\x03\x02" +
		"\x02\x02QO\x03\x02\x02\x02QR\x03\x02\x02\x02RT\x03\x02\x02\x02SQ\x03\x02" +
		"\x02\x02TU\x07\v\x02\x02U\x19\x03\x02\x02\x02\t\x1D$\';AHQ";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!WickParser.__ATN) {
			WickParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(WickParser._serializedATN));
		}

		return WickParser.__ATN;
	}

}

export class CompilationUnitContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(WickParser.EOF, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WickParser.RULE_compilationUnit; }
	// @Override
	public enterRule(listener: WickParserListener): void {
		if (listener.enterCompilationUnit) {
			listener.enterCompilationUnit(this);
		}
	}
	// @Override
	public exitRule(listener: WickParserListener): void {
		if (listener.exitCompilationUnit) {
			listener.exitCompilationUnit(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public field(): FieldContext | undefined {
		return this.tryGetRuleContext(0, FieldContext);
	}
	public scopedBlock(): ScopedBlockContext | undefined {
		return this.tryGetRuleContext(0, ScopedBlockContext);
	}
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(WickParser.SEMICOLON, 0); }
	public NL(): TerminalNode | undefined { return this.tryGetToken(WickParser.NL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WickParser.RULE_statement; }
	// @Override
	public enterRule(listener: WickParserListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: WickParserListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
}


export class IdContext extends ParserRuleContext {
	public IdLiteral(): TerminalNode { return this.getToken(WickParser.IdLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WickParser.RULE_id; }
	// @Override
	public enterRule(listener: WickParserListener): void {
		if (listener.enterId) {
			listener.enterId(this);
		}
	}
	// @Override
	public exitRule(listener: WickParserListener): void {
		if (listener.exitId) {
			listener.exitId(this);
		}
	}
}


export class StrContext extends ParserRuleContext {
	public StringLiteral(): TerminalNode { return this.getToken(WickParser.StringLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WickParser.RULE_str; }
	// @Override
	public enterRule(listener: WickParserListener): void {
		if (listener.enterStr) {
			listener.enterStr(this);
		}
	}
	// @Override
	public exitRule(listener: WickParserListener): void {
		if (listener.exitStr) {
			listener.exitStr(this);
		}
	}
}


export class Number_intContext extends ParserRuleContext {
	public IntegerLiteral(): TerminalNode { return this.getToken(WickParser.IntegerLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WickParser.RULE_number_int; }
	// @Override
	public enterRule(listener: WickParserListener): void {
		if (listener.enterNumber_int) {
			listener.enterNumber_int(this);
		}
	}
	// @Override
	public exitRule(listener: WickParserListener): void {
		if (listener.exitNumber_int) {
			listener.exitNumber_int(this);
		}
	}
}


export class Number_doubleContext extends ParserRuleContext {
	public DoubleLiteral(): TerminalNode { return this.getToken(WickParser.DoubleLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WickParser.RULE_number_double; }
	// @Override
	public enterRule(listener: WickParserListener): void {
		if (listener.enterNumber_double) {
			listener.enterNumber_double(this);
		}
	}
	// @Override
	public exitRule(listener: WickParserListener): void {
		if (listener.exitNumber_double) {
			listener.exitNumber_double(this);
		}
	}
}


export class BoolContext extends ParserRuleContext {
	public BooleanLiteral(): TerminalNode { return this.getToken(WickParser.BooleanLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WickParser.RULE_bool; }
	// @Override
	public enterRule(listener: WickParserListener): void {
		if (listener.enterBool) {
			listener.enterBool(this);
		}
	}
	// @Override
	public exitRule(listener: WickParserListener): void {
		if (listener.exitBool) {
			listener.exitBool(this);
		}
	}
}


export class VariableContext extends ParserRuleContext {
	public VARIABLE_PREFIX(): TerminalNode { return this.getToken(WickParser.VARIABLE_PREFIX, 0); }
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WickParser.RULE_variable; }
	// @Override
	public enterRule(listener: WickParserListener): void {
		if (listener.enterVariable) {
			listener.enterVariable(this);
		}
	}
	// @Override
	public exitRule(listener: WickParserListener): void {
		if (listener.exitVariable) {
			listener.exitVariable(this);
		}
	}
}


export class ArgumentContext extends ParserRuleContext {
	public str(): StrContext | undefined {
		return this.tryGetRuleContext(0, StrContext);
	}
	public number_int(): Number_intContext | undefined {
		return this.tryGetRuleContext(0, Number_intContext);
	}
	public number_double(): Number_doubleContext | undefined {
		return this.tryGetRuleContext(0, Number_doubleContext);
	}
	public bool(): BoolContext | undefined {
		return this.tryGetRuleContext(0, BoolContext);
	}
	public variable(): VariableContext | undefined {
		return this.tryGetRuleContext(0, VariableContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WickParser.RULE_argument; }
	// @Override
	public enterRule(listener: WickParserListener): void {
		if (listener.enterArgument) {
			listener.enterArgument(this);
		}
	}
	// @Override
	public exitRule(listener: WickParserListener): void {
		if (listener.exitArgument) {
			listener.exitArgument(this);
		}
	}
}


export class FieldContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public argument(): ArgumentContext[];
	public argument(i: number): ArgumentContext;
	public argument(i?: number): ArgumentContext | ArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArgumentContext);
		} else {
			return this.getRuleContext(i, ArgumentContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WickParser.RULE_field; }
	// @Override
	public enterRule(listener: WickParserListener): void {
		if (listener.enterField) {
			listener.enterField(this);
		}
	}
	// @Override
	public exitRule(listener: WickParserListener): void {
		if (listener.exitField) {
			listener.exitField(this);
		}
	}
}


export class ScopedBlockContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public argument(): ArgumentContext[];
	public argument(i: number): ArgumentContext;
	public argument(i?: number): ArgumentContext | ArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArgumentContext);
		} else {
			return this.getRuleContext(i, ArgumentContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WickParser.RULE_scopedBlock; }
	// @Override
	public enterRule(listener: WickParserListener): void {
		if (listener.enterScopedBlock) {
			listener.enterScopedBlock(this);
		}
	}
	// @Override
	public exitRule(listener: WickParserListener): void {
		if (listener.exitScopedBlock) {
			listener.exitScopedBlock(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(WickParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(WickParser.RBRACE, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WickParser.RULE_block; }
	// @Override
	public enterRule(listener: WickParserListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: WickParserListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
}


