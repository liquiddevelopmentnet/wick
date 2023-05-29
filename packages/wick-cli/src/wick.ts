#!/usr/bin/env node

import yargs from 'yargs/yargs'
import { hideBin } from 'yargs/helpers'
import Run from './Run'

yargs(hideBin(process.argv))
	.showHelpOnFail(true)
	.demandCommand(1, '')
	.command(
		'check <file>',
		'Check the validity and schema-conformance (if available) of a Wick file',
		(yargs) =>
			yargs
				.positional('file', {
					type: 'string',
					description: 'The path to the Wick file to check',
				})
				.option('include', {
					alias: 'i',
					type: 'array',
					description: 'Include wick files, supports globbing',
					default: [],
				}),
		({ file, include }) => {
			Run({ file: file as string, include: include as string[] })
		}
	)
	.parse()
