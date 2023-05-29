import { errors, printErrors } from './errors/Errors'
import { parse } from './ast/ModuleParser'
import chalk from 'chalk'

export * from './ast/ModuleParser'
export { WickError } from './errors/Errors'

const main = async () => {
	if (process.argv.length < 3) {
		console.error(chalk.redBright('no input file specified'))
		process.exit(1)
	}

	const { module } = await parse(process.argv[2])

	if (errors.length > 0) {
		printErrors(errors)
		console.error()
		console.error(chalk.redBright(`failed with ${errors.length} errors`))
		process.exit(1)
	}

	console.log(JSON.stringify(module, null, 2))
}

main()
