// Generated from /home/fb/projects/wick/packages/wick-core/grammar/WickParser.g4 by ANTLR 4.9.0-SNAPSHOT


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
	public static readonly RULE_compilationUnit = 0;
	public static readonly RULE_schema = 1;
	public static readonly RULE_schemaBlock = 2;
	public static readonly RULE_schemaStatement = 3;
	public static readonly RULE_schemaField = 4;
	public static readonly RULE_schemaScopedBlock = 5;
	public static readonly RULE_schemaType = 6;
	public static readonly RULE_statement = 7;
	public static readonly RULE_id = 8;
	public static readonly RULE_quotelessArgument = 9;
	public static readonly RULE_str = 10;
	public static readonly RULE_number_int = 11;
	public static readonly RULE_number_double = 12;
	public static readonly RULE_bool = 13;
	public static readonly RULE_variable = 14;
	public static readonly RULE_argument = 15;
	public static readonly RULE_field = 16;
	public static readonly RULE_scopedBlock = 17;
	public static readonly RULE_block = 18;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"compilationUnit", "schema", "schemaBlock", "schemaStatement", "schemaField", 
		"schemaScopedBlock", "schemaType", "statement", "id", "quotelessArgument", 
		"str", "number_int", "number_double", "bool", "variable", "argument", 
		"field", "scopedBlock", "block",
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
			this.state = 39;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === WickParser.SchemaPrefix) {
				{
				this.state = 38;
				this.schema();
				}
			}

			this.state = 44;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === WickParser.GenericLiteral) {
				{
				{
				this.state = 41;
				this.statement();
				}
				}
				this.state = 46;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 47;
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
	public schema(): SchemaContext {
		let _localctx: SchemaContext = new SchemaContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, WickParser.RULE_schema);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 49;
			this.match(WickParser.SchemaPrefix);
			this.state = 50;
			this.schemaBlock();
			this.state = 54;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === WickParser.NL) {
				{
				{
				this.state = 51;
				this.match(WickParser.NL);
				}
				}
				this.state = 56;
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
	public schemaBlock(): SchemaBlockContext {
		let _localctx: SchemaBlockContext = new SchemaBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, WickParser.RULE_schemaBlock);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 57;
			this.match(WickParser.LBRACE);
			this.state = 61;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === WickParser.NL) {
				{
				{
				this.state = 58;
				this.match(WickParser.NL);
				}
				}
				this.state = 63;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 67;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === WickParser.GenericLiteral) {
				{
				{
				this.state = 64;
				this.schemaStatement();
				}
				}
				this.state = 69;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 70;
			this.match(WickParser.RBRACE);
			this.state = 74;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 71;
					this.match(WickParser.NL);
					}
					}
				}
				this.state = 76;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
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
	public schemaStatement(): SchemaStatementContext {
		let _localctx: SchemaStatementContext = new SchemaStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, WickParser.RULE_schemaStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 79;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				{
				this.state = 77;
				this.schemaField();
				}
				break;

			case 2:
				{
				this.state = 78;
				this.schemaScopedBlock();
				}
				break;
			}
			this.state = 84;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === WickParser.SEMICOLON || _la === WickParser.NL) {
				{
				{
				this.state = 81;
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
				this.state = 86;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	public schemaField(): SchemaFieldContext {
		let _localctx: SchemaFieldContext = new SchemaFieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, WickParser.RULE_schemaField);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 87;
			this.id();
			this.state = 88;
			this.match(WickParser.SchemaTypeToken);
			this.state = 92;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === WickParser.SchemaTypeLiteral) {
				{
				{
				this.state = 89;
				this.schemaType();
				}
				}
				this.state = 94;
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
	public schemaScopedBlock(): SchemaScopedBlockContext {
		let _localctx: SchemaScopedBlockContext = new SchemaScopedBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, WickParser.RULE_schemaScopedBlock);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 95;
			this.id();
			this.state = 99;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 96;
					this.match(WickParser.SchemaTypeLiteral);
					}
					}
				}
				this.state = 101;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
			}
			this.state = 102;
			this.schemaBlock();
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
	public schemaType(): SchemaTypeContext {
		let _localctx: SchemaTypeContext = new SchemaTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, WickParser.RULE_schemaType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 104;
			this.match(WickParser.SchemaTypeLiteral);
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
		this.enterRule(_localctx, 14, WickParser.RULE_statement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 108;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				{
				this.state = 106;
				this.field();
				}
				break;

			case 2:
				{
				this.state = 107;
				this.scopedBlock();
				}
				break;
			}
			this.state = 111;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 110;
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
				this.state = 113;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === WickParser.SEMICOLON || _la === WickParser.NL);
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
		this.enterRule(_localctx, 16, WickParser.RULE_id);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 115;
			this.match(WickParser.GenericLiteral);
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
	public quotelessArgument(): QuotelessArgumentContext {
		let _localctx: QuotelessArgumentContext = new QuotelessArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, WickParser.RULE_quotelessArgument);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 117;
			this.match(WickParser.GenericLiteral);
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
		this.enterRule(_localctx, 20, WickParser.RULE_str);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 119;
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
		this.enterRule(_localctx, 22, WickParser.RULE_number_int);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 121;
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
		this.enterRule(_localctx, 24, WickParser.RULE_number_double);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 123;
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
		this.enterRule(_localctx, 26, WickParser.RULE_bool);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 125;
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
		this.enterRule(_localctx, 28, WickParser.RULE_variable);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 127;
			this.match(WickParser.VARIABLE_PREFIX);
			this.state = 128;
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
		this.enterRule(_localctx, 30, WickParser.RULE_argument);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 136;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WickParser.GenericLiteral:
				{
				this.state = 130;
				this.quotelessArgument();
				}
				break;
			case WickParser.StringLiteral:
				{
				this.state = 131;
				this.str();
				}
				break;
			case WickParser.IntegerLiteral:
				{
				this.state = 132;
				this.number_int();
				}
				break;
			case WickParser.DoubleLiteral:
				{
				this.state = 133;
				this.number_double();
				}
				break;
			case WickParser.BooleanLiteral:
				{
				this.state = 134;
				this.bool();
				}
				break;
			case WickParser.VARIABLE_PREFIX:
				{
				this.state = 135;
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
		this.enterRule(_localctx, 32, WickParser.RULE_field);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 138;
			this.id();
			this.state = 142;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << WickParser.StringLiteral) | (1 << WickParser.IntegerLiteral) | (1 << WickParser.DoubleLiteral) | (1 << WickParser.BooleanLiteral) | (1 << WickParser.GenericLiteral) | (1 << WickParser.VARIABLE_PREFIX))) !== 0)) {
				{
				{
				this.state = 139;
				this.argument();
				}
				}
				this.state = 144;
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
		this.enterRule(_localctx, 34, WickParser.RULE_scopedBlock);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 145;
			this.id();
			this.state = 149;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 146;
					this.argument();
					}
					}
				}
				this.state = 151;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
			}
			this.state = 152;
			this.block();
			this.state = 156;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 153;
					this.match(WickParser.NL);
					}
					}
				}
				this.state = 158;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
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
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, WickParser.RULE_block);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 159;
			this.match(WickParser.LBRACE);
			this.state = 163;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === WickParser.NL) {
				{
				{
				this.state = 160;
				this.match(WickParser.NL);
				}
				}
				this.state = 165;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 169;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === WickParser.GenericLiteral) {
				{
				{
				this.state = 166;
				this.statement();
				}
				}
				this.state = 171;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 172;
			this.match(WickParser.RBRACE);
			this.state = 176;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 173;
					this.match(WickParser.NL);
					}
					}
				}
				this.state = 178;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
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

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x14\xB6\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x03\x02\x05\x02*\n\x02\x03\x02\x07\x02-\n\x02" +
		"\f\x02\x0E\x020\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x07\x03" +
		"7\n\x03\f\x03\x0E\x03:\v\x03\x03\x04\x03\x04\x07\x04>\n\x04\f\x04\x0E" +
		"\x04A\v\x04\x03\x04\x07\x04D\n\x04\f\x04\x0E\x04G\v\x04\x03\x04\x03\x04" +
		"\x07\x04K\n\x04\f\x04\x0E\x04N\v\x04\x03\x05\x03\x05\x05\x05R\n\x05\x03" +
		"\x05\x07\x05U\n\x05\f\x05\x0E\x05X\v\x05\x03\x06\x03\x06\x03\x06\x07\x06" +
		"]\n\x06\f\x06\x0E\x06`\v\x06\x03\x07\x03\x07\x07\x07d\n\x07\f\x07\x0E" +
		"\x07g\v\x07\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x05\to\n\t\x03\t\x06" +
		"\tr\n\t\r\t\x0E\ts\x03\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03\r\x03\r\x03" +
		"\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x05\x11\x8B\n\x11\x03\x12\x03\x12\x07\x12" +
		"\x8F\n\x12\f\x12\x0E\x12\x92\v\x12\x03\x13\x03\x13\x07\x13\x96\n\x13\f" +
		"\x13\x0E\x13\x99\v\x13\x03\x13\x03\x13\x07\x13\x9D\n\x13\f\x13\x0E\x13" +
		"\xA0\v\x13\x03\x14\x03\x14\x07\x14\xA4\n\x14\f\x14\x0E\x14\xA7\v\x14\x03" +
		"\x14\x07\x14\xAA\n\x14\f\x14\x0E\x14\xAD\v\x14\x03\x14\x03\x14\x07\x14" +
		"\xB1\n\x14\f\x14\x0E\x14\xB4\v\x14\x03\x14\x04e\x97\x02\x02\x15\x02\x02" +
		"\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16" +
		"\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02\x02\x03\x03" +
		"\x02\x10\x11\x02\xB9\x02)\x03\x02\x02\x02\x043\x03\x02\x02\x02\x06;\x03" +
		"\x02\x02\x02\bQ\x03\x02\x02\x02\nY\x03\x02\x02\x02\fa\x03\x02\x02\x02" +
		"\x0Ej\x03\x02\x02\x02\x10n\x03\x02\x02\x02\x12u\x03\x02\x02\x02\x14w\x03" +
		"\x02\x02\x02\x16y\x03\x02\x02\x02\x18{\x03\x02\x02\x02\x1A}\x03\x02\x02" +
		"\x02\x1C\x7F\x03\x02\x02\x02\x1E\x81\x03\x02\x02\x02 \x8A\x03\x02\x02" +
		"\x02\"\x8C\x03\x02\x02\x02$\x93\x03\x02\x02\x02&\xA1\x03\x02\x02\x02(" +
		"*\x05\x04\x03\x02)(\x03\x02\x02\x02)*\x03\x02\x02\x02*.\x03\x02\x02\x02" +
		"+-\x05\x10\t\x02,+\x03\x02\x02\x02-0\x03\x02\x02\x02.,\x03\x02\x02\x02" +
		"./\x03\x02\x02\x02/1\x03\x02\x02\x020.\x03\x02\x02\x0212\x07\x02\x02\x03" +
		"2\x03\x03\x02\x02\x0234\x07\x07\x02\x0248\x05\x06\x04\x0257\x07\x11\x02" +
		"\x0265\x03\x02\x02\x027:\x03\x02\x02\x0286\x03\x02\x02\x0289\x03\x02\x02" +
		"\x029\x05\x03\x02\x02\x02:8\x03\x02\x02\x02;?\x07\r\x02\x02<>\x07\x11" +
		"\x02\x02=<\x03\x02\x02\x02>A\x03\x02\x02\x02?=\x03\x02\x02\x02?@\x03\x02" +
		"\x02\x02@E\x03\x02\x02\x02A?\x03\x02\x02\x02BD\x05\b\x05\x02CB\x03\x02" +
		"\x02\x02DG\x03\x02\x02\x02EC\x03\x02\x02\x02EF\x03\x02\x02\x02FH\x03\x02" +
		"\x02\x02GE\x03\x02\x02\x02HL\x07\x0E\x02\x02IK\x07\x11\x02\x02JI\x03\x02" +
		"\x02\x02KN\x03\x02\x02\x02LJ\x03\x02\x02\x02LM\x03\x02\x02\x02M\x07\x03" +
		"\x02\x02\x02NL\x03\x02\x02\x02OR\x05\n\x06\x02PR\x05\f\x07\x02QO\x03\x02" +
		"\x02\x02QP\x03\x02\x02\x02RV\x03\x02\x02\x02SU\t\x02\x02\x02TS\x03\x02" +
		"\x02\x02UX\x03\x02\x02\x02VT\x03\x02\x02\x02VW\x03\x02\x02\x02W\t\x03" +
		"\x02\x02\x02XV\x03\x02\x02\x02YZ\x05\x12\n\x02Z^\x07\b\x02\x02[]\x05\x0E" +
		"\b\x02\\[\x03\x02\x02\x02]`\x03\x02\x02\x02^\\\x03\x02\x02\x02^_\x03\x02" +
		"\x02\x02_\v\x03\x02\x02\x02`^\x03\x02\x02\x02ae\x05\x12\n\x02bd\x07\t" +
		"\x02\x02cb\x03\x02\x02\x02dg\x03\x02\x02\x02ef\x03\x02\x02\x02ec\x03\x02" +
		"\x02\x02fh\x03\x02\x02\x02ge\x03\x02\x02\x02hi\x05\x06\x04\x02i\r\x03" +
		"\x02\x02\x02jk\x07\t\x02\x02k\x0F\x03\x02\x02\x02lo\x05\"\x12\x02mo\x05" +
		"$\x13\x02nl\x03\x02\x02\x02nm\x03\x02\x02\x02oq\x03\x02\x02\x02pr\t\x02" +
		"\x02\x02qp\x03\x02\x02\x02rs\x03\x02\x02\x02sq\x03\x02\x02\x02st\x03\x02" +
		"\x02\x02t\x11\x03\x02\x02\x02uv\x07\n\x02\x02v\x13\x03\x02\x02\x02wx\x07" +
		"\n\x02\x02x\x15\x03\x02\x02\x02yz\x07\x03\x02\x02z\x17\x03\x02\x02\x02" +
		"{|\x07\x04\x02\x02|\x19\x03\x02\x02\x02}~\x07\x05\x02\x02~\x1B\x03\x02" +
		"\x02\x02\x7F\x80\x07\x06\x02\x02\x80\x1D\x03\x02\x02\x02\x81\x82\x07\x0F" +
		"\x02\x02\x82\x83\x05\x12\n\x02\x83\x1F\x03\x02\x02\x02\x84\x8B\x05\x14" +
		"\v\x02\x85\x8B\x05\x16\f\x02\x86\x8B\x05\x18\r\x02\x87\x8B\x05\x1A\x0E" +
		"\x02\x88\x8B\x05\x1C\x0F\x02\x89\x8B\x05\x1E\x10\x02\x8A\x84\x03\x02\x02" +
		"\x02\x8A\x85\x03\x02\x02\x02\x8A\x86\x03\x02\x02\x02\x8A\x87\x03\x02\x02" +
		"\x02\x8A\x88\x03\x02\x02\x02\x8A\x89\x03\x02\x02\x02\x8B!\x03\x02\x02" +
		"\x02\x8C\x90\x05\x12\n\x02\x8D\x8F\x05 \x11\x02\x8E\x8D\x03\x02\x02\x02" +
		"\x8F\x92\x03\x02\x02\x02\x90\x8E\x03\x02\x02\x02\x90\x91\x03\x02\x02\x02" +
		"\x91#\x03\x02\x02\x02\x92\x90\x03\x02\x02\x02\x93\x97\x05\x12\n\x02\x94" +
		"\x96\x05 \x11\x02\x95\x94\x03\x02\x02\x02\x96\x99\x03\x02\x02\x02\x97" +
		"\x98\x03\x02\x02\x02\x97\x95\x03\x02\x02\x02\x98\x9A\x03\x02\x02\x02\x99" +
		"\x97\x03\x02\x02\x02\x9A\x9E\x05&\x14\x02\x9B\x9D\x07\x11\x02\x02\x9C" +
		"\x9B\x03\x02\x02\x02\x9D\xA0\x03\x02\x02\x02\x9E\x9C\x03\x02\x02\x02\x9E" +
		"\x9F\x03\x02\x02\x02\x9F%\x03\x02\x02\x02\xA0\x9E\x03\x02\x02\x02\xA1" +
		"\xA5\x07\r\x02\x02\xA2\xA4\x07\x11\x02\x02\xA3\xA2\x03\x02\x02\x02\xA4" +
		"\xA7\x03\x02\x02\x02\xA5\xA3\x03\x02\x02\x02\xA5\xA6\x03\x02\x02\x02\xA6" +
		"\xAB\x03\x02\x02\x02\xA7\xA5\x03\x02\x02\x02\xA8\xAA\x05\x10\t\x02\xA9" +
		"\xA8\x03\x02\x02\x02\xAA\xAD\x03\x02\x02\x02\xAB\xA9\x03\x02\x02\x02\xAB" +
		"\xAC\x03\x02\x02\x02\xAC\xAE\x03\x02\x02\x02\xAD\xAB\x03\x02\x02\x02\xAE" +
		"\xB2\x07\x0E\x02\x02\xAF\xB1\x07\x11\x02\x02\xB0\xAF\x03\x02\x02\x02\xB1" +
		"\xB4\x03\x02\x02\x02\xB2\xB0\x03\x02\x02\x02\xB2\xB3\x03\x02\x02\x02\xB3" +
		"\'\x03\x02\x02\x02\xB4\xB2\x03\x02\x02\x02\x15).8?ELQV^ens\x8A\x90\x97" +
		"\x9E\xA5\xAB\xB2";
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
	public schema(): SchemaContext | undefined {
		return this.tryGetRuleContext(0, SchemaContext);
	}
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


