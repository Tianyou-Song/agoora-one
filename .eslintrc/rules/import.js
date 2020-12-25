const importRule = {
	"import/default": "error",
	"import/dynamic-import-chunkname": [
		"error",
		{
			"importFunctions": [
				"import",
				"dynamicImport",
			],
			"webpackChunknameFormat": "[a-zA-Z0-9-/_]+",
		},
	],
	"import/export": "error",
	"import/exports-last": "error",
	"import/extensions": [
		"error",
		"never",
		{
			"yml": "always"
		}
	],
	"import/first": [
		"error",
		"absolute-first",
	],
	"import/group-exports": "error",
	"import/max-dependencies": [
		"error",
		{
			"max": 16,
		},
	],
	"import/named": "error",
	"import/namespace": [
		"error",
		{
			"allowComputed": false,
		},
	],
	"import/newline-after-import": [
		"error",
		{
			"count": 1,
		},
	],
	"import/no-absolute-path": [
		"error",
		{
			"amd": true,
			"commonjs": true,
			"esmodule": true,
		},
	],
	"import/no-amd": "error",
	"import/no-anonymous-default-export": [
		"error",
		{
			"allowAnonymousClass": false,
			"allowAnonymousFunction": false,
			"allowArray": false,
			"allowArrowFunction": false,
			"allowCallExpression": false,
			"allowLiteral": false,
			"allowObject": false,
		},
	],
	"import/no-commonjs": [
		"error",
		{
			"allowPrimitiveModules": false,
			"allowRequire": false,
		},
	],
	"import/no-cycle": [
		"error",
		{
			"ignoreExternal": false,
			"maxDepth": Number.POSITIVE_INFINITY,
		},
	],
	"import/no-default-export": "error",
	"import/no-deprecated": "error",
	"import/no-duplicates": [
		"error",
		{
			"considerQueryString": true,
		},
	],
	"import/no-dynamic-require": "error",
	"import/no-extraneous-dependencies": [
		"error",
		{
			"bundledDependencies": false,
			"devDependencies": false,
			"optionalDependencies": false,
			"peerDependencies": false,
		},
	],

	"import/no-internal-modules": [
		"error",
		{
			"allow": [
				"**/node_modules/**",
				"**/src/components/**",
				"**/src/constants/**",
				"**/src/libraries/**",
				"**/src/public/**",
				"**/src/styles/**",
				"**/src/utilities/**",
			],
		},
	],
	"import/no-mutable-exports": "error",
	"import/no-named-as-default": "error",
	"import/no-named-as-default-member": "error",
	"import/no-named-default": "error",
	"import/no-named-export": "off",
	"import/no-namespace": "error",
	"import/no-nodejs-modules": "off",
	"import/no-relative-parent-imports": "off",
	"import/no-restricted-paths": [
		"error",
		{
			"zones": [
				{
					"except": [
						"./node_modules",
						"./public",
						"./src/components",
						"./src/constants",
						"./src/libraries",
						"./src/styles",
						"./src/utilities",
						".env*",
					],
					"from": ".",
					"target": "./src/components",
				},
				{
					"except": [
						"./node_modules",
						"./public",
						"./src/constants",
						".env*",
					],
					"from": ".",
					"target": "./src/constants",
				},
				{
					"except": [
						"./node_modules",
						"./src/constants",
						"./src/libraries",
						"./src/utilities",
						".graphql-let.yml",
					],
					"from": ".",
					"target": "./src/libraries",
				},
				{
					"except": [
						"./node_modules",
						"./public",
						"./src/components",
						"./src/constants",
						"./src/libraries",
						"./src/pages",
						"./src/styles",
						"./src/utilities",
						".env*",
					],
					"from": ".",
					"target": "./src/pages",
				},
				{
					"except": [
						"./node_modules",
						"./public",
						"./src/constants",
						"./src/styles",
					],
					"from": ".",
					"target": "./src/styles",
				},
				{
					"except": [
						"./node_modules",
						"./public",
						"./src/components",
						"./src/constants",
						"./src/libraries",
						"./src/pages",
						"./src/styles",
						"./src/tests",
						"./src/utilities",
						".env*",
					],
					"from": ".",
					"target": "./src/tests",
				},
				{
					"except": [
						"./node_modules",
						"./public",
						"./src/constants",
						"./src/libraries",
						"./src/styles",
						"./src/utilities",
						".env*",
					],
					"from": ".",
					"target": "./src/utilities",
				},
			],
		},
	],
	"import/no-self-import": "error",
	"import/no-unassigned-import": [
		"error",
		{
			"allow": [
				"./src/styles/globals.scss",
			],
		},
	],
	"import/no-unresolved": [
		"error",
		{
			"amd": true,
			"caseSensitive": true,
			"commonjs": true,
			"ignore": [
				"\.yml$"
			]
		},
	],
	"import/no-unused-modules": [
		"error",
		{
			"ignoreExports": [
				"**/*.d.*",
				"**/*.test.*",
				"**/*config.js",
				"**/*rc.js",
				"./src/pages/**/*.tsx",
			],
			"missingExports": true,
			"src": [
				".",
			],
			"unusedExports": true,
		},
	],
	"import/no-useless-path-segments": [
		"error",
		{
			"commonjs": true,
			"noUselessIndex": true,
		},
	],
	"import/no-webpack-loader-syntax": "error",
	"import/order": [
		"error",
		{
			"alphabetize": {
				"caseInsensitive": false,
				"order": "asc",
			},
			"groups": [
				"builtin",
				"external",
				"internal",
				"parent",
				"sibling",
				"index",
				"object",
				"unknown",
			],
			"newlines-between": "always-and-inside-groups",
		},
	],
	"import/prefer-default-export": "off",
	"import/unambiguous": "error",
}

module.exports = importRule;
