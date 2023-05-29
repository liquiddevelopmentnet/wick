import { WickParserListener } from '../antlr4/WickParserListener'
import { WickParser } from '../antlr4/WickParser'
import { WickLexer } from '../antlr4/WickLexer'
import { CharStreams, CommonTokenStream } from 'antlr4ts'
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker'
import { WickWalker } from './WickWalker'

const removeMeta = (obj: any) => {
	if (obj._meta) {
		delete obj._meta
	}
}

export const parseModule = async (input: string): Promise<{ module: any }> => {
	return new Promise((resolve, _reject) => {
		let inputStream = CharStreams.fromString(input)

		let lexer = new WickLexer(inputStream)
		let tokenStream = new CommonTokenStream(lexer)
		let parser = new WickParser(tokenStream)

		let tree = parser.compilationUnit()

		ParseTreeWalker.DEFAULT.walk(
			new WickWalker((module) => {
				resolve({ module })
			}) as WickParserListener,
			tree
		)
	})
}
