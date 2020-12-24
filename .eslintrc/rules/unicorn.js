const unicornRule = {
	"unicorn/better-regex": [
		"error",
		{
			"sortCharacterClasses": true,
		},
	],
	"unicorn/catch-error-name": [
		"error",
		{
			"name": "error",
		},
	],
	"unicorn/consistent-function-scoping": [
		"error",
		{
			"checkArrowFunctions": true,
		},
	],
	"unicorn/custom-error-definition": [
		"error",
	],
	"unicorn/empty-brace-spaces": [
		"error",
	],
	"unicorn/error-message": [
		"error",
	],
	"unicorn/escape-case": [
		"error",
	],
	"unicorn/expiring-todo-comments": [
		"error",
		{
			"allowWarningComments": true,
			"ignoreDatesOnPullRequests": true,
			"terms": [
				"fixme",
				"todo",
				"xxx",
			],
		},
	],
	"unicorn/explicit-length-check": [
		"error",
		{
			"non-zero": "not-equal",
		},
	],
	"unicorn/filename-case": [
		"error",
		{
			"cases": {
				"camelCase": false,
				"kebabCase": true,
				"pascalCase": false,
				"snakeCase": false,
			},
		},
	],
	"unicorn/import-index": [
		"error",
		{
			"ignoreImports": false,
		},
	],
	"unicorn/import-style": [
		"error",
		{
			"checkDynamicImport": true,
			"checkExportFrom": true,
			"checkImport": true,
			"checkRequire": true,
			"extendDefaultStyles": false,
			"styles": {
				"chalk": {
					"default": true,
					"named": false,
					"namespace": false,
					"unassigned": false,
				},
				"path": {
					"default": true,
					"named": false,
					"namespace": false,
					"unassigned": false,
				},
				"util": {
					"default": false,
					"named": true,
					"namespace": false,
					"unassigned": false,
				},
			},
		},
	],
	"unicorn/new-for-builtins": [
		"error",
	],
	"unicorn/no-abusive-eslint-disable": [
		"error",
	],
	"unicorn/no-array-instanceof": [
		"error",
	],
	"unicorn/no-console-spaces": [
		"error",
	],
	"unicorn/no-fn-reference-in-iterator": [
		"error",
	],
	"unicorn/no-for-loop": [
		"error",
	],
	"unicorn/no-hex-escape": [
		"error",
	],
	"unicorn/no-keyword-prefix": [
		"error",
		{
			"blacklist": [
				"class",
				"new",
			],
			"checkProperties": true,
			"onlyCamelCase": false,
		},
	],
	"unicorn/no-lonely-if": [
		"error",
	],
	"unicorn/no-nested-ternary": [
		"error",
		{
			"checkStrictEquality": true,
		},
	],
	"unicorn/no-new-buffer": [
		"error",
	],
	"unicorn/no-null": [
		"error",
		{
			"checkStrictEquality": false,
		},
	],
	"unicorn/no-object-as-default-parameter": [
		"error",
	],
	"unicorn/no-process-exit": [
		"error",
	],
	"unicorn/no-reduce": [
		"error",
	],
	"unicorn/no-unreadable-array-destructuring": [
		"error",
	],
	"unicorn/no-unsafe-regex": [
		"error",
	],
	"unicorn/no-unused-properties": [
		"error",
	],
	"unicorn/no-useless-undefined": [
		"error",
		{
			"checkArguments": true,
		},
	],
	"unicorn/no-zero-fractions": [
		"error",
	],
	"unicorn/number-literal-case": [
		"error",
	],
	"unicorn/numeric-separators-style": [
		"error",
		{
			"binary": {
				"groupLength": 4,
				"minimumDigits": 0,
			},
			"hexadecimal": {
				"groupLength": 2,
				"minimumDigits": 0,
			},
			"number": {
				"groupLength": 3,
				"minimumDigits": 0,
			},
			"octal": {
				"groupLength": 4,
				"minimumDigits": 0,
			},
		},
	],
	"unicorn/prefer-add-event-listener": [
		"error",
	],
	"unicorn/prefer-array-find": [
		"error",
	],
	"unicorn/prefer-dataset": [
		"error",
	],
	"unicorn/prefer-date-now": [
		"error",
	],
	"unicorn/prefer-event-key": [
		"error",
	],
	"unicorn/prefer-exponentiation-operator": [
		"off",
	],
	"unicorn/prefer-flat-map": [
		"error",
	],
	"unicorn/prefer-includes": [
		"error",
	],
	"unicorn/prefer-math-trunc": [
		"error",
	],
	"unicorn/prefer-modern-dom-apis": [
		"error",
	],
	"unicorn/prefer-negative-index": [
		"error",
	],
	"unicorn/prefer-node-append": [
		"error",
	],
	"unicorn/prefer-node-remove": [
		"error",
	],
	"unicorn/prefer-number-properties": [
		"error",
		{
			"checkInfinity": true,
		},
	],
	"unicorn/prefer-optional-catch-binding": [
		"error",
	],
	"unicorn/prefer-query-selector": [
		"error",
	],
	"unicorn/prefer-reflect-apply": [
		"error",
	],
	"unicorn/prefer-replace-all": [
		"error",
	],
	"unicorn/prefer-set-has": [
		"error",
	],
	"unicorn/prefer-spread": [
		"error",
	],
	"unicorn/prefer-starts-ends-with": [
		"error",
	],
	"unicorn/prefer-string-slice": [
		"error",
	],
	"unicorn/prefer-ternary": [
		"error",
	],
	"unicorn/prefer-text-content": [
		"error",
	],
	"unicorn/prefer-trim-start-end": [
		"error",
	],
	"unicorn/prefer-type-error": [
		"error",
	],
	"unicorn/prevent-abbreviations": [
		"error",
		{
			"checkDefaultAndNamespaceImports": true,
			"checkFilenames": true,
			"checkProperties": true,
			"checkShorthandImports": true,
			"checkShorthandProperties": true,
			"checkVariables": true,
			"extendDefaultReplacements": true,
			"extendDefaultWhitelist": true,
			"whitelist": {
				"getServerSideProps": true,
				"getStaticProps": true,
			},
		},
	],
	"unicorn/regex-shorthand": [
		"off",
	],
	"unicorn/string-content": [
		"error",
	],
	"unicorn/throw-new-error": [
		"error",
	],
}

module.exports = unicornRule;
