import { errors, printErrors } from './util/Errors'
import { parse } from './ast/ModuleParser'
import chalk from 'chalk'

export * from './ast/ModuleParser'
export { WickError } from './util/Errors'

const main = async () => {
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