export class SchemaContext extends ParserRuleContext {
	public SchemaPrefix(): TerminalNode { return this.getToken(WickParser.SchemaPrefix, 0); }
	public schemaBlock(): SchemaBlockContext {
		return this.getRuleContext(0, SchemaBlockContext);
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(WickParser.NL);
		} else {
			return this.getToken(WickParser.NL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WickParser.RULE_schema; }
	// @Override
	public enterRule(listener: WickParserListener): void {
		if (listener.enterSchema) {
			listener.enterSchema(this);
		}
	}
	// @Override
	public exitRule(listener: WickParserListener): void {
		if (listener.exitSchema) {
			listener.exitSchema(this);
		}
	}
}


export class SchemaBlockContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(WickParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(WickParser.RBRACE, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(WickParser.NL);
		} else {
			return this.getToken(WickParser.NL, i);
		}
	}
	public schemaStatement(): SchemaStatementContext[];
	public schemaStatement(i: number): SchemaStatementContext;
	public schemaStatement(i?: number): SchemaStatementContext | SchemaStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SchemaStatementContext);
		} else {
			return this.getRuleContext(i, SchemaStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WickParser.RULE_schemaBlock; }
	// @Override
	public enterRule(listener: WickParserListener): void {
		if (listener.enterSchemaBlock) {
			listener.enterSchemaBlock(this);
		}
	}
	// @Override
	public exitRule(listener: WickParserListener): void {
		if (listener.exitSchemaBlock) {
			listener.exitSchemaBlock(this);
		}
	}
}


