import chalk from 'chalk'

export type WickError = {
	name: 'RedeclarationError' | 'SchemaError' | 'GenericError'
	message: string
	line: number
	column: number
}

let errors: WickError[] = []

const formatErrors = (errors: WickError[], color: boolean = true): string => {
	let output = ''
	for (let error of errors) {
		if (color) {
			output +=
				chalk.redBright(
					`${chalk.red(
						`${error.name} ${chalk.gray(`at ${error.line}:${error.column}:`)}`
					)} ${error.message}`
				) + '\n'
		} else {
			output += `${error.name} at ${error.line}:${error.column}: ${error.message}\n`
		}
	}
	return output
}

export default { formatErrors, errors }
