const eslintRule = require(
	"./.eslintrc/rules/eslint" ,
) ;

const importRule = require(
	"./.eslintrc/rules/import" ,
) ;

const jsxA11yRule = require(
	"./.eslintrc/rules/jsx-a11y" ,
) ;

const putoutRule = require(
	"./.eslintrc/rules/putout" ,
) ;

const reactRule = require(
	"./.eslintrc/rules/react" ,
) ;

const reactHooksRule = require(
	"./.eslintrc/rules/react-hooks" ,
) ;

const sonarjsRule = require(
	"./.eslintrc/rules/sonarjs" ,
) ;

const typescriptEslintRule = require(
	"./.eslintrc/rules/typescript-eslint" ,
) ;

const unicornRule = require(
	"./.eslintrc/rules/unicorn" ,
) ;

const wokeRule = require(
	"./.eslintrc/rules/woke" ,
) ;

const eslintRunCommand = {
	"env" : {
		"browser" : true ,
		"es2021"  : true ,
		"node"    : true ,
	} ,
	"extends" : [
		"eslint:all" ,
		"plugin:@typescript-eslint/all" ,
		"plugin:import/errors" ,
		"plugin:import/typescript" ,
		"plugin:import/warnings" ,
		"plugin:jsx-a11y/recommended" ,
		"plugin:putout/recommended" ,
		"plugin:react-hooks/recommended" ,
		"plugin:react/all" ,
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
				"**/*.graphql" ,
				"**/*.graphqls" ,
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
				"@graphql-eslint/no-anonymous-operations"                    : "error" ,
				"@graphql-eslint/no-case-insensitive-enum-values-duplicates" : "error" ,
				"@graphql-eslint/no-operation-name-suffix"                   : "error" ,
				"@graphql-eslint/prettier"                                   : "off" ,
				"@graphql-eslint/require-deprecation-reason"                 : "error" ,
				"@graphql-eslint/require-description"                        : [
					"error" ,
					{
						"on" : [
							"ObjectTypeDefinition" ,
							"FieldDefinition" ,
						] ,
					} ,
				] ,
				"@graphql-eslint/require-id-when-available" : "error" ,
				"@graphql-eslint/validate-against-schema"   : "error" ,
				"graphql/template-strings"                  : [
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
		{
			"files" : [
				"./src/libraries/**" ,
			] ,
			"rules" : {
				"import/no-default-export"     : "off" ,
				"import/no-unused-modules"     : "off" ,
			} ,
		} ,
		{
			"files" : [
				"./src/pages/**" ,
			] ,
			"rules" : {
				"import/no-default-export"     : "off" ,
				"import/no-unused-modules"     : "off" ,
				"import/prefer-default-export" : "error" ,
			} ,
		} ,
		{
			"files" : [
				"!./src/**" ,
			] ,
			"rules" : {
				"@typescript-eslint/no-magic-numbers"   : "off" ,
				"@typescript-eslint/no-require-imports" : "off" ,
				"@typescript-eslint/no-var-requires"    : "off" ,
				"import/no-commonjs"                    : "off" ,
				"import/no-internal-modules"            : "off" ,
				"import/unambiguous"                    : "off" ,
				"sonarjs/no-duplicate-string"           : "off" ,
			} ,
		} ,
		{
			"files" : [
				"**/*.js" ,
			] ,
			"rules" : {
				"@typescript-eslint/explicit-function-return-type"  : "off" ,
				"@typescript-eslint/explicit-module-boundary-types" : "off" ,
				"@typescript-eslint/no-unsafe-assignment"           : "off" ,
				"@typescript-eslint/no-unsafe-call"                 : "off" ,
				"@typescript-eslint/no-unsafe-member-access"        : "off" ,
				"@typescript-eslint/no-unsafe-return"               : "off" ,
				"@typescript-eslint/strict-boolean-expressions"     : "off" ,
				"@typescript-eslint/typedef"                        : "off" ,
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
		"import" ,
		"jsx-a11y" ,
		"putout" ,
		"react" ,
		"react-hooks" ,
		"sonarjs" ,
		"unicorn" ,
		"woke" ,
	] ,
	"rules" : {
		...eslintRule ,
		...importRule ,
		...jsxA11yRule ,
		...putoutRule ,
		...reactHooksRule ,
		...reactRule ,
		...sonarjsRule ,
		...typescriptEslintRule ,
		...unicornRule ,
		...wokeRule ,

	} ,
	"settings" : {
		"import/extensions" : [
			".js" ,
			".jsx" ,
			".ts" ,
			".tsx" ,
		] ,
		"import/ignore"  : [
			"node_modules" ,
		] ,
		"import/parsers" : {
			"@typescript-eslint/parser" : [
				".ts" ,
				".tsx" ,
			] ,
		} ,
		"import/resolver" : {
			"node" : {
				"extensions" : [
					".js" ,
					".jsx" ,
					".ts" ,
					".tsx" ,
				] ,
			} ,
		} ,
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

module.exports = eslintRunCommand ;