export class SchemaStatementContext extends ParserRuleContext {
	public schemaField(): SchemaFieldContext | undefined {
		return this.tryGetRuleContext(0, SchemaFieldContext);
	}
	public schemaScopedBlock(): SchemaScopedBlockContext | undefined {
		return this.tryGetRuleContext(0, SchemaScopedBlockContext);
	}
	public SEMICOLON(): TerminalNode[];
	public SEMICOLON(i: number): TerminalNode;
	public SEMICOLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(WickParser.SEMICOLON);
		} else {
			return this.getToken(WickParser.SEMICOLON, i);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(WickParser.NL);
		} else {
			return this.getToken(WickParser.NL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WickParser.RULE_schemaStatement; }
	// @Override
	public enterRule(listener: WickParserListener): void {
		if (listener.enterSchemaStatement) {
			listener.enterSchemaStatement(this);
		}
	}
	// @Override
	public exitRule(listener: WickParserListener): void {
		if (listener.exitSchemaStatement) {
			listener.exitSchemaStatement(this);
		}
	}
}


export class SchemaFieldContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public SchemaTypeToken(): TerminalNode { return this.getToken(WickParser.SchemaTypeToken, 0); }
	public schemaType(): SchemaTypeContext[];
	public schemaType(i: number): SchemaTypeContext;
	public schemaType(i?: number): SchemaTypeContext | SchemaTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SchemaTypeContext);
		} else {
			return this.getRuleContext(i, SchemaTypeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WickParser.RULE_schemaField; }
	// @Override
	public enterRule(listener: WickParserListener): void {
		if (listener.enterSchemaField) {
			listener.enterSchemaField(this);
		}
	}
	// @Override
	public exitRule(listener: WickParserListener): void {
		if (listener.exitSchemaField) {
			listener.exitSchemaField(this);
		}
	}
}


