import { WickParserListener } from './antlr4/WickParserListener'
import { CompilationUnitContext, FieldContext, ScopedBlockContext, WickParser } from './antlr4/WickParser';
import { WickLexer } from './antlr4/WickLexer';
import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker'
import { readFileSync } from 'fs'
import { inspect } from 'util';

let inputStream = new ANTLRInputStream(readFileSync(process.argv[2], 'utf8'));
let lexer = new WickLexer(inputStream);
let tokenStream = new CommonTokenStream(lexer);
let parser = new WickParser(tokenStream);

let tree = parser.compilationUnit();
class WickWalker implements WickParserListener {
  scope: string[] = []
  object: any = {}

  enterScopedBlock(ctx: ScopedBlockContext) { 
    this.scope.push(ctx.id().text)
  }

  exitScopedBlock(ctx: ScopedBlockContext) {
    this.scope.pop()
  }

  enterField(ctx: FieldContext) {
    let id = ctx.id().text
    let val: any = []
    ctx.argument() && ctx.argument().forEach(arg => {
      arg.str() && val.push(arg.str()!.text.substring(1, arg.str()!.text.length - 1))
      arg.number_int() && val.push(parseInt(arg.number_int()!.text))
      arg.number_double() && val.push(parseFloat(arg.number_double()!.text))
      arg.bool() && val.push(arg.bool()!.text === 'true')
      arg.variable() && val.push(arg.variable()!.text) // TODO: resolve variable
    })
    // place val in object under scope with name id
    let obj = this.object
    this.scope.forEach(scope => {
      obj[scope] = obj[scope] || {}
      obj = obj[scope]
    })
    val.length === 0 && (val = true)
    val.length === 1 && (val = val[0])
    obj[id] = val
  }

  exitCompilationUnit(ctx: CompilationUnitContext) {
    console.log(inspect(this.object, {showHidden: false, depth: null, colors: true}))
  }
}

const listener: WickParserListener = new WickWalker();
ParseTreeWalker.DEFAULT.walk(listener, tree)