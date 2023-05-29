import fs from 'fs'
import chalk from 'chalk'
import signale from 'signale'

export default function Run({
	file,
	include,
	output = 'text',
}: {
	file: string
	include: string[]
	output?: 'json' | 'text'
}) {
	if (!fs.existsSync(file)) {
		signale.fatal(`{chalk.blueBright(file)} does not exist`)
		process.exit(1)
	}

	if (!fs.lstatSync(file).isFile()) {
		signale.fatal(`${chalk.blueBright(file)} is not a file`)
		process.exit(1)
	}

	if (!file.endsWith('.w')) {
		signale.fatal(`${chalk.blueBright(file)} is not a Wick file`)
		process.exit(1)
	}
}