export class SchemaScopedBlockContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public schemaBlock(): SchemaBlockContext {
		return this.getRuleContext(0, SchemaBlockContext);
	}
	public SchemaTypeLiteral(): TerminalNode[];
	public SchemaTypeLiteral(i: number): TerminalNode;
	public SchemaTypeLiteral(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(WickParser.SchemaTypeLiteral);
		} else {
			return this.getToken(WickParser.SchemaTypeLiteral, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WickParser.RULE_schemaScopedBlock; }
	// @Override
	public enterRule(listener: WickParserListener): void {
		if (listener.enterSchemaScopedBlock) {
			listener.enterSchemaScopedBlock(this);
		}
	}
	// @Override
	public exitRule(listener: WickParserListener): void {
		if (listener.exitSchemaScopedBlock) {
			listener.exitSchemaScopedBlock(this);
		}
	}
}


export class SchemaTypeContext extends ParserRuleContext {
	public SchemaTypeLiteral(): TerminalNode { return this.getToken(WickParser.SchemaTypeLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WickParser.RULE_schemaType; }
	// @Override
	public enterRule(listener: WickParserListener): void {
		if (listener.enterSchemaType) {
			listener.enterSchemaType(this);
		}
	}
	// @Override
	public exitRule(listener: WickParserListener): void {
		if (listener.exitSchemaType) {
			listener.exitSchemaType(this);
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
	public SEMICOLON(): TerminalNode[];
	public SEMICOLON(i: number): TerminalNode;
	public SEMICOLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(WickParser.SEMICOLON);
		} else {
			return this.getToken(WickParser.SEMICOLON, i);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(WickParser.NL);
		} else {
			return this.getToken(WickParser.NL, i);
		}
	}
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
	public GenericLiteral(): TerminalNode { return this.getToken(WickParser.GenericLiteral, 0); }
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


export class QuotelessArgumentContext extends ParserRuleContext {
	public GenericLiteral(): TerminalNode { return this.getToken(WickParser.GenericLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WickParser.RULE_quotelessArgument; }
	// @Override
	public enterRule(listener: WickParserListener): void {
		if (listener.enterQuotelessArgument) {
			listener.enterQuotelessArgument(this);
		}
	}
	// @Override
	public exitRule(listener: WickParserListener): void {
		if (listener.exitQuotelessArgument) {
			listener.exitQuotelessArgument(this);
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
	public quotelessArgument(): QuotelessArgumentContext | undefined {
		return this.tryGetRuleContext(0, QuotelessArgumentContext);
	}
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
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(WickParser.NL);
		} else {
			return this.getToken(WickParser.NL, i);
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
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(WickParser.NL);
		} else {
			return this.getToken(WickParser.NL, i);
		}
	}
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


