import chalk from 'chalk'

export type WickError = {
	name: 'RedeclarationError' | 'GenericError'
	message: string
	line: number
	column: number
}

export let errors: WickError[] = []

export function printErrors(errors: WickError[]) {
	for (let error of errors) {
		console.error(
			chalk.redBright(
				`${chalk.red(
					`${error.name} ${chalk.gray(`at ${error.line}:${error.column}:`)}`
				)} ${error.message}`
			)
		)
	}
}

export function pushError(error: WickError) {
	errors.push(error)
}
