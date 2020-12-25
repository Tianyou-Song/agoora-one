const eslintRule = {
	"accessor-pairs": [
		"error",
		{
			"enforceForClassMembers": true,
			"getWithoutSet": false,
			"setWithoutGet": true,
		},
	],
	"array-bracket-newline": [
		"error",
		{
			"minItems": 1,
			"multiline": true,
		},
	],
	"array-bracket-spacing": [
		"error",
		"always",
		{
			"arraysInArrays": true,
			"objectsInArrays": true,
			"singleValue": true,
		},
	],
	"array-callback-return": [
		"error",
		{
			"allowImplicit": false,
			"checkForEach": true,
		},
	],
	"array-element-newline": [
		"error",
		{
			"ArrayExpression": {
				"minItems": 1,
				"multiline": true,
			},
			"ArrayPattern": {
				"minItems": 1,
				"multiline": true,
			},
		},
	],
	"arrow-body-style": [
		"error",
		"always",
	],
	"arrow-parens": [
		"error",
		"always",
		{
			"requireForBlockBody": true,
		},
	],
	"arrow-spacing": [
		"error",
		{
			"after": true,
			"before": true,
		},
	],
	"block-scoped-var": "error",
	"block-spacing": [
		"error",
		"always",
	],
	"brace-style": "off",
	"callback-return": "off",
	"camelcase": [
		"error",
		{
			"ignoreDestructuring": false,
			"ignoreGlobals": false,
			"ignoreImports": false,
			"properties": "always",
		},
	],
	"capitalized-comments": [
		"error",
		"always",
		{
			"block": {
				"ignoreConsecutiveComments": true,
				"ignoreInlineComments": true,
			},
			"line": {
				"ignoreConsecutiveComments": true,
				"ignoreInlineComments": true,
			},
		},
	],
	"class-methods-use-this": "error",
	"comma-dangle": "off",
	"comma-spacing": "off",
	"comma-style": [
		"error",
		"last",
		{
			"exceptions": {
				"ArrayExpression": false,
				"ArrayPattern": false,
				"ArrowFunctionExpression": false,
				"CallExpression": false,
				"FunctionDeclaration": false,
				"FunctionExpression": false,
				"ImportDeclaration": false,
				"NewExpression": false,
				"ObjectExpression": false,
				"ObjectPattern": false,
				"VariableDeclaration": false,
			},
		},
	],
	"complexity": [
		"error",
		{
			"max": 32,
		},
	],
	"computed-property-spacing": [
		"error",
		"always",
		{
			"enforceForClassMembers": true,
		},
	],
	"consistent-return": [
		"error",
		{
			"treatUndefinedAsUnspecified": true,
		},
	],
	"consistent-this": [
		"error",
		"that",
	],
	"constructor-super": "error",
	"curly": [
		"error",
		"all",
	],
	"default-case": "error",
	"default-case-last": "error",
	"default-param-last": "off",
	"dot-location": [
		"error",
		"property",
	],
	"dot-notation": "off",
	"eol-last": [
		"error",
		"always",
	],
	"eqeqeq": [
		"error",
		"always",
	],
	"eslint-plugin-config-perf-standard": "off",
	"for-direction": "error",
	"func-call-spacing": "off",
	"func-name-matching": [
		"error",
		"always",
		{
			"considerPropertyDescriptor": true,
			"includeCommonJSModuleExports": true,
		},
	],
	"func-names": [
		"error",
		"as-needed",
		{
			"generators": "as-needed",
		},
	],
	"func-style": [
		"error",
		"expression",
		{
			"allowArrowFunctions": true,
		},
	],
	"function-call-argument-newline": [
		"error",
		"always",
	],
	"function-paren-newline": [
		"error",
		{
			"minItems": 1,
		},
	],
	"generator-star-spacing": [
		"error",
		{
			"after": true,
			"anonymous": {
				"after": true,
				"before": true,
			},
			"before": true,
			"method": {
				"after": true,
				"before": true,
			},
			"named": {
				"after": true,
				"before": true,
			},
		},
	],
	"getter-return": [
		"error",
		{
			"allowImplicit": false,
		},
	],
	"global-require": "off",
	"grouped-accessor-pairs": [
		"error",
		"getBeforeSet",
	],
	"guard-for-in": "error",
	"handle-callback-err": "off",
	"id-blacklist": "off",
	"id-denylist": "error",
	"id-length": [
		"error",
		{
			"max": 32,
			"min": 1,
			"properties": "always",
		},
	],
	"id-match": "error",
	"implicit-arrow-linebreak": [
		"error",
		"below",
	],
	"indent": "off",
	"indent-legacy": "off",
	"init-declarations": "off",
	"jsx-quotes": [
		"error",
		"prefer-double",
	],
	"key-spacing": [
		"error",
		{
			"afterColon": true,
			"align": "colon",
			"beforeColon": true,
			"mode": "minimum",
		},
	],
	"keyword-spacing": "off",
	"line-comment-position": [
		"error",
		{
			"applyDefaultIgnorePatterns": true,
			"position": "above",
		},
	],
	"linebreak-style": [
		"error",
		"unix",
	],
	"lines-around-comment": [
		"error",
		{
			"afterBlockComment": true,
			"afterLineComment": false,
			"allowArrayEnd": false,
			"allowArrayStart": false,
			"allowBlockEnd": false,
			"allowBlockStart": false,
			"allowClassEnd": false,
			"allowClassStart": false,
			"allowObjectEnd": false,
			"allowObjectStart": false,
			"applyDefaultIgnorePatterns": true,
			"beforeBlockComment": true,
			"beforeLineComment": true,
		},
	],
	"lines-around-directive": "off",
	"lines-between-class-members": "off",
	"max-classes-per-file": [
		"error",
		1,
	],
	"max-depth": [
		"error",
		4,
	],
	"max-len": [
		"error",
		{
			"code": 128,
			"comments": 128,
			"ignoreComments": false,
			"ignoreRegExpLiterals": false,
			"ignoreStrings": false,
			"ignoreTemplateLiterals": false,
			"ignoreTrailingComments": false,
			"ignoreUrls": false,
			"tabWidth": 4,
		},
	],
	"max-lines": [
		"error",
		{
			"max": 512,
			"skipBlankLines": true,
			"skipComments": true,
		},
	],
	"max-lines-per-function": [
		"error",
		{
			"IIFEs": true,
			"max": 256,
			"skipBlankLines": true,
			"skipComments": true,
		},
	],
	"max-nested-callbacks": [
		"error",
		4,
	],
	"max-params": [
		"error",
		4,
	],
	"max-statements": [
		"error",
		16,
	],
	"max-statements-per-line": [
		"error",
		{
			"max": 1,
		},
	],
	"multiline-comment-style": [
		"error",
		"starred-block",
	],
	"multiline-ternary": [
		"error",
		"always",
	],
	"new-cap": [
		"error",
		{
			"capIsNew": true,
			"newIsCap": true,
			"properties": true,
		},
	],
	"new-parens": [
		"error",
		"always",
	],
	"newline-after-var": "off",
	"newline-before-return": "off",
	"newline-per-chained-call": [
		"error",
		{
			"ignoreChainWithDepth": 1,
		},
	],
	"no-alert": "error",
	"no-array-constructor": "off",
	"no-async-promise-executor": "error",
	"no-await-in-loop": "error",
	"no-bitwise": "error",
	"no-buffer-constructor": "off",
	"no-caller": "error",
	"no-case-declarations": "error",
	"no-catch-shadow": "off",
	"no-class-assign": "error",
	"no-compare-neg-zero": "error",
	"no-cond-assign": [
		"error",
		"always",
	],
	"no-confusing-arrow": [
		"error",
		{
			"allowParens": false,
		},
	],
	"no-console": "error",
	"no-const-assign": "error",
	"no-constant-condition": [
		"error",
		{
			"checkLoops": true,
		},
	],
	"no-constructor-return": "error",
	"no-continue": "error",
	"no-control-regex": "error",
	"no-debugger": "error",
	"no-delete-var": "error",
	"no-div-regex": "error",
	"no-dupe-args": "error",
	"no-dupe-class-members": "off",
	"no-dupe-else-if": "error",
	"no-dupe-keys": "error",
	"no-duplicate-case": "error",
	"no-duplicate-imports": "off",
	"no-else-return": [
		"error",
		{
			"allowElseIf": true,
		},
	],
	"no-empty": [
		"error",
		{
			"allowEmptyCatch": false,
		},
	],
	"no-empty-character-class": "error",
	"no-empty-function": "off",
	"no-empty-label": "off",
	"no-empty-pattern": "error",
	"no-eq-null": "error",
	"no-eval": [
		"error",
		{
			"allowIndirect": false,
		},
	],
	"no-ex-assign": "error",
	"no-extend-native": "error",
	"no-extra-bind": "error",
	"no-extra-boolean-cast": [
		"error",
		{
			"enforceForLogicalOperands": true,
		},
	],
	"no-extra-label": "error",
	"no-extra-parens": "off",
	"no-extra-semi": "off",
	"no-fallthrough": "error",
	"no-floating-decimal": "error",
	"no-func-assign": "error",
	"no-global-assign": "error",
	"no-implicit-coercion": [
		"error",
		{
			"boolean": true,
			"number": true,
			"string": true,
		},
	],
	"no-implicit-globals": [
		"error",
		{
			"lexicalBindings": true,
		},
	],
	"no-implied-eval": "off",
	"no-import-assign": "error",
	"no-inline-comments": "error",
	"no-inner-declarations": [
		"error",
		"both",
	],
	"no-invalid-regexp": "error",
	"no-invalid-this": "off",
	"no-irregular-whitespace": [
		"error",
		{
			"skipComments": false,
			"skipRegExps": false,
			"skipStrings": false,
			"skipTemplates": false,
		},
	],
	"no-iterator": "error",
	"no-label-var": "error",
	"no-labels": [
		"error",
		{
			"allowLoop": false,
			"allowSwitch": false,
		},
	],
	"no-lone-blocks": "error",
	"no-lonely-if": "error",
	"no-loop-func": "off",
	"no-loss-of-precision": "off",
	"no-magic-numbers": "off",
	"no-misleading-character-class": "error",
	"no-mixed-operators": [
		"error",
		{
			"allowSamePrecedence": true,
		},
	],
	"no-mixed-requires": "off",
	"no-mixed-spaces-and-tabs": "error",
	"no-multi-assign": "error",
	"no-multi-spaces": [
		"error",
		{
			"exceptions": {
				"BinaryExpression": true,
				"ImportDeclaration": true,
				"Property": true,
				"VariableDeclarator": true,
			},
			"ignoreEOLComments": false,
		},
	],
	"no-multi-str": "error",
	"no-multiple-empty-lines": [
		"error",
		{
			"max": 1,
			"maxBOF": 1,
			"maxEOF": 1,
		},
	],
	"no-native-reassign": "off",
	"no-negated-condition": "error",
	"no-negated-in-lhs": "off",
	"no-nested-ternary": "off",
	"no-new": "error",
	"no-new-func": "error",
	"no-new-object": "error",
	"no-new-require": "off",
	"no-new-symbol": "error",
	"no-new-wrappers": "error",
	"no-nonoctal-decimal-escape": "error",
	"no-obj-calls": "error",
	"no-octal": "error",
	"no-octal-escape": "error",
	"no-param-reassign": [
		"error",
		{
			"props": false,
		},
	],
	"no-path-concat": "off",
	"no-plusplus": [
		"error",
		{
			"allowForLoopAfterthoughts": false,
		},
	],
	"no-process-env": "off",
	"no-process-exit": "off",
	"no-promise-executor-return": "error",
	"no-proto": "error",
	"no-prototype-builtins": "error",
	"no-redeclare": "off",
	"no-regex-spaces": "error",
	"no-restricted-exports": "error",
	"no-restricted-globals": "error",
	"no-restricted-imports": "error",
	"no-restricted-modules": "off",
	"no-restricted-properties": "error",
	"no-restricted-syntax": "error",
	"no-return-assign": [
		"error",
		"always",
	],
	"no-return-await": "off",
	"no-script-url": "error",
	"no-self-assign": [
		"error",
		{
			"props": true,
		},
	],
	"no-self-compare": "error",
	"no-sequences": "error",
	"no-setter-return": "error",
	"no-shadow": "off",
	"no-shadow-restricted-names": "error",
	"no-spaced-func": "off",
	"no-sparse-arrays": "error",
	"no-sync": "off",
	"no-tabs": [
		"error",
		{
			"allowIndentationTabs": true,
		},
	],
	"no-template-curly-in-string": "error",
	"no-ternary": "error",
	"no-this-before-super": "error",
	"no-throw-literal": "off",
	"no-trailing-spaces": [
		"error",
		{
			"ignoreComments": false,
			"skipBlankLines": false,
		},
	],
	"no-undef": [
		"error",
		{
			"typeof": true,
		},
	],
	"no-undef-init": "error",
	"no-undefined": "error",
	"no-underscore-dangle": [
		"error",
		{
			"allowAfterSuper": false,
			"allowAfterThis": false,
			"allowAfterThisConstructor": false,
			"allowFunctionParams": false,
			"enforceInMethodNames": true,
		},
	],
	"no-unexpected-multiline": "error",
	"no-unmodified-loop-condition": "error",
	"no-unneeded-ternary": [
		"error",
		{
			"defaultAssignment": false,
		},
	],
	"no-unreachable": "error",
	"no-unreachable-loop": "error",
	"no-unsafe-finally": "error",
	"no-unsafe-negation": [
		"error",
		{
			"enforceForOrderingRelations": true,
		},
	],
	"no-unsafe-optional-chaining": [
		"error",
		{
			"disallowArithmeticOperators": true,
		},
	],
	"no-unused-expressions": "off",
	"no-unused-labels": "error",
	"no-unused-vars": "off",
	"no-use-before-define": "off",
	"no-useless-backreference": "error",
	"no-useless-call": "error",
	"no-useless-catch": "error",
	"no-useless-computed-key": [
		"error",
		{
			"enforceForClassMembers": true,
		},
	],
	"no-useless-concat": "error",
	"no-useless-constructor": "off",
	"no-useless-escape": "error",
	"no-useless-rename": [
		"error",
		{
			"ignoreDestructuring": false,
			"ignoreExport": false,
			"ignoreImport": false,
		},
	],
	"no-useless-return": "error",
	"no-var": "error",
	"no-void": [
		"error",
		{
			"allowAsStatement": false,
		},
	],
	"no-warning-comments": [
		"warn",
		{
			"location": "anywhere",
			"terms": [
				"todo",
				"fixme",
				"xxx",
			],
		},
	],
	"no-whitespace-before-property": "error",
	"no-with": "error",
	"nonblock-statement-body-position": [
		"error",
		"below",
	],
	"object-curly-newline": [
		"error",
		{
			"ExportDeclaration": {
				"consistent": true,
				"minProperties": 1,
				"multiline": true,
			},
			"ImportDeclaration": {
				"consistent": true,
				"minProperties": 1,
				"multiline": true,
			},
			"ObjectExpression": {
				"consistent": true,
				"minProperties": 1,
				"multiline": true,
			},
			"ObjectPattern": {
				"consistent": true,
				"minProperties": 1,
				"multiline": true,
			},
		},
	],
	"object-curly-spacing": [
		"error",
		"always",
		{
			"arraysInObjects": true,
			"objectsInObjects": true,
		},
	],
	"object-property-newline": [
		"error",
		{
			"allowAllPropertiesOnSameLine": false,
		},
	],
	"object-shorthand": [
		"error",
		"always",
		{
			"avoidExplicitReturnArrows": false,
			"avoidQuotes": true,
			"ignoreConstructors": false,
		},
	],
	"one-var": [
		"error",
		{
			"initialized": "never",
			"uninitialized": "consecutive",
		},
	],
	"one-var-declaration-per-line": [
		"error",
		"always",
	],
	"operator-assignment": [
		"error",
		"always",
	],
	"operator-linebreak": [
		"error",
		"before",
	],
	"padded-blocks": [
		"error",
		{
			"blocks": "always",
			"classes": "always",
			"switches": "always",
		},
		{
			"allowSingleLineBlocks": false,
		},
	],
	"padding-line-between-statements": [
		"error",
		{
			"blankLine": "always",
			"next": "*",
			"prev": "*",
		},
	],
	"prefer-arrow-callback": [
		"error",
		{
			"allowNamedFunctions": false,
			"allowUnboundThis": false,
		},
	],
	"prefer-const": [
		"error",
		{
			"destructuring": "any",
			"ignoreReadBeforeAssign": false,
		},
	],
	"prefer-destructuring": [
		"error",
		{
			"AssignmentExpression": {
				"array": true,
				"object": true,
			},
			"VariableDeclarator": {
				"array": true,
				"object": true,
			},
		},
		{
			"enforceForRenamedProperties": true,
		},
	],
	"prefer-exponentiation-operator": "error",
	"prefer-named-capture-group": "error",
	"prefer-numeric-literals": "error",
	"prefer-object-spread": "error",
	"prefer-promise-reject-errors": [
		"error",
		{
			"allowEmptyReject": false,
		},
	],
	"prefer-reflect": "off",
	"prefer-regex-literals": [
		"error",
		{
			"disallowRedundantWrapping": true,
		},
	],
	"prefer-rest-params": "error",
	"prefer-spread": "error",
	"prefer-template": "error",
	"quote-props": [
		"error",
		"always",
		{
			"keywords": true,
			"numbers": true,
			"unnecessary": false,
		},
	],
	"quotes": "off",
	"radix": [
		"error",
		"always",
	],
	"require-atomic-updates": "error",
	"require-await": "off",
	"require-jsdoc": "off",
	"require-unicode-regexp": "error",
	"require-yield": "error",
	"rest-spread-spacing": [
		"error",
		"never",
	],
	"semi": "off",
	"semi-spacing": [
		"error",
		{
			"after": true,
			"before": true,
		},
	],
	"semi-style": [
		"error",
		"last",
	],
	"sort-imports": [
		"error",
		{
			"allowSeparatedGroups": true,
			"ignoreCase": false,
			"ignoreDeclarationSort": false,
			"ignoreMemberSort": false,
			"memberSyntaxSortOrder": [
				"none",
				"all",
				"multiple",
				"single",
			],
		},
	],
	"sort-keys": [
		"error",
		"asc",
		{
			"caseSensitive": true,
			"minKeys": 2,
			"natural": true,
		},
	],
	"sort-vars": [
		"error",
		{
			"ignoreCase": false,
		},
	],
	"space-after-keywords": "off",
	"space-before-blocks": [
		"error",
		{
			"classes": "always",
			"functions": "always",
			"keywords": "always",
		},
	],
	"space-before-function-paren": "off",
	"space-before-keywords": "off",
	"space-in-parens": [
		"error",
		"always",
	],
	"space-infix-ops": "off",
	"space-return-throw-case": "off",
	"space-unary-ops": [
		"error",
		{
			"nonwords": true,
			"words": true,
		},
	],
	"spaced-comment": [
		"error",
		"always",
		{
			"block": {
				"balanced": true,
			},
			"markers": [
				"/",
			],
		},
	],
	"strict": [
		"error",
		"safe",
	],
	"switch-colon-spacing": [
		"error",
		{
			"after": true,
			"before": true,
		},
	],
	"symbol-description": "error",
	"template-curly-spacing": [
		"error",
		"always",
	],
	"template-tag-spacing": [
		"error",
		"always",
	],
	"unicode-bom": [
		"error",
		"never",
	],
	"use-isnan": [
		"error",
		{
			"enforceForIndexOf": true,
			"enforceForSwitchCase": true,
		},
	],
	"valid-jsdoc": "off",
	"valid-typeof": [
		"error",
		{
			"requireStringLiterals": true,
		},
	],
	"vars-on-top": "error",
	"wrap-iife": [
		"error",
		"inside",
		{
			"functionPrototypeMethods": true,
		},
	],
	"wrap-regex": "error",
	"yield-star-spacing": [
		"error",
		{
			"after": true,
			"before": true,
		},
	],
	"yoda": [
		"error",
		"never",
		{
			"exceptRange": true,
			"onlyEquality": false,
		},
	],
}

module.exports = eslintRule;
