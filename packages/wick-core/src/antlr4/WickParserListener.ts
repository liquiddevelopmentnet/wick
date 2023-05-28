// Generated from /home/fb/projects/wick/packages/wick-core/grammar/WickParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { CompilationUnitContext } from "./WickParser";
import { SchemaContext } from "./WickParser";
import { SchemaBlockContext } from "./WickParser";
import { SchemaStatementContext } from "./WickParser";
import { SchemaFieldContext } from "./WickParser";
import { SchemaScopedBlockContext } from "./WickParser";
import { SchemaTypeContext } from "./WickParser";
import { StatementContext } from "./WickParser";
import { IdContext } from "./WickParser";
import { QuotelessArgumentContext } from "./WickParser";
import { StrContext } from "./WickParser";
import { Number_intContext } from "./WickParser";
import { Number_doubleContext } from "./WickParser";
import { BoolContext } from "./WickParser";
import { VariableContext } from "./WickParser";
import { ArgumentContext } from "./WickParser";
import { FieldContext } from "./WickParser";
import { ScopedBlockContext } from "./WickParser";
import { BlockContext } from "./WickParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `WickParser`.
 */
export interface WickParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `WickParser.compilationUnit`.
	 * @param ctx the parse tree
	 */
	enterCompilationUnit?: (ctx: CompilationUnitContext) => void;
	/**
	 * Exit a parse tree produced by `WickParser.compilationUnit`.
	 * @param ctx the parse tree
	 */
	exitCompilationUnit?: (ctx: CompilationUnitContext) => void;

	/**
	 * Enter a parse tree produced by `WickParser.schema`.
	 * @param ctx the parse tree
	 */
	enterSchema?: (ctx: SchemaContext) => void;
	/**
	 * Exit a parse tree produced by `WickParser.schema`.
	 * @param ctx the parse tree
	 */
	exitSchema?: (ctx: SchemaContext) => void;

	/**
	 * Enter a parse tree produced by `WickParser.schemaBlock`.
	 * @param ctx the parse tree
	 */
	enterSchemaBlock?: (ctx: SchemaBlockContext) => void;
	/**
	 * Exit a parse tree produced by `WickParser.schemaBlock`.
	 * @param ctx the parse tree
	 */
	exitSchemaBlock?: (ctx: SchemaBlockContext) => void;

	/**
	 * Enter a parse tree produced by `WickParser.schemaStatement`.
	 * @param ctx the parse tree
	 */
	enterSchemaStatement?: (ctx: SchemaStatementContext) => void;
	/**
	 * Exit a parse tree produced by `WickParser.schemaStatement`.
	 * @param ctx the parse tree
	 */
	exitSchemaStatement?: (ctx: SchemaStatementContext) => void;

	/**
	 * Enter a parse tree produced by `WickParser.schemaField`.
	 * @param ctx the parse tree
	 */
	enterSchemaField?: (ctx: SchemaFieldContext) => void;
	/**
	 * Exit a parse tree produced by `WickParser.schemaField`.
	 * @param ctx the parse tree
	 */
	exitSchemaField?: (ctx: SchemaFieldContext) => void;

	/**
	 * Enter a parse tree produced by `WickParser.schemaScopedBlock`.
	 * @param ctx the parse tree
	 */
	enterSchemaScopedBlock?: (ctx: SchemaScopedBlockContext) => void;
	/**
	 * Exit a parse tree produced by `WickParser.schemaScopedBlock`.
	 * @param ctx the parse tree
	 */
	exitSchemaScopedBlock?: (ctx: SchemaScopedBlockContext) => void;

	/**
	 * Enter a parse tree produced by `WickParser.schemaType`.
	 * @param ctx the parse tree
	 */
	enterSchemaType?: (ctx: SchemaTypeContext) => void;
	/**
	 * Exit a parse tree produced by `WickParser.schemaType`.
	 * @param ctx the parse tree
	 */
	exitSchemaType?: (ctx: SchemaTypeContext) => void;

	/**
	 * Enter a parse tree produced by `WickParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `WickParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `WickParser.id`.
	 * @param ctx the parse tree
	 */
	enterId?: (ctx: IdContext) => void;
	/**
	 * Exit a parse tree produced by `WickParser.id`.
	 * @param ctx the parse tree
	 */
	exitId?: (ctx: IdContext) => void;

	/**
	 * Enter a parse tree produced by `WickParser.quotelessArgument`.
	 * @param ctx the parse tree
	 */
	enterQuotelessArgument?: (ctx: QuotelessArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `WickParser.quotelessArgument`.
	 * @param ctx the parse tree
	 */
	exitQuotelessArgument?: (ctx: QuotelessArgumentContext) => void;

	/**
	 * Enter a parse tree produced by `WickParser.str`.
	 * @param ctx the parse tree
	 */
	enterStr?: (ctx: StrContext) => void;
	/**
	 * Exit a parse tree produced by `WickParser.str`.
	 * @param ctx the parse tree
	 */
	exitStr?: (ctx: StrContext) => void;

	/**
	 * Enter a parse tree produced by `WickParser.number_int`.
	 * @param ctx the parse tree
	 */
	enterNumber_int?: (ctx: Number_intContext) => void;
	/**
	 * Exit a parse tree produced by `WickParser.number_int`.
	 * @param ctx the parse tree
	 */
	exitNumber_int?: (ctx: Number_intContext) => void;

	/**
	 * Enter a parse tree produced by `WickParser.number_double`.
	 * @param ctx the parse tree
	 */
	enterNumber_double?: (ctx: Number_doubleContext) => void;
	/**
	 * Exit a parse tree produced by `WickParser.number_double`.
	 * @param ctx the parse tree
	 */
	exitNumber_double?: (ctx: Number_doubleContext) => void;

	/**
	 * Enter a parse tree produced by `WickParser.bool`.
	 * @param ctx the parse tree
	 */
	enterBool?: (ctx: BoolContext) => void;
	/**
	 * Exit a parse tree produced by `WickParser.bool`.
	 * @param ctx the parse tree
	 */
	exitBool?: (ctx: BoolContext) => void;

	/**
	 * Enter a parse tree produced by `WickParser.variable`.
	 * @param ctx the parse tree
	 */
	enterVariable?: (ctx: VariableContext) => void;
	/**
	 * Exit a parse tree produced by `WickParser.variable`.
	 * @param ctx the parse tree
	 */
	exitVariable?: (ctx: VariableContext) => void;

	/**
	 * Enter a parse tree produced by `WickParser.argument`.
	 * @param ctx the parse tree
	 */
	enterArgument?: (ctx: ArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `WickParser.argument`.
	 * @param ctx the parse tree
	 */
	exitArgument?: (ctx: ArgumentContext) => void;

	/**
	 * Enter a parse tree produced by `WickParser.field`.
	 * @param ctx the parse tree
	 */
	enterField?: (ctx: FieldContext) => void;
	/**
	 * Exit a parse tree produced by `WickParser.field`.
	 * @param ctx the parse tree
	 */
	exitField?: (ctx: FieldContext) => void;

	/**
	 * Enter a parse tree produced by `WickParser.scopedBlock`.
	 * @param ctx the parse tree
	 */
	enterScopedBlock?: (ctx: ScopedBlockContext) => void;
	/**
	 * Exit a parse tree produced by `WickParser.scopedBlock`.
	 * @param ctx the parse tree
	 */
	exitScopedBlock?: (ctx: ScopedBlockContext) => void;

	/**
	 * Enter a parse tree produced by `WickParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `WickParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;
}

