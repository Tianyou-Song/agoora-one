/* eslint-disable max-lines */
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable @typescript-eslint/no-magic-numbers */
module.exports = {
	"env" : {
		"browser" : true ,
		"es2021"  : true ,
		"node"    : true ,
	} ,
	"extends" : [
		"eslint:all" ,
		"plugin:@typescript-eslint/all" ,
		"plugin:jsx-a11y/recommended" ,
		"plugin:react-hooks/recommended" ,
		"plugin:react/all" ,
		"plugin:putout/recommended" ,
		"plugin:sonarjs/recommended" ,
		"plugin:unicorn/recommended" ,
	] ,
	"globals" : {
		"Capitalize"            : "readonly" ,
		"ConstructorParameters" : "readonly" ,
		"Exclude"               : "readonly" ,
		"Extract"               : "readonly" ,
		"InstanceType"          : "readonly" ,
		"JSX"                   : "readonly" ,
		"Lowercase"             : "readonly" ,
		"NonNullable"           : "readonly" ,
		"Omit"                  : "readonly" ,
		"Parameters"            : "readonly" ,
		"Partial"               : "readonly" ,
		"Pick"                  : "readonly" ,
		"Readonly"              : "readonly" ,
		"Record"                : "readonly" ,
		"Required"              : "readonly" ,
		"ReturnType"            : "readonly" ,
		"Uncapitalize"          : "readonly" ,
		"Uppercase"             : "readonly" ,
	} ,
	"overrides" : [
		{
			"files" : [
				"*.graphql" ,
			] ,
			"parser"        : "@graphql-eslint/eslint-plugin" ,
			"parserOptions" : {
				"schema" : "./schema.graphql" ,
			} ,
			"plugins" : [
				"@graphql-eslint" ,
				"graphql" ,
			] ,
			"rules" : {
				"@graphql-eslint/avoid-operation-name-prefix" : [
					"error" ,
					{
						"caseSensitive" : false ,
						"keywords"      : [
							"get" ,
						] ,
					} ,
				] ,
				"@graphql-eslint/description-style" : [
					"error" ,
					{
						"style" : "inline" ,
					} ,
				] ,
				"@graphql-eslint/input-name" : [
					"error" ,
					{
						"checkInputType" : true ,
					} ,
				] ,
				"@graphql-eslint/naming-convention" : [
					"error" ,
					{
						"EnumTypeDefinition"        : "PascalCase" ,
						"EnumValueDefinition"       : "camelCase" ,
						"FieldDefinition"           : "camelCase" ,
						"FragmentDefinition"        : "camelCase" ,
						"InputObjectTypeDefinition" : "PascalCase" ,
						"InterfaceTypeDefinition"   : "PascalCase" ,
						"ObjectTypeDefinition"      : "PascalCase" ,
						"OperationDefinition"       : "camelCase" ,
						"ScalarTypeDefinition"      : "PascalCase" ,
						"UnionTypeDefinition"       : "PascalCase" ,
						"leadingUnderscore"         : "forbid" ,
						"trailingUnderscore"        : "forbid" ,
					} ,
				] ,
				"@graphql-eslint/no-anonymous-operations" : [
					"error" ,
				] ,
				"@graphql-eslint/no-case-insensitive-enum-values-duplicates" : [
					"error" ,
				] ,
				"@graphql-eslint/no-operation-name-suffix" : [
					"error" ,
				] ,
				"@graphql-eslint/prettier" : [
					"off" ,
				] ,
				"@graphql-eslint/require-deprecation-reason" : [
					"error" ,
				] ,
				"@graphql-eslint/require-description" : [
					"error" ,
					{
						"on" : [
							"ObjectTypeDefinition" ,
							"FieldDefinition" ,
						] ,
					} ,
				] ,
				"@graphql-eslint/require-id-when-available" : [
					"error" ,
				] ,
				"@graphql-eslint/validate-against-schema" : [
					"error" ,
				] ,
				"graphql/template-strings" : [
					"error" ,
					{

						/*
						 * Import default settings for your GraphQL client. Supported values:
						 * 'apollo', 'relay', 'lokka', 'fraql', 'literal'
						 */

						"env" : "apollo" ,

						/*
						 * Import your schema JSON here
						 * "schemaJson": require('./schema.json'),
						 * OR provide absolute path to your schema JSON (but not if using `eslint --cache`!)
						 * schemaJsonFilepath: path.resolve(__dirname, './schema.json'),
						 * OR provide the schema in the Schema Language format
						 * schemaString: printSchema(schema),
						 * tagName is gql by default
						 */

					} ,
				] ,
			} ,
		} ,
	] ,
	"parser"        : "@typescript-eslint/parser" ,
	"parserOptions" : {
		"ecmaFeatures" : {
			"impliedStrict" : true ,
			"jsx"           : true ,
		} ,
		"ecmaVersion"                        : 12 ,
		"extraFileExtensions"                : [] ,
		"jsxFragmentName"                    : "" ,
		"jsxPragma"                          : "" ,
		"lib"                                : [] ,
		"project"                            : "./tsconfig.json" ,
		"projectFolderIgnoreList"            : [] ,
		"sourceType"                         : "module" ,
		"tsconfigRootDir"                    : "" ,
		"warnOnUnsupportedTypeScriptVersion" : true ,
	} ,
	"plugins" : [
		"@typescript-eslint" ,
		"graphql" ,
		"jsx-a11y" ,
		"react" ,
		"react-hooks" ,
		"putout" ,
		"sonarjs" ,
		"unicorn" ,
		"woke" ,
	] ,
	"rules" : {
		"@typescript-eslint/adjacent-overload-signatures" : [
			"error" ,
		] ,
		"@typescript-eslint/array-type" : [
			"error" ,
			{
				"default"  : "array" ,
				"readonly" : "array" ,
			} ,
		] ,
		"@typescript-eslint/await-thenable" : [
			"error" ,
		] ,
		"@typescript-eslint/ban-ts-comment" : [
			"error" ,
			{
				"minimumDescriptionLength" : 0 ,
				"ts-check"                 : true ,
				"ts-expect-error"          : true ,
				"ts-ignore"                : true ,
				"ts-nocheck"               : true ,
			} ,
		] ,
		"@typescript-eslint/ban-tslint-comment" : [
			"error" ,
		] ,
		"@typescript-eslint/ban-types" : [
			"error" ,
			{
				"extendDefaults" : true ,
			} ,
		] ,
		"@typescript-eslint/brace-style" : [
			"error" ,
			"1tbs" ,
			{
				"allowSingleLine" : false ,
			} ,
		] ,
		"@typescript-eslint/class-literal-property-style" : [
			"error" ,
			"fields" ,
		] ,
		"@typescript-eslint/comma-dangle" : [
			"error" ,
			{
				"arrays"    : "always" ,
				"enums"     : "always" ,
				"exports"   : "always" ,
				"functions" : "always" ,
				"generics"  : "always" ,
				"imports"   : "always" ,
				"objects"   : "always" ,
				"tuples"    : "always" ,
			} ,
		] ,
		"@typescript-eslint/comma-spacing" : [
			"error" ,
			{
				"after"  : true ,
				"before" : true ,
			} ,
		] ,
		"@typescript-eslint/consistent-indexed-object-style" : [
			"error" ,
			"record" ,
		] ,
		"@typescript-eslint/consistent-type-assertions" : [
			"error" ,
			{
				"assertionStyle"              : "as" ,
				"objectLiteralTypeAssertions" : "never" ,
			} ,
		] ,
		"@typescript-eslint/consistent-type-definitions" : [
			"error" ,
			"interface" ,
		] ,
		"@typescript-eslint/consistent-type-imports" : [
			"error" ,
			{
				"disallowTypeAnnotations" : true ,
				"prefer"                  : "no-type-imports" ,
			} ,
		] ,
		"@typescript-eslint/default-param-last" : [
			"error" ,
		] ,
		"@typescript-eslint/dot-notation" : [
			"error" ,
			{
				"allowKeywords"                     : true ,
				"allowPrivateClassPropertyAccess"   : false ,
				"allowProtectedClassPropertyAccess" : false ,
			} ,
		] ,
		"@typescript-eslint/explicit-function-return-type" : [
			"error" ,
			{
				"allowConciseArrowFunctionExpressionsStartingWithVoid" : false ,
				"allowDirectConstAssertionInArrowFunctions"            : false ,
				"allowExpressions"                                     : false ,
				"allowHigherOrderFunctions"                            : false ,
				"allowTypedFunctionExpressions"                        : true ,
			} ,
		] ,
		"@typescript-eslint/explicit-member-accessibility" : [
			"error" ,
			{
				"accessibility" : "explicit" ,
			} ,
		] ,
		"@typescript-eslint/explicit-module-boundary-types" : [
			"error" ,
			{
				"allowArgumentsExplicitlyTypedAsAny"        : false ,
				"allowDirectConstAssertionInArrowFunctions" : false ,
				"allowHigherOrderFunctions"                 : false ,
				"allowTypedFunctionExpressions"             : true ,
			} ,
		] ,
		"@typescript-eslint/func-call-spacing" : [
			"error" ,
			"never" ,
		] ,
		"@typescript-eslint/indent" : [
			"error" ,
			"tab" ,
			{
				"ArrayExpression" : 1 ,
				"CallExpression"  : {
					"arguments" : 1 ,
				} ,
				"FunctionDeclaration" : {
					"body"       : 1 ,
					"parameters" : 1 ,
				} ,
				"FunctionExpression" : {
					"body"       : 1 ,
					"parameters" : 1 ,
				} ,
				"ImportDeclaration"        : 1 ,
				"MemberExpression"         : 1 ,
				"ObjectExpression"         : 1 ,
				"SwitchCase"               : 1 ,
				"VariableDeclarator"       : 1 ,
				"flatTernaryExpressions"   : false ,
				"ignoreComments"           : false ,
				"offsetTernaryExpressions" : true ,
				"outerIIFEBody"            : 1 ,
			} ,
		] ,
		"@typescript-eslint/init-declarations" : [
			"off" ,
		] ,
		"@typescript-eslint/keyword-spacing" : [
			"error" ,
			{
				"after"  : true ,
				"before" : true ,
			} ,
		] ,
		"@typescript-eslint/lines-between-class-members" : [
			"error" ,
			"always" ,
			{
				"exceptAfterOverload"   : false ,
				"exceptAfterSingleLine" : false ,
			} ,
		] ,
		"@typescript-eslint/member-delimiter-style" : [
			"error" ,
			{
				"multiline" : {
					"delimiter"   : "semi" ,
					"requireLast" : true ,
				} ,
				"singleline" : {
					"delimiter"   : "semi" ,
					"requireLast" : true ,
				} ,
			} ,
		] ,
		"@typescript-eslint/member-ordering" : [
			"error" ,
			{
				"classExpressions" : {
					"memberTypes" : [
						"signature" ,
						"public-static-field" ,
						"protected-static-field" ,
						"private-static-field" ,
						"public-decorated-field" ,
						"protected-decorated-field" ,
						"private-decorated-field" ,
						"public-instance-field" ,
						"protected-instance-field" ,
						"private-instance-field" ,
						"public-abstract-field" ,
						"protected-abstract-field" ,
						"private-abstract-field" ,
						"public-field" ,
						"protected-field" ,
						"private-field" ,
						"static-field" ,
						"instance-field" ,
						"abstract-field" ,
						"decorated-field" ,
						"field" ,
						"public-constructor" ,
						"protected-constructor" ,
						"private-constructor" ,
						"constructor" ,
						"public-static-method" ,
						"protected-static-method" ,
						"private-static-method" ,
						"public-decorated-method" ,
						"protected-decorated-method" ,
						"private-decorated-method" ,
						"public-instance-method" ,
						"protected-instance-method" ,
						"private-instance-method" ,
						"public-abstract-method" ,
						"protected-abstract-method" ,
						"private-abstract-method" ,
						"public-method" ,
						"protected-method" ,
						"private-method" ,
						"static-method" ,
						"instance-method" ,
						"abstract-method" ,
						"decorated-method" ,
						"method" ,
					] ,
					"order" : "alphabetically" ,
				} ,
				"classes" : {
					"memberTypes" : [
						"signature" ,
						"public-static-field" ,
						"protected-static-field" ,
						"private-static-field" ,
						"public-decorated-field" ,
						"protected-decorated-field" ,
						"private-decorated-field" ,
						"public-instance-field" ,
						"protected-instance-field" ,
						"private-instance-field" ,
						"public-abstract-field" ,
						"protected-abstract-field" ,
						"private-abstract-field" ,
						"public-field" ,
						"protected-field" ,
						"private-field" ,
						"static-field" ,
						"instance-field" ,
						"abstract-field" ,
						"decorated-field" ,
						"field" ,
						"public-constructor" ,
						"protected-constructor" ,
						"private-constructor" ,
						"constructor" ,
						"public-static-method" ,
						"protected-static-method" ,
						"private-static-method" ,
						"public-decorated-method" ,
						"protected-decorated-method" ,
						"private-decorated-method" ,
						"public-instance-method" ,
						"protected-instance-method" ,
						"private-instance-method" ,
						"public-abstract-method" ,
						"protected-abstract-method" ,
						"private-abstract-method" ,
						"public-method" ,
						"protected-method" ,
						"private-method" ,
						"static-method" ,
						"instance-method" ,
						"abstract-method" ,
						"decorated-method" ,
						"method" ,
					] ,
					"order" : "alphabetically" ,
				} ,
				"default" : {
					"memberTypes" : [
						"signature" ,
						"public-static-field" ,
						"protected-static-field" ,
						"private-static-field" ,
						"public-decorated-field" ,
						"protected-decorated-field" ,
						"private-decorated-field" ,
						"public-instance-field" ,
						"protected-instance-field" ,
						"private-instance-field" ,
						"public-abstract-field" ,
						"protected-abstract-field" ,
						"private-abstract-field" ,
						"public-field" ,
						"protected-field" ,
						"private-field" ,
						"static-field" ,
						"instance-field" ,
						"abstract-field" ,
						"decorated-field" ,
						"field" ,
						"public-constructor" ,
						"protected-constructor" ,
						"private-constructor" ,
						"constructor" ,
						"public-static-method" ,
						"protected-static-method" ,
						"private-static-method" ,
						"public-decorated-method" ,
						"protected-decorated-method" ,
						"private-decorated-method" ,
						"public-instance-method" ,
						"protected-instance-method" ,
						"private-instance-method" ,
						"public-abstract-method" ,
						"protected-abstract-method" ,
						"private-abstract-method" ,
						"public-method" ,
						"protected-method" ,
						"private-method" ,
						"static-method" ,
						"instance-method" ,
						"abstract-method" ,
						"decorated-method" ,
						"method" ,
					] ,
					"order" : "alphabetically" ,
				} ,
				"interfaces" : {
					"memberTypes" : [
						"signature" ,
						"field" ,
						"constructor" ,
						"method" ,
					] ,
					"order" : "alphabetically" ,
				} ,
				"typeLiterals" : {
					"memberTypes" : [
						"signature" ,
						"field" ,
						"constructor" ,
						"method" ,
					] ,
					"order" : "alphabetically" ,
				} ,
			} ,
		] ,
		"@typescript-eslint/method-signature-style" : [
			"error" ,
			"property" ,
		] ,
		"@typescript-eslint/naming-convention" : [
			"error" ,
			{
				"format" : [
					"camelCase" ,
				] ,
				"leadingUnderscore"  : "allow" ,
				"selector"           : "default" ,
				"trailingUnderscore" : "allow" ,
			} ,
			{
				"format" : [
					"PascalCase" ,
					"camelCase" ,
					"UPPER_CASE" ,
				] ,
				"leadingUnderscore" : "allow" ,
				"selector"          : [
					"memberLike" ,
					"variableLike" ,
				] ,
				"trailingUnderscore" : "allow" ,
			} ,
			{
				"format" : [
					"PascalCase" ,
				] ,
				"selector" : "typeLike" ,
			} ,
		] ,
		"@typescript-eslint/no-array-constructor" : [
			"error" ,
		] ,
		"@typescript-eslint/no-base-to-string" : [
			"error" ,
		] ,
		"@typescript-eslint/no-confusing-non-null-assertion" : [
			"error" ,
		] ,
		"@typescript-eslint/no-confusing-void-expression" : [
			"error" ,
			{
				"ignoreArrowShorthand" : false ,
				"ignoreVoidOperator"   : false ,
			} ,
		] ,
		"@typescript-eslint/no-dupe-class-members" : [
			"error" ,
		] ,
		"@typescript-eslint/no-duplicate-imports" : [
			"error" ,
			{
				"includeExports" : true ,
			} ,
		] ,
		"@typescript-eslint/no-dynamic-delete" : [
			"error" ,
		] ,
		"@typescript-eslint/no-empty-function" : [
			"error" ,
		] ,
		"@typescript-eslint/no-empty-interface" : [
			"error" ,
			{
				"allowSingleExtends" : false ,
			} ,
		] ,
		"@typescript-eslint/no-explicit-any" : [
			"error" ,
			{
				"fixToUnknown"   : true ,
				"ignoreRestArgs" : false ,
			} ,
		] ,
		"@typescript-eslint/no-extra-non-null-assertion" : [
			"error" ,
		] ,
		"@typescript-eslint/no-extra-parens" : [
			"error" ,
			"all" ,
			{
				"conditionalAssign"                  : false ,
				"enforceForArrowConditionals"        : true ,
				"enforceForFunctionPrototypeMethods" : true ,
				"enforceForNewInMemberExpressions"   : true ,
				"enforceForSequenceExpressions"      : true ,
				"ignoreJSX"                          : "none" ,
				"nestedBinaryExpressions"            : false ,
				"returnAssign"                       : false ,
			} ,
		] ,
		"@typescript-eslint/no-extra-semi" : [
			"error" ,
		] ,
		"@typescript-eslint/no-extraneous-class" : [
			"error" ,
			{
				"allowConstructorOnly" : false ,
				"allowEmpty"           : false ,
				"allowStaticOnly"      : false ,
				"allowWithDecorator"   : false ,
			} ,
		] ,
		"@typescript-eslint/no-floating-promises" : [
			"error" ,
			{
				"ignoreIIFE" : false ,
				"ignoreVoid" : false ,
			} ,
		] ,
		"@typescript-eslint/no-for-in-array" : [
			"error" ,
		] ,
		"@typescript-eslint/no-implicit-any-catch" : [
			"error" ,
			{
				"allowExplicitAny" : false ,
			} ,
		] ,
		"@typescript-eslint/no-implied-eval" : [
			"error" ,
		] ,
		"@typescript-eslint/no-inferrable-types" : [
			"error" ,
			{
				"ignoreParameters" : false ,
				"ignoreProperties" : false ,
			} ,
		] ,
		"@typescript-eslint/no-invalid-this" : [
			"error" ,
			{
				"capIsConstructor" : true ,
			} ,
		] ,
		"@typescript-eslint/no-invalid-void-type" : [
			"error" ,
			{
				"allowAsThisParameter"        : false ,
				"allowInGenericTypeArguments" : false ,
			} ,
		] ,
		"@typescript-eslint/no-loop-func" : [
			"error" ,
		] ,
		"@typescript-eslint/no-loss-of-precision" : [
			"error" ,
		] ,
		"@typescript-eslint/no-magic-numbers" : [
			"error" ,
			{
				"detectObjects"                 : true ,
				"enforceConst"                  : true ,
				"ignoreArrayIndexes"            : false ,
				"ignoreDefaultValues"           : false ,
				"ignoreEnums"                   : false ,
				"ignoreNumericLiteralTypes"     : false ,
				"ignoreReadonlyClassProperties" : false ,
			} ,
		] ,
		"@typescript-eslint/no-misused-new" : [
			"error" ,
		] ,
		"@typescript-eslint/no-misused-promises" : [
			"error" ,
			{
				"checksConditionals" : true ,
				"checksVoidReturn"   : true ,
			} ,
		] ,
		"@typescript-eslint/no-namespace" : [
			"error" ,
			{
				"allowDeclarations"    : false ,
				"allowDefinitionFiles" : false ,
			} ,
		] ,
		"@typescript-eslint/no-non-null-asserted-optional-chain" : [
			"error" ,
		] ,
		"@typescript-eslint/no-non-null-assertion" : [
			"error" ,
		] ,
		"@typescript-eslint/no-parameter-properties" : [
			"error" ,
			{
				"allows" : [
					"private" ,
					"private readonly" ,
					"protected" ,
					"protected readonly" ,
					"public" ,
					"public readonly" ,
					"readonly" ,
				] ,
			} ,
		] ,
		"@typescript-eslint/no-redeclare" : [
			"error" ,
			{
				"builtinGlobals"         : true ,
				"ignoreDeclarationMerge" : false ,
			} ,
		] ,
		"@typescript-eslint/no-require-imports" : [
			"error" ,
		] ,
		"@typescript-eslint/no-shadow" : [
			"error" ,
			{
				"builtinGlobals"                             : true ,
				"hoist"                                      : "all" ,
				"ignoreFunctionTypeParameterNameValueShadow" : false ,
				"ignoreTypeValueShadow"                      : false ,
			} ,
		] ,
		"@typescript-eslint/no-this-alias" : [
			"error" ,
			{
				"allowDestructuring" : true ,
			} ,
		] ,
		"@typescript-eslint/no-throw-literal" : [
			"error" ,
		] ,
		"@typescript-eslint/no-type-alias" : [
			"error" ,
			{
				"allowAliases"          : "never" ,
				"allowCallbacks"        : "never" ,
				"allowConditionalTypes" : "never" ,
				"allowConstructors"     : "never" ,
				"allowLiterals"         : "never" ,
				"allowMappedTypes"      : "never" ,
				"allowTupleTypes"       : "never" ,
			} ,
		] ,
		"@typescript-eslint/no-unnecessary-boolean-literal-compare" : [
			"error" ,
			{
				"allowComparingNullableBooleansToFalse" : false ,
				"allowComparingNullableBooleansToTrue"  : false ,
			} ,
		] ,
		"@typescript-eslint/no-unnecessary-condition" : [
			"error" ,
			{
				"allowConstantLoopConditions"                            : false ,
				"allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing" : false ,
			} ,
		] ,
		"@typescript-eslint/no-unnecessary-qualifier" : [
			"error" ,
		] ,
		"@typescript-eslint/no-unnecessary-type-arguments" : [
			"error" ,
		] ,
		"@typescript-eslint/no-unnecessary-type-assertion" : [
			"error" ,
		] ,
		"@typescript-eslint/no-unnecessary-type-constraint" : [
			"error" ,
		] ,
		"@typescript-eslint/no-unsafe-assignment" : [
			"error" ,
		] ,
		"@typescript-eslint/no-unsafe-call" : [
			"error" ,
		] ,
		"@typescript-eslint/no-unsafe-member-access" : [
			"error" ,
		] ,
		"@typescript-eslint/no-unsafe-return" : [
			"error" ,
		] ,
		"@typescript-eslint/no-unused-expressions" : [
			"error" ,
			{
				"allowShortCircuit"    : false ,
				"allowTaggedTemplates" : false ,
				"allowTernary"         : false ,
			} ,
		] ,
		"@typescript-eslint/no-unused-vars" : [
			"error" ,
			{
				"args"               : "all" ,
				"caughtErrors"       : "all" ,
				"ignoreRestSiblings" : false ,
				"vars"               : "all" ,
			} ,
		] ,
		"@typescript-eslint/no-use-before-define" : [
			"error" ,
			{
				"classes"              : true ,
				"enums"                : true ,
				"functions"            : true ,
				"ignoreTypeReferences" : false ,
				"typedefs"             : true ,
				"variables"            : true ,
			} ,
		] ,
		"@typescript-eslint/no-useless-constructor" : [
			"error" ,
		] ,
		"@typescript-eslint/no-var-requires" : [
			"error" ,
		] ,
		"@typescript-eslint/non-nullable-type-assertion-style" : [
			"error" ,
		] ,
		"@typescript-eslint/prefer-as-const" : [
			"error" ,
		] ,
		"@typescript-eslint/prefer-enum-initializers" : [
			"error" ,
		] ,
		"@typescript-eslint/prefer-for-of" : [
			"error" ,
		] ,
		"@typescript-eslint/prefer-function-type" : [
			"error" ,
		] ,
		"@typescript-eslint/prefer-includes" : [
			"error" ,
		] ,
		"@typescript-eslint/prefer-literal-enum-member" : [
			"error" ,
		] ,
		"@typescript-eslint/prefer-namespace-keyword" : [
			"error" ,
		] ,
		"@typescript-eslint/prefer-nullish-coalescing" : [
			"error" ,
			{
				"ignoreConditionalTests"        : false ,
				"ignoreMixedLogicalExpressions" : false ,
			} ,
		] ,
		"@typescript-eslint/prefer-optional-chain" : [
			"error" ,
		] ,
		"@typescript-eslint/prefer-readonly" : [
			"error" ,
			{
				"onlyInlineLambdas" : false ,
			} ,
		] ,
		"@typescript-eslint/prefer-readonly-parameter-types" : [
			"error" ,
			{
				"checkParameterProperties" : true ,
				"ignoreInferredTypes"      : false ,
			} ,
		] ,
		"@typescript-eslint/prefer-reduce-type-parameter" : [
			"error" ,
		] ,
		"@typescript-eslint/prefer-regexp-exec" : [
			"error" ,
		] ,
		"@typescript-eslint/prefer-string-starts-ends-with" : [
			"error" ,
		] ,
		"@typescript-eslint/prefer-ts-expect-error" : [
			"error" ,
		] ,
		"@typescript-eslint/promise-function-async" : [
			"error" ,
			{
				"allowAny"            : true ,
				"allowedPromiseNames" : [
					"Thenable" ,
				] ,
				"checkArrowFunctions"       : true ,
				"checkFunctionDeclarations" : true ,
				"checkFunctionExpressions"  : true ,
				"checkMethodDeclarations"   : true ,
			} ,
		] ,
		"@typescript-eslint/quotes" : [
			"error" ,
			"double" ,
			{
				"allowTemplateLiterals" : false ,
				"avoidEscape"           : false ,
			} ,
		] ,
		"@typescript-eslint/require-array-sort-compare" : [
			"error" ,
			{
				"ignoreStringArrays" : false ,
			} ,
		] ,
		"@typescript-eslint/require-await" : [
			"error" ,
		] ,
		"@typescript-eslint/restrict-plus-operands" : [
			"error" ,
			{
				"checkCompoundAssignments" : true ,
			} ,
		] ,
		"@typescript-eslint/restrict-template-expressions" : [
			"error" ,
			{
				"allowAny"     : false ,
				"allowBoolean" : false ,
				"allowNullish" : false ,
				"allowNumber"  : false ,
			} ,
		] ,
		"@typescript-eslint/return-await" : [
			"error" ,
			"in-try-catch" ,
		] ,
		"@typescript-eslint/semi" : [
			"error" ,
			"always" ,
			{
				"omitLastInOneLineBlock" : false ,
			} ,
		] ,
		"@typescript-eslint/space-before-function-paren" : [
			"error" ,
			{
				"anonymous"  : "always" ,
				"asyncArrow" : "always" ,
				"named"      : "always" ,
			} ,
		] ,
		"@typescript-eslint/space-infix-ops" : [
			"error" ,
			{
				"int32Hint" : false ,
			} ,
		] ,
		"@typescript-eslint/strict-boolean-expressions" : [
			"error" ,
			{
				"allowAny"                                               : false ,
				"allowNullableBoolean"                                   : false ,
				"allowNullableNumber"                                    : false ,
				"allowNullableObject"                                    : true ,
				"allowNullableString"                                    : false ,
				"allowNumber"                                            : true ,
				"allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing" : false ,
				"allowString"                                            : true ,
			} ,
		] ,
		"@typescript-eslint/switch-exhaustiveness-check" : [
			"error" ,
		] ,
		"@typescript-eslint/triple-slash-reference" : [
			"error" ,
		] ,
		"@typescript-eslint/type-annotation-spacing" : [
			"error" ,
			{
				"after"  : true ,
				"before" : true ,
			} ,
		] ,
		"@typescript-eslint/typedef" : [
			"error" ,
			{
				"arrayDestructuring"                : true ,
				"arrowParameter"                    : true ,
				"memberVariableDeclaration"         : true ,
				"objectDestructuring"               : true ,
				"parameter"                         : true ,
				"propertyDeclaration"               : true ,
				"variableDeclaration"               : true ,
				"variableDeclarationIgnoreFunction" : true ,
			} ,
		] ,
		"@typescript-eslint/unbound-method" : [
			"error" ,
			{
				"ignoreStatic" : false ,
			} ,
		] ,
		"@typescript-eslint/unified-signatures" : [
			"error" ,
		] ,
		"accessor-pairs" : [
			"error" ,
			{
				"enforceForClassMembers" : true ,
				"getWithoutSet"          : false ,
				"setWithoutGet"          : true ,
			} ,
		] ,
		"array-bracket-newline" : [
			"error" ,
			{
				"minItems"  : 1 ,
				"multiline" : true ,
			} ,
		] ,
		"array-bracket-spacing" : [
			"error" ,
			"always" ,
			{
				"arraysInArrays"  : true ,
				"objectsInArrays" : true ,
				"singleValue"     : true ,
			} ,
		] ,
		"array-callback-return" : [
			"error" ,
			{
				"allowImplicit" : false ,
				"checkForEach"  : true ,
			} ,
		] ,
		"array-element-newline" : [
			"error" ,
			{
				"ArrayExpression" : {
					"minItems"  : 1 ,
					"multiline" : true ,
				} ,
				"ArrayPattern" : {
					"minItems"  : 1 ,
					"multiline" : true ,
				} ,
			} ,
		] ,
		"arrow-body-style" : [
			"error" ,
			"always" ,
		] ,
		"arrow-parens" : [
			"error" ,
			"always" ,
			{
				"requireForBlockBody" : true ,
			} ,
		] ,
		"arrow-spacing" : [
			"error" ,
			{
				"after"  : true ,
				"before" : true ,
			} ,
		] ,
		"block-scoped-var" : [
			"error" ,
		] ,
		"block-spacing" : [
			"error" ,
			"always" ,
		] ,
		"brace-style" : [
			"off" ,
		] ,
		"callback-return" : [
			"off" ,
		] ,
		"camelcase" : [
			"error" ,
			{
				"ignoreDestructuring" : false ,
				"ignoreGlobals"       : false ,
				"ignoreImports"       : false ,
				"properties"          : "always" ,
			} ,
		] ,
		"capitalized-comments" : [
			"error" ,
			"always" ,
			{
				"block" : {
					"ignoreConsecutiveComments" : false ,
					"ignoreInlineComments"      : false ,
				} ,
				"line" : {
					"ignoreConsecutiveComments" : false ,
					"ignoreInlineComments"      : false ,
				} ,
			} ,
		] ,
		"class-methods-use-this" : [
			"error" ,
		] ,
		"comma-dangle" : [
			"off" ,
		] ,
		"comma-spacing" : [
			"off" ,
		] ,
		"comma-style" : [
			"error" ,
			"last" ,
			{
				"exceptions" : {
					"ArrayExpression"         : false ,
					"ArrayPattern"            : false ,
					"ArrowFunctionExpression" : false ,
					"CallExpression"          : false ,
					"FunctionDeclaration"     : false ,
					"FunctionExpression"      : false ,
					"ImportDeclaration"       : false ,
					"NewExpression"           : false ,
					"ObjectExpression"        : false ,
					"ObjectPattern"           : false ,
					"VariableDeclaration"     : false ,
				} ,
			} ,
		] ,
		"complexity" : [
			"error" ,
			{
				"max" : 32 ,
			} ,
		] ,
		"computed-property-spacing" : [
			"error" ,
			"always" ,
			{
				"enforceForClassMembers" : true ,
			} ,
		] ,
		"consistent-return" : [
			"error" ,
			{
				"treatUndefinedAsUnspecified" : true ,
			} ,
		] ,
		"consistent-this" : [
			"error" ,
			"that" ,
		] ,
		"constructor-super" : [
			"error" ,
		] ,
		"curly" : [
			"error" ,
			"all" ,
		] ,
		"default-case" : [
			"error" ,
		] ,
		"default-case-last" : [
			"error" ,
		] ,
		"default-param-last" : [
			"off" ,
		] ,
		"dot-location" : [
			"error" ,
			"property" ,
		] ,
		"dot-notation" : [
			"off" ,
		] ,
		"eol-last" : [
			"error" ,
			"always" ,
		] ,
		"eqeqeq" : [
			"error" ,
			"always" ,
		] ,
		"eslint-plugin-config-perf-standard" : [
			"off" ,
		] ,
		"for-direction" : [
			"error" ,
		] ,
		"func-call-spacing" : [
			"off" ,
		] ,
		"func-name-matching" : [
			"error" ,
			"always" ,
			{
				"considerPropertyDescriptor"   : true ,
				"includeCommonJSModuleExports" : true ,
			} ,
		] ,
		"func-names" : [
			"error" ,
			"as-needed" ,
			{
				"generators" : "as-needed" ,
			} ,
		] ,
		"func-style" : [
			"error" ,
			"expression" ,
			{
				"allowArrowFunctions" : true ,
			} ,
		] ,
		"function-call-argument-newline" : [
			"error" ,
			"always" ,
		] ,
		"function-paren-newline" : [
			"error" ,
			{
				"minItems" : 1 ,
			} ,
		] ,
		"generator-star-spacing" : [
			"error" ,
			{
				"after"     : true ,
				"anonymous" : {
					"after"  : true ,
					"before" : true ,
				} ,
				"before" : true ,
				"method" : {
					"after"  : true ,
					"before" : true ,
				} ,
				"named" : {
					"after"  : true ,
					"before" : true ,
				} ,
			} ,
		] ,
		"getter-return" : [
			"error" ,
			{
				"allowImplicit" : false ,
			} ,
		] ,
		"global-require" : [
			"off" ,
		] ,
		"grouped-accessor-pairs" : [
			"error" ,
			"getBeforeSet" ,
		] ,
		"guard-for-in" : [
			"error" ,
		] ,
		"handle-callback-err" : [
			"off" ,
		] ,
		"id-blacklist" : [
			"off" ,
		] ,
		"id-denylist" : [
			"error" ,
		] ,
		"id-length" : [
			"error" ,
			{
				"max"        : 32 ,
				"min"        : 1 ,
				"properties" : "always" ,
			} ,
		] ,
		"id-match" : [
			"error" ,
		] ,
		"implicit-arrow-linebreak" : [
			"error" ,
			"below" ,
		] ,
		"indent" : [
			"off" ,
		] ,
		"indent-legacy" : [
			"off" ,
		] ,
		"init-declarations" : [
			"off" ,
		] ,
		"jsx-a11y/accessible-emoji" : [
			"error" ,
		] ,
		"jsx-a11y/alt-text" : [
			"error" ,
			{
				"area" : [
					"Area" ,
				] ,
				"elements" : [
					"img" ,
					"object" ,
					"area" ,
					"input[type='image']" ,
				] ,
				"img" : [
					"Image" ,
				] ,
				"input[type='image']" : [
					"InputImage" ,
				] ,
				"object" : [
					"Object" ,
				] ,
			} ,
		] ,
		"jsx-a11y/anchor-has-content" : [
			"error" ,
			{
				"components" : [
					"Anchor" ,
				] ,
			} ,
		] ,
		"jsx-a11y/anchor-is-valid" : [
			"error" ,
			{
				"aspects" : [
					"noHref" ,
					"invalidHref" ,
					"preferButton" ,
				] ,
				"components" : [
					"Link" ,
				] ,
				"specialLink" : [
					"hrefLeft" ,
					"hrefRight" ,
				] ,
			} ,
		] ,
		"jsx-a11y/aria-activedescendant-has-tabindex" : [
			"error" ,
		] ,
		"jsx-a11y/aria-props" : [
			"error" ,
		] ,
		"jsx-a11y/aria-proptypes" : [
			"error" ,
		] ,
		"jsx-a11y/aria-role" : [
			"error" ,
			{
				"ignoreNonDOM" : false ,
			} ,
		] ,
		"jsx-a11y/aria-unsupported-elements" : [
			"error" ,
		] ,
		"jsx-a11y/autocomplete-valid" : [
			"error" ,
			{
				"inputComponents" : [
					"Input" ,
					"FormField" ,
				] ,
			} ,
		] ,
		"jsx-a11y/click-events-have-key-events" : [
			"error" ,
		] ,
		"jsx-a11y/heading-has-content" : [
			"error" ,
			{
				"components" : [
					"MyHeading" ,
				] ,
			} ,
		] ,
		"jsx-a11y/html-has-lang" : [
			"error" ,
		] ,
		"jsx-a11y/iframe-has-title" : [
			"error" ,
		] ,
		"jsx-a11y/img-redundant-alt" : [
			"error" ,
			{
				"components" : [
					"Image" ,
				] ,
				"words" : [
					"Bild" ,
					"Foto" ,
				] ,
			} ,
		] ,
		"jsx-a11y/interactive-supports-focus" : [
			"error" ,
			{
				"tabbable" : [
					"button" ,
					"checkbox" ,
					"columnheader" ,
					"combobox" ,
					"doc-backlink" ,
					"doc-biblioref" ,
					"doc-glossref" ,
					"doc-noteref" ,
					"grid" ,
					"gridcell" ,
					"link" ,
					"listbox" ,
					"menu" ,
					"menubar" ,
					"menuitem" ,
					"menuitemcheckbox" ,
					"menuitemradio" ,
					"option" ,
					"progressbar" ,
					"radio" ,
					"radiogroup" ,
					"row" ,
					"rowheader" ,
					"searchbox" ,
					"slider" ,
					"spinbutton" ,
					"switch" ,
					"tab" ,
					"tablist" ,
					"textbox" ,
					"tree" ,
					"treegrid" ,
					"treeitem" ,
				] ,
			} ,
		] ,
		"jsx-a11y/label-has-associated-control" : [
			"error" ,
			{
				"assert"            : "both" ,
				"controlComponents" : [
					"CustomInput" ,
				] ,
				"depth"           : 3 ,
				"labelAttributes" : [
					"inputLabel" ,
				] ,
				"labelComponents" : [
					"CustomLabel" ,
				] ,
			} ,
		] ,
		"jsx-a11y/lang" : [
			"error" ,
		] ,
		"jsx-a11y/media-has-caption" : [
			"error" ,
			{
				"audio" : [
					"Audio" ,
				] ,
				"track" : [
					"Track" ,
				] ,
				"video" : [
					"Video" ,
				] ,
			} ,
		] ,
		"jsx-a11y/mouse-events-have-key-events" : [
			"error" ,
		] ,
		"jsx-a11y/no-access-key" : [
			"error" ,
		] ,
		"jsx-a11y/no-autofocus" : [
			"error" ,
			{
				"ignoreNonDOM" : false ,
			} ,
		] ,
		"jsx-a11y/no-distracting-elements" : [
			"error" ,
			{
				"elements" : [
					"marquee" ,
					"blink" ,
				] ,
			} ,
		] ,
		"jsx-a11y/no-interactive-element-to-noninteractive-role" : [
			"error" ,
			{
				"tr" : [
					"none" ,
					"presentation" ,
				] ,
			} ,
		] ,
		"jsx-a11y/no-noninteractive-element-interactions" : [
			"error" ,
			{
				"handlers" : [
					"onClick" ,
					"onKeyDown" ,
					"onKeyPress" ,
					"onKeyUp" ,
					"onMouseDown" ,
					"onMouseUp" ,
				] ,
			} ,
		] ,
		"jsx-a11y/no-noninteractive-element-to-interactive-role" : [
			"error" ,
			{
				"li" : [
					"menuitem" ,
					"option" ,
					"row" ,
					"tab" ,
					"treeitem" ,
				] ,
				"ol" : [
					"listbox" ,
					"menu" ,
					"menubar" ,
					"radiogroup" ,
					"tablist" ,
					"tree" ,
					"treegrid" ,
				] ,
				"table" : [
					"grid" ,
				] ,
				"td" : [
					"gridcell" ,
				] ,
				"ul" : [
					"listbox" ,
					"menu" ,
					"menubar" ,
					"radiogroup" ,
					"tablist" ,
					"tree" ,
					"treegrid" ,
				] ,
			} ,
		] ,
		"jsx-a11y/no-noninteractive-tabindex" : [
			"error" ,
			{
				"roles" : [
					"tabpanel" ,
				] ,
				"tags" : [] ,
			} ,
		] ,
		"jsx-a11y/no-onchange" : [
			"off" ,
		] ,
		"jsx-a11y/no-redundant-roles" : [
			"error" ,
			{
				"nav" : [
					"navigation" ,
				] ,
			} ,
		] ,
		"jsx-a11y/no-static-element-interactions" : [
			"error" ,
			{
				"handlers" : [
					"onClick" ,
					"onKeyDown" ,
					"onKeyPress" ,
					"onKeyUp" ,
					"onMouseDown" ,
					"onMouseUp" ,
				] ,
			} ,
		] ,
		"jsx-a11y/role-has-required-aria-props" : [
			"error" ,
		] ,
		"jsx-a11y/role-supports-aria-props" : [
			"error" ,
		] ,
		"jsx-a11y/scope" : [
			"error" ,
		] ,
		"jsx-a11y/tabindex-no-positive" : [
			"error" ,
		] ,
		"jsx-quotes" : [
			"error" ,
			"prefer-double" ,
		] ,
		"key-spacing" : [
			"error" ,
			{
				"afterColon"  : true ,
				"align"       : "colon" ,
				"beforeColon" : true ,
				"mode"        : "minimum" ,
			} ,
		] ,
		"keyword-spacing" : [
			"off" ,
		] ,
		"line-comment-position" : [
			"error" ,
			{
				"applyDefaultIgnorePatterns" : true ,
				"position"                   : "above" ,
			} ,
		] ,
		"linebreak-style" : [
			"error" ,
			"unix" ,
		] ,
		"lines-around-comment" : [
			"error" ,
			{
				"afterBlockComment"          : true ,
				"afterLineComment"           : false ,
				"allowArrayEnd"              : false ,
				"allowArrayStart"            : false ,
				"allowBlockEnd"              : false ,
				"allowBlockStart"            : false ,
				"allowClassEnd"              : false ,
				"allowClassStart"            : false ,
				"allowObjectEnd"             : false ,
				"allowObjectStart"           : false ,
				"applyDefaultIgnorePatterns" : true ,
				"beforeBlockComment"         : true ,
				"beforeLineComment"          : true ,
			} ,
		] ,
		"lines-around-directive" : [
			"off" ,
		] ,
		"lines-between-class-members" : [
			"off" ,
		] ,
		"max-classes-per-file" : [
			"error" ,
			1 ,
		] ,
		"max-depth" : [
			"error" ,
			4 ,
		] ,
		"max-len" : [
			"error" ,
			{
				"code"                   : 128 ,
				"comments"               : 128 ,
				"ignoreComments"         : false ,
				"ignoreRegExpLiterals"   : false ,
				"ignoreStrings"          : false ,
				"ignoreTemplateLiterals" : false ,
				"ignoreTrailingComments" : false ,
				"ignoreUrls"             : false ,
				"tabWidth"               : 4 ,
			} ,
		] ,
		"max-lines" : [
			"error" ,
			{
				"max"            : 1_024 ,
				"skipBlankLines" : true ,
				"skipComments"   : true ,
			} ,
		] ,
		"max-lines-per-function" : [
			"error" ,
			{
				"IIFEs"          : true ,
				"max"            : 256 ,
				"skipBlankLines" : true ,
				"skipComments"   : true ,
			} ,
		] ,
		"max-nested-callbacks" : [
			"error" ,
			4 ,
		] ,
		"max-params" : [
			"error" ,
			4 ,
		] ,
		"max-statements" : [
			"error" ,
			16 ,
		] ,
		"max-statements-per-line" : [
			"error" ,
			{
				"max" : 1 ,
			} ,
		] ,
		"multiline-comment-style" : [
			"error" ,
			"starred-block" ,
		] ,
		"multiline-ternary" : [
			"error" ,
			"always" ,
		] ,
		"new-cap" : [
			"error" ,
			{
				"capIsNew"   : true ,
				"newIsCap"   : true ,
				"properties" : true ,
			} ,
		] ,
		"new-parens" : [
			"error" ,
			"always" ,
		] ,
		"newline-after-var" : [
			"off" ,
		] ,
		"newline-before-return" : [
			"off" ,
		] ,
		"newline-per-chained-call" : [
			"error" ,
			{
				"ignoreChainWithDepth" : 1 ,
			} ,
		] ,
		"no-alert" : [
			"error" ,
		] ,
		"no-array-constructor" : [
			"off" ,
		] ,
		"no-async-promise-executor" : [
			"error" ,
		] ,
		"no-await-in-loop" : [
			"error" ,
		] ,
		"no-bitwise" : [
			"error" ,
		] ,
		"no-buffer-constructor" : [
			"off" ,
		] ,
		"no-caller" : [
			"error" ,
		] ,
		"no-case-declarations" : [
			"error" ,
		] ,
		"no-catch-shadow" : [
			"off" ,
		] ,
		"no-class-assign" : [
			"error" ,
		] ,
		"no-compare-neg-zero" : [
			"error" ,
		] ,
		"no-cond-assign" : [
			"error" ,
			"always" ,
		] ,
		"no-confusing-arrow" : [
			"error" ,
			{
				"allowParens" : false ,
			} ,
		] ,
		"no-console" : [
			"error" ,
		] ,
		"no-const-assign" : [
			"error" ,
		] ,
		"no-constant-condition" : [
			"error" ,
			{
				"checkLoops" : true ,
			} ,
		] ,
		"no-constructor-return" : [
			"error" ,
		] ,
		"no-continue" : [
			"error" ,
		] ,
		"no-control-regex" : [
			"error" ,
		] ,
		"no-debugger" : [
			"error" ,
		] ,
		"no-delete-var" : [
			"error" ,
		] ,
		"no-div-regex" : [
			"error" ,
		] ,
		"no-dupe-args" : [
			"error" ,
		] ,
		"no-dupe-class-members" : [
			"off" ,
		] ,
		"no-dupe-else-if" : [
			"error" ,
		] ,
		"no-dupe-keys" : [
			"error" ,
		] ,
		"no-duplicate-case" : [
			"error" ,
		] ,
		"no-duplicate-imports" : [
			"off" ,
		] ,
		"no-else-return" : [
			"error" ,
			{
				"allowElseIf" : true ,
			} ,
		] ,
		"no-empty" : [
			"error" ,
			{
				"allowEmptyCatch" : false ,
			} ,
		] ,
		"no-empty-character-class" : [
			"error" ,
		] ,
		"no-empty-function" : [
			"off" ,
		] ,
		"no-empty-label" : [
			"off" ,
		] ,
		"no-empty-pattern" : [
			"error" ,
		] ,
		"no-eq-null" : [
			"error" ,
		] ,
		"no-eval" : [
			"error" ,
			{
				"allowIndirect" : false ,
			} ,
		] ,
		"no-ex-assign" : [
			"error" ,
		] ,
		"no-extend-native" : [
			"error" ,
		] ,
		"no-extra-bind" : [
			"error" ,
		] ,
		"no-extra-boolean-cast" : [
			"error" ,
			{
				"enforceForLogicalOperands" : true ,
			} ,
		] ,
		"no-extra-label" : [
			"error" ,
		] ,
		"no-extra-parens" : [
			"off" ,
		] ,
		"no-extra-semi" : [
			"off" ,
		] ,
		"no-fallthrough" : [
			"error" ,
		] ,
		"no-floating-decimal" : [
			"error" ,
		] ,
		"no-func-assign" : [
			"error" ,
		] ,
		"no-global-assign" : [
			"error" ,
		] ,
		"no-implicit-coercion" : [
			"error" ,
			{
				"boolean" : true ,
				"number"  : true ,
				"string"  : true ,
			} ,
		] ,
		"no-implicit-globals" : [
			"error" ,
			{
				"lexicalBindings" : true ,
			} ,
		] ,
		"no-implied-eval" : [
			"off" ,
		] ,
		"no-import-assign" : [
			"error" ,
		] ,
		"no-inline-comments" : [
			"error" ,
		] ,
		"no-inner-declarations" : [
			"error" ,
			"both" ,
		] ,
		"no-invalid-regexp" : [
			"error" ,
		] ,
		"no-invalid-this" : [
			"off" ,
		] ,
		"no-irregular-whitespace" : [
			"error" ,
			{
				"skipComments"  : false ,
				"skipRegExps"   : false ,
				"skipStrings"   : false ,
				"skipTemplates" : false ,
			} ,
		] ,
		"no-iterator" : [
			"error" ,
		] ,
		"no-label-var" : [
			"error" ,
		] ,
		"no-labels" : [
			"error" ,
			{
				"allowLoop"   : false ,
				"allowSwitch" : false ,
			} ,
		] ,
		"no-lone-blocks" : [
			"error" ,
		] ,
		"no-lonely-if" : [
			"error" ,
		] ,
		"no-loop-func" : [
			"off" ,
		] ,
		"no-loss-of-precision" : [
			"off" ,
		] ,
		"no-magic-numbers" : [
			"off" ,
		] ,
		"no-misleading-character-class" : [
			"error" ,
		] ,
		"no-mixed-operators" : [
			"error" ,
			{
				"allowSamePrecedence" : true ,
			} ,
		] ,
		"no-mixed-requires" : [
			"off" ,
		] ,
		"no-mixed-spaces-and-tabs" : [
			"error" ,
		] ,
		"no-multi-assign" : [
			"error" ,
		] ,
		"no-multi-spaces" : [
			"error" ,
			{
				"exceptions" : {
					"BinaryExpression"   : true ,
					"ImportDeclaration"  : true ,
					"Property"           : true ,
					"VariableDeclarator" : true ,
				} ,
				"ignoreEOLComments" : false ,
			} ,
		] ,
		"no-multi-str" : [
			"error" ,
		] ,
		"no-multiple-empty-lines" : [
			"error" ,
			{
				"max"    : 1 ,
				"maxBOF" : 1 ,
				"maxEOF" : 1 ,
			} ,
		] ,
		"no-native-reassign" : [
			"off" ,
		] ,
		"no-negated-condition" : [
			"error" ,
		] ,
		"no-negated-in-lhs" : [
			"off" ,
		] ,
		"no-nested-ternary" : [
			"off" ,
		] ,
		"no-new" : [
			"error" ,
		] ,
		"no-new-func" : [
			"error" ,
		] ,
		"no-new-object" : [
			"error" ,
		] ,
		"no-new-require" : [
			"off" ,
		] ,
		"no-new-symbol" : [
			"error" ,
		] ,
		"no-new-wrappers" : [
			"error" ,
		] ,
		"no-nonoctal-decimal-escape" : [
			"error" ,
		] ,
		"no-obj-calls" : [
			"error" ,
		] ,
		"no-octal" : [
			"error" ,
		] ,
		"no-octal-escape" : [
			"error" ,
		] ,
		"no-param-reassign" : [
			"error" ,
			{
				"props" : false ,
			} ,
		] ,
		"no-path-concat" : [
			"off" ,
		] ,
		"no-plusplus" : [
			"error" ,
			{
				"allowForLoopAfterthoughts" : false ,
			} ,
		] ,
		"no-process-env" : [
			"off" ,
		] ,
		"no-process-exit" : [
			"off" ,
		] ,
		"no-promise-executor-return" : [
			"error" ,
		] ,
		"no-proto" : [
			"error" ,
		] ,
		"no-prototype-builtins" : [
			"error" ,
		] ,
		"no-redeclare" : [
			"off" ,
		] ,
		"no-regex-spaces" : [
			"error" ,
		] ,
		"no-restricted-exports" : [
			"error" ,
		] ,
		"no-restricted-globals" : [
			"error" ,
		] ,
		"no-restricted-imports" : [
			"error" ,
		] ,
		"no-restricted-modules" : [
			"off" ,
		] ,
		"no-restricted-properties" : [
			"error" ,
		] ,
		"no-restricted-syntax" : [
			"error" ,
		] ,
		"no-return-assign" : [
			"error" ,
			"always" ,
		] ,
		"no-return-await" : [
			"off" ,
		] ,
		"no-script-url" : [
			"error" ,
		] ,
		"no-self-assign" : [
			"error" ,
			{
				"props" : true ,
			} ,
		] ,
		"no-self-compare" : [
			"error" ,
		] ,
		"no-sequences" : [
			"error" ,
		] ,
		"no-setter-return" : [
			"error" ,
		] ,
		"no-shadow" : [
			"off" ,
		] ,
		"no-shadow-restricted-names" : [
			"error" ,
		] ,
		"no-spaced-func" : [
			"off" ,
		] ,
		"no-sparse-arrays" : [
			"error" ,
		] ,
		"no-sync" : [
			"off" ,
		] ,
		"no-tabs" : [
			"error" ,
			{
				"allowIndentationTabs" : true ,
			} ,
		] ,
		"no-template-curly-in-string" : [
			"error" ,
		] ,
		"no-ternary" : [
			"error" ,
		] ,
		"no-this-before-super" : [
			"error" ,
		] ,
		"no-throw-literal" : [
			"off" ,
		] ,
		"no-trailing-spaces" : [
			"error" ,
			{
				"ignoreComments" : false ,
				"skipBlankLines" : false ,
			} ,
		] ,
		"no-undef" : [
			"error" ,
			{
				"typeof" : true ,
			} ,
		] ,
		"no-undef-init" : [
			"error" ,
		] ,
		"no-undefined" : [
			"error" ,
		] ,
		"no-underscore-dangle" : [
			"error" ,
			{
				"allowAfterSuper"           : false ,
				"allowAfterThis"            : false ,
				"allowAfterThisConstructor" : false ,
				"allowFunctionParams"       : false ,
				"enforceInMethodNames"      : true ,
			} ,
		] ,
		"no-unexpected-multiline" : [
			"error" ,
		] ,
		"no-unmodified-loop-condition" : [
			"error" ,
		] ,
		"no-unneeded-ternary" : [
			"error" ,
			{
				"defaultAssignment" : false ,
			} ,
		] ,
		"no-unreachable" : [
			"error" ,
		] ,
		"no-unreachable-loop" : [
			"error" ,
		] ,
		"no-unsafe-finally" : [
			"error" ,
		] ,
		"no-unsafe-negation" : [
			"error" ,
			{
				"enforceForOrderingRelations" : true ,
			} ,
		] ,
		"no-unsafe-optional-chaining" : [
			"error" ,
			{
				"disallowArithmeticOperators" : true ,
			} ,
		] ,
		"no-unused-expressions" : [
			"off" ,
		] ,
		"no-unused-labels" : [
			"error" ,
		] ,
		"no-unused-vars" : [
			"off" ,
		] ,
		"no-use-before-define" : [
			"off" ,
		] ,
		"no-useless-backreference" : [
			"error" ,
		] ,
		"no-useless-call" : [
			"error" ,
		] ,
		"no-useless-catch" : [
			"error" ,
		] ,
		"no-useless-computed-key" : [
			"error" ,
			{
				"enforceForClassMembers" : true ,
			} ,
		] ,
		"no-useless-concat" : [
			"error" ,
		] ,
		"no-useless-constructor" : [
			"off" ,
		] ,
		"no-useless-escape" : [
			"error" ,
		] ,
		"no-useless-rename" : [
			"error" ,
			{
				"ignoreDestructuring" : false ,
				"ignoreExport"        : false ,
				"ignoreImport"        : false ,
			} ,
		] ,
		"no-useless-return" : [
			"error" ,
		] ,
		"no-var" : [
			"error" ,
		] ,
		"no-void" : [
			"error" ,
			{
				"allowAsStatement" : false ,
			} ,
		] ,
		"no-warning-comments" : [
			"warn" ,
			{
				"location" : "anywhere" ,
				"terms"    : [
					"todo" ,
					"fixme" ,
					"xxx" ,
				] ,
			} ,
		] ,
		"no-whitespace-before-property" : [
			"error" ,
		] ,
		"no-with" : [
			"error" ,
		] ,
		"nonblock-statement-body-position" : [
			"error" ,
			"below" ,
		] ,
		"object-curly-newline" : [
			"error" ,
			{
				"ExportDeclaration" : {
					"consistent"    : true ,
					"minProperties" : 1 ,
					"multiline"     : true ,
				} ,
				"ImportDeclaration" : {
					"consistent"    : true ,
					"minProperties" : 1 ,
					"multiline"     : true ,
				} ,
				"ObjectExpression" : {
					"consistent"    : true ,
					"minProperties" : 1 ,
					"multiline"     : true ,
				} ,
				"ObjectPattern" : {
					"consistent"    : true ,
					"minProperties" : 1 ,
					"multiline"     : true ,
				} ,
			} ,
		] ,
		"object-curly-spacing" : [
			"error" ,
			"always" ,
			{
				"arraysInObjects"  : true ,
				"objectsInObjects" : true ,
			} ,
		] ,
		"object-property-newline" : [
			"error" ,
			{
				"allowAllPropertiesOnSameLine" : false ,
			} ,
		] ,
		"object-shorthand" : [
			"error" ,
			"always" ,
			{
				"avoidExplicitReturnArrows" : false ,
				"avoidQuotes"               : true ,
				"ignoreConstructors"        : false ,
			} ,
		] ,
		"one-var" : [
			"error" ,
			{
				"initialized"   : "never" ,
				"uninitialized" : "consecutive" ,
			} ,
		] ,
		"one-var-declaration-per-line" : [
			"error" ,
			"always" ,
		] ,
		"operator-assignment" : [
			"error" ,
			"always" ,
		] ,
		"operator-linebreak" : [
			"error" ,
			"before" ,
		] ,
		"padded-blocks" : [
			"error" ,
			{
				"blocks"   : "always" ,
				"classes"  : "always" ,
				"switches" : "always" ,
			} ,
			{
				"allowSingleLineBlocks" : false ,
			} ,
		] ,
		"padding-line-between-statements" : [
			"error" ,
			{
				"blankLine" : "always" ,
				"next"      : "*" ,
				"prev"      : "*" ,
			} ,
		] ,
		"prefer-arrow-callback" : [
			"error" ,
			{
				"allowNamedFunctions" : false ,
				"allowUnboundThis"    : false ,
			} ,
		] ,
		"prefer-const" : [
			"error" ,
			{
				"destructuring"          : "any" ,
				"ignoreReadBeforeAssign" : false ,
			} ,
		] ,
		"prefer-destructuring" : [
			"error" ,
			{
				"AssignmentExpression" : {
					"array"  : true ,
					"object" : true ,
				} ,
				"VariableDeclarator" : {
					"array"  : true ,
					"object" : true ,
				} ,
			} ,
			{
				"enforceForRenamedProperties" : true ,
			} ,
		] ,
		"prefer-exponentiation-operator" : [
			"error" ,
		] ,
		"prefer-named-capture-group" : [
			"error" ,
		] ,
		"prefer-numeric-literals" : [
			"error" ,
		] ,
		"prefer-object-spread" : [
			"error" ,
		] ,
		"prefer-promise-reject-errors" : [
			"error" ,
			{
				"allowEmptyReject" : false ,
			} ,
		] ,
		"prefer-reflect" : [
			"off" ,
		] ,
		"prefer-regex-literals" : [
			"error" ,
			{
				"disallowRedundantWrapping" : true ,
			} ,
		] ,
		"prefer-rest-params" : [
			"error" ,
		] ,
		"prefer-spread" : [
			"error" ,
		] ,
		"prefer-template" : [
			"error" ,
		] ,
		"putout/align-spaces" : [
			"error" ,
		] ,
		"putout/destructuring-as-function-argument" : [
			"off" ,
		] ,
		"putout/for-of-multiple-properties-destructuring" : [
			"off" ,
		] ,
		"putout/function-declaration-paren-newline" : [
			"off" ,
		] ,
		"putout/keyword-spacing" : [
			"off" ,
		] ,
		"putout/long-properties-destructuring" : [
			"error" ,
		] ,
		"putout/multiple-properties-destructuring" : [
			"error" ,
			{
				"minProperties" : 1 ,
			} ,
		] ,
		"putout/newline-function-call-arguments" : [
			"error" ,
		] ,
		"putout/putout" : [
			"error" ,
		] ,
		"putout/remove-newline-after-default-import" : [
			"error" ,
		] ,
		"putout/single-property-destructuring" : [
			"off" ,
		] ,
		"quote-props" : [
			"error" ,
			"as-needed" ,
			{
				"keywords"    : true ,
				"numbers"     : true ,
				"unnecessary" : false ,
			} ,
		] ,
		"quotes" : [
			"off" ,
		] ,
		"radix" : [
			"error" ,
			"always" ,
		] ,
		"react/boolean-prop-naming" : [
			"error" ,
			{
				"validateNested" : true ,
			} ,
		] ,
		"react/button-has-type" : [
			"error" ,
			{
				"button" : true ,
				"reset"  : true ,
				"submit" : true ,
			} ,
		] ,
		"react/default-props-match-prop-types" : [
			"error" ,
			{
				"allowRequiredDefaults" : false ,
			} ,
		] ,
		"react/destructuring-assignment" : [
			"error" ,
			"always" ,
		] ,
		"react/display-name" : [
			"error" ,
			{
				"ignoreTranspilerName" : false ,
			} ,
		] ,
		"react/forbid-component-props" : [
			"error" ,
		] ,
		"react/forbid-dom-props" : [
			"error" ,
		] ,
		"react/forbid-elements" : [
			"error" ,
		] ,
		"react/forbid-foreign-prop-types" : [
			"error" ,
		] ,
		"react/forbid-prop-types" : [
			"error" ,
			{
				"checkChildContextTypes" : true ,
				"checkContextTypes"      : true ,
			} ,
		] ,
		"react/function-component-definition" : [
			"error" ,
			{
				"namedComponents"   : "arrow-function" ,
				"unnamedComponents" : "arrow-function" ,
			} ,
		] ,
		"react/jsx-boolean-value" : [
			"error" ,
		] ,
		"react/jsx-child-element-spacing" : [
			"error" ,
		] ,
		"react/jsx-closing-bracket-location" : [
			"error" ,
			{
				"nonEmpty"    : "tag-aligned" ,
				"selfClosing" : "tag-aligned" ,
			} ,
		] ,
		"react/jsx-closing-tag-location" : [
			"error" ,
		] ,
		"react/jsx-curly-brace-presence" : [
			"error" ,
			{
				"children" : "always" ,
				"props"    : "always" ,
			} ,
		] ,
		"react/jsx-curly-newline" : [
			"error" ,
			{
				"multiline"  : "require" ,
				"singleline" : "require" ,
			} ,
		] ,
		"react/jsx-curly-spacing" : [
			"error" ,
			{
				"children" : true ,
				"when"     : "always" ,
			} ,
		] ,
		"react/jsx-equals-spacing" : [
			"error" ,
			"always" ,
		] ,
		"react/jsx-filename-extension" : [
			"error" ,
			{
				"allow"      : "as-needed" ,
				"extensions" : [
					".jsx" ,
					".tsx" ,
				] ,
			} ,
		] ,
		"react/jsx-first-prop-new-line" : [
			"error" ,
			"always" ,
		] ,
		"react/jsx-fragments" : [
			"error" ,
			"element" ,
		] ,
		"react/jsx-handler-names" : [
			"error" ,
			{
				"checkInlineFunction" : true ,
				"checkLocalVariables" : true ,
			} ,
		] ,
		"react/jsx-indent" : [
			"error" ,
			"tab" ,
			{
				"checkAttributes"          : false ,
				"indentLogicalExpressions" : true ,
			} ,
		] ,
		"react/jsx-indent-props" : [
			"error" ,
			"tab" ,
		] ,
		"react/jsx-key" : [
			"error" ,
			{
				"checkFragmentShorthand" : true ,
			} ,
		] ,
		"react/jsx-max-depth" : [
			"error" ,
			{
				"max" : 4 ,
			} ,
		] ,
		"react/jsx-max-props-per-line" : [
			"error" ,
			{
				"maximum" : 1 ,
				"when"    : "always" ,
			} ,
		] ,
		"react/jsx-no-bind" : [
			"error" ,
			{
				"allowArrowFunctions" : false ,
				"allowBind"           : false ,
				"allowFunctions"      : false ,
				"ignoreDOMComponents" : false ,
				"ignoreRefs"          : false ,
			} ,
		] ,
		"react/jsx-no-comment-textnodes" : [
			"error" ,
		] ,
		"react/jsx-no-duplicate-props" : [
			"error" ,
			{
				"ignoreCase" : false ,
			} ,
		] ,
		"react/jsx-no-literals" : [
			"error" ,
			{
				"ignoreProps"        : false ,
				"noAttributeStrings" : true ,
				"noStrings"          : true ,
			} ,
		] ,
		"react/jsx-no-script-url" : [
			"error" ,
		] ,
		"react/jsx-no-target-blank" : [
			"error" ,
			{
				"allowReferrer"       : false ,
				"enforceDynamicLinks" : "always" ,
			} ,
		] ,
		"react/jsx-no-undef" : [
			"error" ,
			{
				"allowGlobals" : false ,
			} ,
		] ,
		"react/jsx-no-useless-fragment" : [
			"error" ,
		] ,
		"react/jsx-one-expression-per-line" : [
			"error" ,
			{
				"allow" : "none" ,
			} ,
		] ,
		"react/jsx-pascal-case" : [
			"error" ,
			{
				"allowAllCaps" : false ,
			} ,
		] ,
		"react/jsx-props-no-multi-spaces" : [
			"error" ,
		] ,
		"react/jsx-props-no-spreading" : [
			"error" ,
			{
				"custom"         : "enforce" ,
				"explicitSpread" : "enforce" ,
				"html"           : "enforce" ,
			} ,
		] ,
		"react/jsx-sort-default-props" : [
			"error" ,
			{
				"ignoreCase" : false ,
			} ,
		] ,
		"react/jsx-sort-props" : [
			"error" ,
			{
				"callbacksLast"        : true ,
				"ignoreCase"           : false ,
				"noSortAlphabetically" : false ,
				"reservedFirst"        : true ,
				"shorthandFirst"       : true ,
				"shorthandLast"        : false ,
			} ,
		] ,
		"react/jsx-space-before-closing" : [
			"off" ,
		] ,
		"react/jsx-tag-spacing" : [
			"error" ,
			{
				"afterOpening"      : "always" ,
				"beforeClosing"     : "always" ,
				"beforeSelfClosing" : "always" ,
				"closingSlash"      : "never" ,
			} ,
		] ,
		"react/jsx-uses-react" : [
			"error" ,
		] ,
		"react/jsx-uses-vars" : [
			"error" ,
		] ,
		"react/jsx-wrap-multilines" : [
			"error" ,
			{
				"arrow"       : "parens-new-line" ,
				"assignment"  : "parens-new-line" ,
				"condition"   : "parens-new-line" ,
				"declaration" : "parens-new-line" ,
				"logical"     : "parens-new-line" ,
				"prop"        : "parens-new-line" ,
				"return"      : "parens-new-line" ,
			} ,
		] ,
		"react/no-access-state-in-setstate" : [
			"error" ,
		] ,
		"react/no-adjacent-inline-elements" : [
			"error" ,
		] ,
		"react/no-array-index-key" : [
			"error" ,
		] ,
		"react/no-children-prop" : [
			"error" ,
		] ,
		"react/no-danger" : [
			"error" ,
		] ,
		"react/no-danger-with-children" : [
			"error" ,
		] ,
		"react/no-deprecated" : [
			"error" ,
		] ,
		"react/no-did-mount-set-state" : [
			"error" ,
			"disallow-in-func" ,
		] ,
		"react/no-did-update-set-state" : [
			"error" ,
			"disallow-in-func" ,
		] ,
		"react/no-direct-mutation-state" : [
			"error" ,
		] ,
		"react/no-find-dom-node" : [
			"error" ,
		] ,
		"react/no-is-mounted" : [
			"error" ,
		] ,
		"react/no-multi-comp" : [
			"error" ,
			{
				"ignoreStateless" : false ,
			} ,
		] ,
		"react/no-redundant-should-component-update" : [
			"error" ,
		] ,
		"react/no-render-return-value" : [
			"error" ,
		] ,
		"react/no-set-state" : [
			"error" ,
		] ,
		"react/no-string-refs" : [
			"error" ,
			{
				"noTemplateLiterals" : true ,
			} ,
		] ,
		"react/no-this-in-sfc" : [
			"error" ,
		] ,
		"react/no-typos" : [
			"error" ,
		] ,
		"react/no-unescaped-entities" : [
			"error" ,
		] ,
		"react/no-unknown-property" : [
			"error" ,
		] ,
		"react/no-unsafe" : [
			"error" ,
			{
				"checkAliases" : true ,
			} ,
		] ,
		"react/no-unused-prop-types" : [
			"error" ,
			{
				"skipShapeProps" : false ,
			} ,
		] ,
		"react/no-unused-state" : [
			"error" ,
		] ,
		"react/no-will-update-set-state" : [
			"error" ,
			"disallow-in-func" ,
		] ,
		"react/prefer-es6-class" : [
			"error" ,
			"always" ,
		] ,
		"react/prefer-read-only-props" : [
			"error" ,
		] ,
		"react/prefer-stateless-function" : [
			"error" ,
			{
				"ignorePureComponents" : false ,
			} ,
		] ,
		"react/prop-types" : [
			"error" ,
			{
				"skipUndeclared" : false ,
			} ,
		] ,
		"react/react-in-jsx-scope" : [
			"error" ,
		] ,
		"react/require-default-props" : [
			"error" ,
			{
				"forbidDefaultForRequired"   : false ,
				"ignoreFunctionalComponents" : false ,
			} ,
		] ,
		"react/require-optimization" : [
			"error" ,
		] ,
		"react/require-render-return" : [
			"error" ,
		] ,
		"react/self-closing-comp" : [
			"error" ,
			{
				"component" : true ,
				"html"      : true ,
			} ,
		] ,
		"react/sort-comp" : [
			"error" ,
			{
				"groups" : {
					"lifecycle" : [
						"displayName" ,
						"propTypes" ,
						"contextTypes" ,
						"childContextTypes" ,
						"mixins" ,
						"statics" ,
						"defaultProps" ,
						"constructor" ,
						"getDefaultProps" ,
						"state" ,
						"getInitialState" ,
						"getChildContext" ,
						"getDerivedStateFromProps" ,
						"componentWillMount" ,
						"UNSAFE_componentWillMount" ,
						"componentDidMount" ,
						"componentWillReceiveProps" ,
						"UNSAFE_componentWillReceiveProps" ,
						"shouldComponentUpdate" ,
						"componentWillUpdate" ,
						"UNSAFE_componentWillUpdate" ,
						"getSnapshotBeforeUpdate" ,
						"componentDidUpdate" ,
						"componentDidCatch" ,
						"componentWillUnmount" ,
					] ,
				} ,
				"order" : [
					"type-annotations" ,
					"static-variables" ,
					"instance-variables" ,
					"static-methods" ,
					"instance-methods" ,
					"getters" ,
					"setters" ,
					"lifecycle" ,
					"everything-else" ,
					"render" ,
				] ,
			} ,
		] ,
		"react/sort-prop-types" : [
			"error" ,
			{
				"callbacksLast"        : false ,
				"ignoreCase"           : true ,
				"noSortAlphabetically" : false ,
				"requiredFirst"        : true ,
				"sortShapeProp"        : true ,
			} ,
		] ,
		"react/state-in-constructor" : [
			"error" ,
			"always" ,
		] ,
		"react/static-property-placement" : [
			"error" ,
			"static public field" ,
			{
				"childContextTypes" : "static public field" ,
				"contextType"       : "static public field" ,
				"contextTypes"      : "static public field" ,
				"displayName"       : "static public field" ,
			} ,
		] ,
		"react/style-prop-object" : [
			"error" ,
		] ,
		"react/void-dom-elements-no-children" : [
			"error" ,
		] ,
		"react-hooks/exhaustive-deps" : [
			"error" ,
		] ,
		"react-hooks/rules-of-hooks" : [
			"error" ,
		] ,
		"require-atomic-updates" : [
			"error" ,
		] ,
		"require-await" : [
			"off" ,
		] ,
		"require-jsdoc" : [
			"off" ,
		] ,
		"require-unicode-regexp" : [
			"error" ,
		] ,
		"require-yield" : [
			"error" ,
		] ,
		"rest-spread-spacing" : [
			"error" ,
			"never" ,
		] ,
		"semi" : [
			"off" ,
		] ,
		"semi-spacing" : [
			"error" ,
			{
				"after"  : true ,
				"before" : true ,
			} ,
		] ,
		"semi-style" : [
			"error" ,
			"last" ,
		] ,
		"sonarjs/cognitive-complexity" : [
			"error" ,
			32 ,
		] ,
		"sonarjs/max-switch-cases" : [
			"error" ,
			16 ,
		] ,
		"sonarjs/no-all-duplicated-branches" : [
			"error" ,
		] ,
		"sonarjs/no-collapsible-if" : [
			"error" ,
		] ,
		"sonarjs/no-collection-size-mischeck" : [
			"error" ,
		] ,
		"sonarjs/no-duplicate-string" : [
			"error" ,
			2 ,
		] ,
		"sonarjs/no-duplicated-branches" : [
			"error" ,
		] ,
		"sonarjs/no-element-overwrite" : [
			"error" ,
		] ,
		"sonarjs/no-extra-arguments" : [
			"error" ,
		] ,
		"sonarjs/no-identical-conditions" : [
			"error" ,
		] ,
		"sonarjs/no-identical-expressions" : [
			"error" ,
		] ,
		"sonarjs/no-identical-functions" : [
			"error" ,
		] ,
		"sonarjs/no-inverted-boolean-check" : [
			"error" ,
		] ,
		"sonarjs/no-one-iteration-loop" : [
			"error" ,
		] ,
		"sonarjs/no-redundant-boolean" : [
			"error" ,
		] ,
		"sonarjs/no-redundant-jump" : [
			"error" ,
		] ,
		"sonarjs/no-same-line-conditional" : [
			"error" ,
		] ,
		"sonarjs/no-small-switch" : [
			"error" ,
		] ,
		"sonarjs/no-unused-collection" : [
			"error" ,
		] ,
		"sonarjs/no-use-of-empty-return-value" : [
			"error" ,
		] ,
		"sonarjs/no-useless-catch" : [
			"error" ,
		] ,
		"sonarjs/prefer-immediate-return" : [
			"error" ,
		] ,
		"sonarjs/prefer-object-literal" : [
			"error" ,
		] ,
		"sonarjs/prefer-single-boolean-return" : [
			"error" ,
		] ,
		"sonarjs/prefer-while" : [
			"error" ,
		] ,
		"sort-imports" : [
			"error" ,
			{
				"allowSeparatedGroups"  : true ,
				"ignoreCase"            : false ,
				"ignoreDeclarationSort" : false ,
				"ignoreMemberSort"      : false ,
				"memberSyntaxSortOrder" : [
					"none" ,
					"all" ,
					"multiple" ,
					"single" ,
				] ,
			} ,
		] ,
		"sort-keys" : [
			"error" ,
			"asc" ,
			{
				"caseSensitive" : true ,
				"minKeys"       : 2 ,
				"natural"       : true ,
			} ,
		] ,
		"sort-vars" : [
			"error" ,
			{
				"ignoreCase" : false ,
			} ,
		] ,
		"space-after-keywords" : [
			"off" ,
		] ,
		"space-before-blocks" : [
			"error" ,
			{
				"classes"   : "always" ,
				"functions" : "always" ,
				"keywords"  : "always" ,
			} ,
		] ,
		"space-before-function-paren" : [
			"off" ,
		] ,
		"space-before-keywords" : [
			"off" ,
		] ,
		"space-in-parens" : [
			"error" ,
			"always" ,
		] ,
		"space-infix-ops" : [
			"off" ,
		] ,
		"space-return-throw-case" : [
			"off" ,
		] ,
		"space-unary-ops" : [
			"error" ,
			{
				"nonwords" : true ,
				"words"    : true ,
			} ,
		] ,
		"spaced-comment" : [
			"error" ,
			"always" ,
			{
				"block" : {
					"balanced" : true ,
				} ,
				"markers" : [
					"/" ,
				] ,
			} ,
		] ,
		"strict" : [
			"error" ,
			"safe" ,
		] ,
		"switch-colon-spacing" : [
			"error" ,
			{
				"after"  : true ,
				"before" : true ,
			} ,
		] ,
		"symbol-description" : [
			"error" ,
		] ,
		"template-curly-spacing" : [
			"error" ,
			"always" ,
		] ,
		"template-tag-spacing" : [
			"error" ,
			"always" ,
		] ,
		"unicode-bom" : [
			"error" ,
			"never" ,
		] ,
		"unicorn/better-regex" : [
			"error" ,
			{
				"sortCharacterClasses" : true ,
			} ,
		] ,
		"unicorn/catch-error-name" : [
			"error" ,
			{
				"name" : "error" ,
			} ,
		] ,
		"unicorn/consistent-function-scoping" : [
			"error" ,
			{
				"checkArrowFunctions" : true ,
			} ,
		] ,
		"unicorn/custom-error-definition" : [
			"error" ,
		] ,
		"unicorn/empty-brace-spaces" : [
			"error" ,
		] ,
		"unicorn/error-message" : [
			"error" ,
		] ,
		"unicorn/escape-case" : [
			"error" ,
		] ,
		"unicorn/expiring-todo-comments" : [
			"error" ,
			{
				"allowWarningComments"      : true ,
				"ignoreDatesOnPullRequests" : true ,
				"terms"                     : [
					"fixme" ,
					"todo" ,
					"xxx" ,
				] ,
			} ,
		] ,
		"unicorn/explicit-length-check" : [
			"error" ,
			{
				"non-zero" : "not-equal" ,
			} ,
		] ,
		"unicorn/filename-case" : [
			"error" ,
			{
				"cases" : {
					"camelCase"  : false ,
					"kebabCase"  : true ,
					"pascalCase" : false ,
					"snakeCase"  : false ,
				} ,
			} ,
		] ,
		"unicorn/import-index" : [
			"error" ,
			{
				"ignoreImports" : false ,
			} ,
		] ,
		"unicorn/import-style" : [
			"error" ,
			{
				"checkDynamicImport"  : true ,
				"checkExportFrom"     : true ,
				"checkImport"         : true ,
				"checkRequire"        : true ,
				"extendDefaultStyles" : false ,
				"styles"              : {
					"chalk" : {
						"default"    : true ,
						"named"      : false ,
						"namespace"  : false ,
						"unassigned" : false ,
					} ,
					"path" : {
						"default"    : true ,
						"named"      : false ,
						"namespace"  : false ,
						"unassigned" : false ,
					} ,
					"util" : {
						"default"    : false ,
						"named"      : true ,
						"namespace"  : false ,
						"unassigned" : false ,
					} ,
				} ,
			} ,
		] ,
		"unicorn/new-for-builtins" : [
			"error" ,
		] ,
		"unicorn/no-abusive-eslint-disable" : [
			"error" ,
		] ,
		"unicorn/no-array-instanceof" : [
			"error" ,
		] ,
		"unicorn/no-console-spaces" : [
			"error" ,
		] ,
		"unicorn/no-fn-reference-in-iterator" : [
			"error" ,
		] ,
		"unicorn/no-for-loop" : [
			"error" ,
		] ,
		"unicorn/no-hex-escape" : [
			"error" ,
		] ,
		"unicorn/no-keyword-prefix" : [
			"error" ,
			{
				"blacklist" : [
					"new" ,
					"for" ,
				] ,
				"checkProperties" : true ,
				"onlyCamelCase"   : true ,
			} ,
		] ,
		"unicorn/no-lonely-if" : [
			"error" ,
		] ,
		"unicorn/no-nested-ternary" : [
			"error" ,
			{
				"checkStrictEquality" : true ,
			} ,
		] ,
		"unicorn/no-new-buffer" : [
			"error" ,
		] ,
		"unicorn/no-null" : [
			"error" ,
			{
				"checkStrictEquality" : false ,
			} ,
		] ,
		"unicorn/no-object-as-default-parameter" : [
			"error" ,
		] ,
		"unicorn/no-process-exit" : [
			"error" ,
		] ,
		"unicorn/no-reduce" : [
			"error" ,
		] ,
		"unicorn/no-unreadable-array-destructuring" : [
			"error" ,
		] ,
		"unicorn/no-unsafe-regex" : [
			"error" ,
		] ,
		"unicorn/no-unused-properties" : [
			"error" ,
		] ,
		"unicorn/no-useless-undefined" : [
			"error" ,
			{
				"checkArguments" : true ,
			} ,
		] ,
		"unicorn/no-zero-fractions" : [
			"error" ,
		] ,
		"unicorn/number-literal-case" : [
			"error" ,
		] ,
		"unicorn/numeric-separators-style" : [
			"error" ,
			{
				"binary" : {
					"groupLength"   : 4 ,
					"minimumDigits" : 0 ,
				} ,
				"hexadecimal" : {
					"groupLength"   : 2 ,
					"minimumDigits" : 0 ,
				} ,
				"number" : {
					"groupLength"   : 3 ,
					"minimumDigits" : 0 ,
				} ,
				"octal" : {
					"groupLength"   : 4 ,
					"minimumDigits" : 0 ,
				} ,
			} ,
		] ,
		"unicorn/prefer-add-event-listener" : [
			"error" ,
		] ,
		"unicorn/prefer-array-find" : [
			"error" ,
		] ,
		"unicorn/prefer-dataset" : [
			"error" ,
		] ,
		"unicorn/prefer-date-now" : [
			"error" ,
		] ,
		"unicorn/prefer-event-key" : [
			"error" ,
		] ,
		"unicorn/prefer-exponentiation-operator" : [
			"off" ,
		] ,
		"unicorn/prefer-flat-map" : [
			"error" ,
		] ,
		"unicorn/prefer-includes" : [
			"error" ,
		] ,
		"unicorn/prefer-math-trunc" : [
			"error" ,
		] ,
		"unicorn/prefer-modern-dom-apis" : [
			"error" ,
		] ,
		"unicorn/prefer-negative-index" : [
			"error" ,
		] ,
		"unicorn/prefer-node-append" : [
			"error" ,
		] ,
		"unicorn/prefer-node-remove" : [
			"error" ,
		] ,
		"unicorn/prefer-number-properties" : [
			"error" ,
			{
				"checkInfinity" : true ,
			} ,
		] ,
		"unicorn/prefer-optional-catch-binding" : [
			"error" ,
		] ,
		"unicorn/prefer-query-selector" : [
			"error" ,
		] ,
		"unicorn/prefer-reflect-apply" : [
			"error" ,
		] ,
		"unicorn/prefer-replace-all" : [
			"error" ,
		] ,
		"unicorn/prefer-set-has" : [
			"error" ,
		] ,
		"unicorn/prefer-spread" : [
			"error" ,
		] ,
		"unicorn/prefer-starts-ends-with" : [
			"error" ,
		] ,
		"unicorn/prefer-string-slice" : [
			"error" ,
		] ,
		"unicorn/prefer-ternary" : [
			"error" ,
		] ,
		"unicorn/prefer-text-content" : [
			"error" ,
		] ,
		"unicorn/prefer-trim-start-end" : [
			"error" ,
		] ,
		"unicorn/prefer-type-error" : [
			"error" ,
		] ,
		"unicorn/prevent-abbreviations" : [
			"error" ,
			{
				"checkDefaultAndNamespaceImports" : true ,
				"checkFilenames"                  : true ,
				"checkProperties"                 : true ,
				"checkShorthandImports"           : true ,
				"checkShorthandProperties"        : true ,
				"checkVariables"                  : true ,
				"extendDefaultReplacements"       : true ,
				"extendDefaultWhitelist"          : true ,
			} ,
		] ,
		"unicorn/regex-shorthand" : [
			"off" ,
		] ,
		"unicorn/string-content" : [
			"error" ,
		] ,
		"unicorn/throw-new-error" : [
			"error" ,
		] ,
		"use-isnan" : [
			"error" ,
			{
				"enforceForIndexOf"    : true ,
				"enforceForSwitchCase" : true ,
			} ,
		] ,
		"valid-jsdoc" : [
			"off" ,
		] ,
		"valid-typeof" : [
			"error" ,
			{
				"requireStringLiterals" : true ,
			} ,
		] ,
		"vars-on-top" : [
			"error" ,
		] ,
		"woke/all" : [
			"warn" ,
		] ,
		"wrap-iife" : [
			"error" ,
			"inside" ,
			{
				"functionPrototypeMethods" : true ,
			} ,
		] ,
		"wrap-regex" : [
			"error" ,
		] ,
		"yield-star-spacing" : [
			"error" ,
			{
				"after"  : true ,
				"before" : true ,
			} ,
		] ,
		"yoda" : [
			"error" ,
			"never" ,
			{
				"exceptRange"  : true ,
				"onlyEquality" : false ,
			} ,
		] ,
	} ,
	"settings" : {
		"linkComponents" : [
			"Hyperlink" ,
			{
				"linkAttribute" : "to" ,
				"name"          : "Link" ,
			} ,
		] ,
		"propWrapperFunctions" : [
			"forbidExtraProps" ,
			{
				"object"   : "Object" ,
				"property" : "freeze" ,
			} ,
			{
				"property" : "myFavoriteWrapper" ,
			} ,
		] ,
		"react" : {
			"createClass" : "createReactClass" ,
			"flowVersion" : "0.53" ,
			"fragment"    : "Fragment" ,
			"pragma"      : "React" ,
			"version"     : "detect" ,
		} ,
	} ,
} ;

