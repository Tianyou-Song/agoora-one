const typescriptEslintRule = {
	"@typescript-eslint/adjacent-overload-signatures": [
		"error",
	],
	"@typescript-eslint/array-type": [
		"error",
		{
			"default": "array",
			"readonly": "array",
		},
	],
	"@typescript-eslint/await-thenable": [
		"error",
	],
	"@typescript-eslint/ban-ts-comment": [
		"error",
		{
			"minimumDescriptionLength": 0,
			"ts-check": true,
			"ts-expect-error": true,
			"ts-ignore": true,
			"ts-nocheck": true,
		},
	],
	"@typescript-eslint/ban-tslint-comment": [
		"error",
	],
	"@typescript-eslint/ban-types": [
		"error",
		{
			"extendDefaults": true,
		},
	],
	"@typescript-eslint/brace-style": [
		"error",
		"1tbs",
		{
			"allowSingleLine": false,
		},
	],
	"@typescript-eslint/class-literal-property-style": [
		"error",
		"fields",
	],
	"@typescript-eslint/comma-dangle": [
		"error",
		{
			"arrays": "always",
			"enums": "always",
			"exports": "always",
			"functions": "always",
			"generics": "always",
			"imports": "always",
			"objects": "always",
			"tuples": "always",
		},
	],
	"@typescript-eslint/comma-spacing": [
		"error",
		{
			"after": true,
			"before": true,
		},
	],
	"@typescript-eslint/consistent-indexed-object-style": [
		"error",
		"record",
	],
	"@typescript-eslint/consistent-type-assertions": [
		"error",
		{
			"assertionStyle": "as",
			"objectLiteralTypeAssertions": "never",
		},
	],
	"@typescript-eslint/consistent-type-definitions": [
		"error",
		"interface",
	],
	"@typescript-eslint/consistent-type-imports": [
		"error",
		{
			"disallowTypeAnnotations": true,
			"prefer": "type-imports",
		},
	],
	"@typescript-eslint/default-param-last": [
		"error",
	],
	"@typescript-eslint/dot-notation": [
		"error",
		{
			"allowKeywords": true,
			"allowPrivateClassPropertyAccess": false,
			"allowProtectedClassPropertyAccess": false,
		},
	],
	"@typescript-eslint/explicit-function-return-type": [
		"error",
		{
			"allowConciseArrowFunctionExpressionsStartingWithVoid": false,
			"allowDirectConstAssertionInArrowFunctions": false,
			"allowExpressions": false,
			"allowHigherOrderFunctions": false,
			"allowTypedFunctionExpressions": true,
		},
	],
	"@typescript-eslint/explicit-member-accessibility": [
		"error",
		{
			"accessibility": "explicit",
		},
	],
	"@typescript-eslint/explicit-module-boundary-types": [
		"error",
		{
			"allowArgumentsExplicitlyTypedAsAny": false,
			"allowDirectConstAssertionInArrowFunctions": false,
			"allowHigherOrderFunctions": false,
			"allowTypedFunctionExpressions": true,
		},
	],
	"@typescript-eslint/func-call-spacing": [
		"error",
		"never",
	],
	"@typescript-eslint/indent": [
		"error",
		"tab",
		{
			"ArrayExpression": 1,
			"CallExpression": {
				"arguments": 1,
			},
			"FunctionDeclaration": {
				"body": 1,
				"parameters": 1,
			},
			"FunctionExpression": {
				"body": 1,
				"parameters": 1,
			},
			"ImportDeclaration": 1,
			"MemberExpression": 1,
			"ObjectExpression": 1,
			"SwitchCase": 1,
			"VariableDeclarator": 1,
			"flatTernaryExpressions": false,
			"ignoreComments": false,
			"offsetTernaryExpressions": true,
			"outerIIFEBody": 1,
		},
	],
	"@typescript-eslint/init-declarations": [
		"off",
	],
	"@typescript-eslint/keyword-spacing": [
		"error",
		{
			"after": true,
			"before": true,
		},
	],
	"@typescript-eslint/lines-between-class-members": [
		"error",
		"always",
		{
			"exceptAfterOverload": false,
			"exceptAfterSingleLine": false,
		},
	],
	"@typescript-eslint/member-delimiter-style": [
		"error",
		{
			"multiline": {
				"delimiter": "semi",
				"requireLast": true,
			},
			"singleline": {
				"delimiter": "semi",
				"requireLast": true,
			},
		},
	],
	"@typescript-eslint/member-ordering": [
		"error",
		{
			"classExpressions": {
				"memberTypes": [
					"signature",
					"public-static-field",
					"protected-static-field",
					"private-static-field",
					"public-decorated-field",
					"protected-decorated-field",
					"private-decorated-field",
					"public-instance-field",
					"protected-instance-field",
					"private-instance-field",
					"public-abstract-field",
					"protected-abstract-field",
					"private-abstract-field",
					"public-field",
					"protected-field",
					"private-field",
					"static-field",
					"instance-field",
					"abstract-field",
					"decorated-field",
					"field",
					"public-constructor",
					"protected-constructor",
					"private-constructor",
					"constructor",
					"public-static-method",
					"protected-static-method",
					"private-static-method",
					"public-decorated-method",
					"protected-decorated-method",
					"private-decorated-method",
					"public-instance-method",
					"protected-instance-method",
					"private-instance-method",
					"public-abstract-method",
					"protected-abstract-method",
					"private-abstract-method",
					"public-method",
					"protected-method",
					"private-method",
					"static-method",
					"instance-method",
					"abstract-method",
					"decorated-method",
					"method",
				],
				"order": "alphabetically",
			},
			"classes": {
				"memberTypes": [
					"signature",
					"public-static-field",
					"protected-static-field",
					"private-static-field",
					"public-decorated-field",
					"protected-decorated-field",
					"private-decorated-field",
					"public-instance-field",
					"protected-instance-field",
					"private-instance-field",
					"public-abstract-field",
					"protected-abstract-field",
					"private-abstract-field",
					"public-field",
					"protected-field",
					"private-field",
					"static-field",
					"instance-field",
					"abstract-field",
					"decorated-field",
					"field",
					"public-constructor",
					"protected-constructor",
					"private-constructor",
					"constructor",
					"public-static-method",
					"protected-static-method",
					"private-static-method",
					"public-decorated-method",
					"protected-decorated-method",
					"private-decorated-method",
					"public-instance-method",
					"protected-instance-method",
					"private-instance-method",
					"public-abstract-method",
					"protected-abstract-method",
					"private-abstract-method",
					"public-method",
					"protected-method",
					"private-method",
					"static-method",
					"instance-method",
					"abstract-method",
					"decorated-method",
					"method",
				],
				"order": "alphabetically",
			},
			"default": {
				"memberTypes": [
					"signature",
					"public-static-field",
					"protected-static-field",
					"private-static-field",
					"public-decorated-field",
					"protected-decorated-field",
					"private-decorated-field",
					"public-instance-field",
					"protected-instance-field",
					"private-instance-field",
					"public-abstract-field",
					"protected-abstract-field",
					"private-abstract-field",
					"public-field",
					"protected-field",
					"private-field",
					"static-field",
					"instance-field",
					"abstract-field",
					"decorated-field",
					"field",
					"public-constructor",
					"protected-constructor",
					"private-constructor",
					"constructor",
					"public-static-method",
					"protected-static-method",
					"private-static-method",
					"public-decorated-method",
					"protected-decorated-method",
					"private-decorated-method",
					"public-instance-method",
					"protected-instance-method",
					"private-instance-method",
					"public-abstract-method",
					"protected-abstract-method",
					"private-abstract-method",
					"public-method",
					"protected-method",
					"private-method",
					"static-method",
					"instance-method",
					"abstract-method",
					"decorated-method",
					"method",
				],
				"order": "alphabetically",
			},
			"interfaces": {
				"memberTypes": [
					"signature",
					"field",
					"constructor",
					"method",
				],
				"order": "alphabetically",
			},
			"typeLiterals": {
				"memberTypes": [
					"signature",
					"field",
					"constructor",
					"method",
				],
				"order": "alphabetically",
			},
		},
	],
	"@typescript-eslint/method-signature-style": [
		"error",
		"property",
	],
	"@typescript-eslint/naming-convention": [
		"error",
		{
			"format": [
				"camelCase",
			],
			"leadingUnderscore": "allow",
			"selector": "default",
			"trailingUnderscore": "allow",
		},
		{
			"format": [
				"PascalCase",
				"camelCase",
				"UPPER_CASE",
			],
			"leadingUnderscore": "allow",
			"selector": [
				"memberLike",
				"variableLike",
			],
			"trailingUnderscore": "allow",
		},
		{
			"format": [
				"PascalCase",
			],
			"selector": "typeLike",
		},
	],
	"@typescript-eslint/no-array-constructor": [
		"error",
	],
	"@typescript-eslint/no-base-to-string": [
		"error",
	],
	"@typescript-eslint/no-confusing-non-null-assertion": [
		"error",
	],
	"@typescript-eslint/no-confusing-void-expression": [
		"error",
		{
			"ignoreArrowShorthand": false,
			"ignoreVoidOperator": false,
		},
	],
	"@typescript-eslint/no-dupe-class-members": [
		"error",
	],
	"@typescript-eslint/no-duplicate-imports": [
		"error",
		{
			"includeExports": true,
		},
	],
	"@typescript-eslint/no-dynamic-delete": [
		"error",
	],
	"@typescript-eslint/no-empty-function": [
		"error",
	],
	"@typescript-eslint/no-empty-interface": [
		"error",
		{
			"allowSingleExtends": false,
		},
	],
	"@typescript-eslint/no-explicit-any": [
		"error",
		{
			"fixToUnknown": true,
			"ignoreRestArgs": false,
		},
	],
	"@typescript-eslint/no-extra-non-null-assertion": [
		"error",
	],
	"@typescript-eslint/no-extra-parens": [
		"error",
		"all",
		{
			"conditionalAssign": false,
			"enforceForArrowConditionals": true,
			"enforceForFunctionPrototypeMethods": true,
			"enforceForNewInMemberExpressions": true,
			"enforceForSequenceExpressions": true,
			"ignoreJSX": "none",
			"nestedBinaryExpressions": false,
			"returnAssign": false,
		},
	],
	"@typescript-eslint/no-extra-semi": [
		"error",
	],
	"@typescript-eslint/no-extraneous-class": [
		"error",
		{
			"allowConstructorOnly": false,
			"allowEmpty": false,
			"allowStaticOnly": false,
			"allowWithDecorator": false,
		},
	],
	"@typescript-eslint/no-floating-promises": [
		"error",
		{
			"ignoreIIFE": false,
			"ignoreVoid": false,
		},
	],
	"@typescript-eslint/no-for-in-array": [
		"error",
	],
	"@typescript-eslint/no-implicit-any-catch": [
		"error",
		{
			"allowExplicitAny": false,
		},
	],
	"@typescript-eslint/no-implied-eval": [
		"error",
	],
	"@typescript-eslint/no-inferrable-types": [
		"error",
		{
			"ignoreParameters": false,
			"ignoreProperties": false,
		},
	],
	"@typescript-eslint/no-invalid-this": [
		"error",
		{
			"capIsConstructor": true,
		},
	],
	"@typescript-eslint/no-invalid-void-type": [
		"error",
		{
			"allowAsThisParameter": true,
			"allowInGenericTypeArguments": true,
		},
	],
	"@typescript-eslint/no-loop-func": [
		"error",
	],
	"@typescript-eslint/no-loss-of-precision": [
		"error",
	],
	"@typescript-eslint/no-magic-numbers": [
		"error",
		{
			"detectObjects": true,
			"enforceConst": true,
			"ignoreArrayIndexes": false,
			"ignoreDefaultValues": false,
			"ignoreEnums": false,
			"ignoreNumericLiteralTypes": false,
			"ignoreReadonlyClassProperties": false,
		},
	],
	"@typescript-eslint/no-misused-new": [
		"error",
	],
	"@typescript-eslint/no-misused-promises": [
		"error",
		{
			"checksConditionals": true,
			"checksVoidReturn": true,
		},
	],
	"@typescript-eslint/no-namespace": [
		"error",
		{
			"allowDeclarations": false,
			"allowDefinitionFiles": false,
		},
	],
	"@typescript-eslint/no-non-null-asserted-optional-chain": [
		"error",
	],
	"@typescript-eslint/no-non-null-assertion": [
		"error",
	],
	"@typescript-eslint/no-parameter-properties": [
		"error",
		{
			"allows": [
				"private",
				"private readonly",
				"protected",
				"protected readonly",
				"public",
				"public readonly",
				"readonly",
			],
		},
	],
	"@typescript-eslint/no-redeclare": [
		"error",
		{
			"builtinGlobals": true,
			"ignoreDeclarationMerge": false,
		},
	],
	"@typescript-eslint/no-require-imports": [
		"error",
	],
	"@typescript-eslint/no-shadow": [
		"error",
		{
			"builtinGlobals": true,
			"hoist": "all",
			"ignoreFunctionTypeParameterNameValueShadow": false,
			"ignoreTypeValueShadow": false,
		},
	],
	"@typescript-eslint/no-this-alias": [
		"error",
		{
			"allowDestructuring": true,
		},
	],
	"@typescript-eslint/no-throw-literal": [
		"error",
	],
	"@typescript-eslint/no-type-alias": [
		"error",
		{
			"allowAliases": "never",
			"allowCallbacks": "never",
			"allowConditionalTypes": "never",
			"allowConstructors": "never",
			"allowLiterals": "never",
			"allowMappedTypes": "never",
			"allowTupleTypes": "never",
		},
	],
	"@typescript-eslint/no-unnecessary-boolean-literal-compare": [
		"error",
		{
			"allowComparingNullableBooleansToFalse": false,
			"allowComparingNullableBooleansToTrue": false,
		},
	],
	"@typescript-eslint/no-unnecessary-condition": [
		"error",
		{
			"allowConstantLoopConditions": false,
			"allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing": false,
		},
	],
	"@typescript-eslint/no-unnecessary-qualifier": [
		"error",
	],
	"@typescript-eslint/no-unnecessary-type-arguments": [
		"error",
	],
	"@typescript-eslint/no-unnecessary-type-assertion": [
		"error",
	],
	"@typescript-eslint/no-unnecessary-type-constraint": [
		"error",
	],
	"@typescript-eslint/no-unsafe-assignment": [
		"error",
	],
	"@typescript-eslint/no-unsafe-call": [
		"error",
	],
	"@typescript-eslint/no-unsafe-member-access": [
		"error",
	],
	"@typescript-eslint/no-unsafe-return": [
		"error",
	],
	"@typescript-eslint/no-unused-expressions": [
		"error",
		{
			"allowShortCircuit": false,
			"allowTaggedTemplates": false,
			"allowTernary": false,
		},
	],
	"@typescript-eslint/no-unused-vars": [
		"error",
		{
			"args": "after-used",
			"caughtErrors": "all",
			"ignoreRestSiblings": false,
			"vars": "all",
		},
	],
	"@typescript-eslint/no-use-before-define": [
		"error",
		{
			"classes": true,
			"enums": true,
			"functions": true,
			"ignoreTypeReferences": false,
			"typedefs": true,
			"variables": true,
		},
	],
	"@typescript-eslint/no-useless-constructor": [
		"error",
	],
	"@typescript-eslint/no-var-requires": [
		"error",
	],
	"@typescript-eslint/non-nullable-type-assertion-style": [
		"off",
	],
	"@typescript-eslint/prefer-as-const": [
		"error",
	],
	"@typescript-eslint/prefer-enum-initializers": [
		"error",
	],
	"@typescript-eslint/prefer-for-of": [
		"error",
	],
	"@typescript-eslint/prefer-function-type": [
		"error",
	],
	"@typescript-eslint/prefer-includes": [
		"error",
	],
	"@typescript-eslint/prefer-literal-enum-member": [
		"error",
	],
	"@typescript-eslint/prefer-namespace-keyword": [
		"error",
	],
	"@typescript-eslint/prefer-nullish-coalescing": [
		"error",
		{
			"ignoreConditionalTests": false,
			"ignoreMixedLogicalExpressions": false,
		},
	],
	"@typescript-eslint/prefer-optional-chain": [
		"error",
	],
	"@typescript-eslint/prefer-readonly": [
		"error",
		{
			"onlyInlineLambdas": false,
		},
	],
	"@typescript-eslint/prefer-readonly-parameter-types": [
		"off",
	],
	"@typescript-eslint/prefer-reduce-type-parameter": [
		"error",
	],
	"@typescript-eslint/prefer-regexp-exec": [
		"error",
	],
	"@typescript-eslint/prefer-string-starts-ends-with": [
		"error",
	],
	"@typescript-eslint/prefer-ts-expect-error": [
		"error",
	],
	"@typescript-eslint/promise-function-async": [
		"error",
		{
			"allowAny": true,
			"allowedPromiseNames": [
				"Thenable",
			],
			"checkArrowFunctions": true,
			"checkFunctionDeclarations": true,
			"checkFunctionExpressions": true,
			"checkMethodDeclarations": true,
		},
	],
	"@typescript-eslint/quotes": [
		"error",
		"double",
		{
			"allowTemplateLiterals": false,
			"avoidEscape": false,
		},
	],
	"@typescript-eslint/require-array-sort-compare": [
		"error",
		{
			"ignoreStringArrays": false,
		},
	],
	"@typescript-eslint/require-await": [
		"error",
	],
	"@typescript-eslint/restrict-plus-operands": [
		"error",
		{
			"checkCompoundAssignments": true,
		},
	],
	"@typescript-eslint/restrict-template-expressions": [
		"error",
		{
			"allowAny": false,
			"allowBoolean": false,
			"allowNullish": false,
			"allowNumber": false,
		},
	],
	"@typescript-eslint/return-await": [
		"error",
		"in-try-catch",
	],
	"@typescript-eslint/semi": [
		"error",
		"always",
		{
			"omitLastInOneLineBlock": false,
		},
	],
	"@typescript-eslint/space-before-function-paren": [
		"error",
		{
			"anonymous": "always",
			"asyncArrow": "always",
			"named": "always",
		},
	],
	"@typescript-eslint/space-infix-ops": [
		"error",
		{
			"int32Hint": false,
		},
	],
	"@typescript-eslint/strict-boolean-expressions": [
		"error",
		{
			"allowAny": false,
			"allowNullableBoolean": false,
			"allowNullableNumber": false,
			"allowNullableObject": true,
			"allowNullableString": false,
			"allowNumber": true,
			"allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing": false,
			"allowString": true,
		},
	],
	"@typescript-eslint/switch-exhaustiveness-check": [
		"error",
	],
	"@typescript-eslint/triple-slash-reference": [
		"error",
	],
	"@typescript-eslint/type-annotation-spacing": [
		"error",
		{
			"after": true,
			"before": true,
		},
	],
	"@typescript-eslint/typedef": [
		"error",
		{
			"arrayDestructuring": false,
			"arrowParameter": false,
			"memberVariableDeclaration": false,
			"objectDestructuring": false,
			"parameter": false,
			"propertyDeclaration": false,
			"variableDeclaration": false,
			"variableDeclarationIgnoreFunction": false,
		},
	],
	"@typescript-eslint/unbound-method": [
		"error",
		{
			"ignoreStatic": false,
		},
	],
	"@typescript-eslint/unified-signatures": [
		"error",
	],
}

module.exports = typescriptEslintRule;
