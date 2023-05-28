import { WickParserListener } from './antlr4/WickParserListener'
import { WickParser } from './antlr4/WickParser'
import { WickLexer } from './antlr4/WickLexer'
import { CharStreams, CommonTokenStream } from 'antlr4ts'
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker'
import { readFileSync } from 'fs'
import { WickWalker } from './ast/WickWalker'
import { inspect } from 'util'

let inputStream = CharStreams.fromString(readFileSync(process.argv[2], 'utf8'))

let lexer = new WickLexer(inputStream)
let tokenStream = new CommonTokenStream(lexer)
let parser = new WickParser(tokenStream)

let tree = parser.compilationUnit()

ParseTreeWalker.DEFAULT.walk(
	new WickWalker((module) => {
		console.log(`finished parsing ${process.argv[2]}`)
		console.log(
			inspect(module, { showHidden: false, depth: null, colors: true })
		)
	}) as WickParserListener,
	tree
)
