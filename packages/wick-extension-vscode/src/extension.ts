import * as vscode from 'vscode'

export function activate(context: vscode.ExtensionContext) {
	// Register the language configuration
	const wickConfiguration: vscode.LanguageConfiguration = {
		comments: {
			lineComment: '//',
		},
		brackets: [['{', '}']],
		indentationRules: {
			increaseIndentPattern: /.*\{[^}"']*$/,
			decreaseIndentPattern: /^\s*\}/,
		},
	}

	const wickLanguageConfiguration = vscode.languages.setLanguageConfiguration(
		'wick',
		wickConfiguration
	)
	context.subscriptions.push(wickLanguageConfiguration)
}
