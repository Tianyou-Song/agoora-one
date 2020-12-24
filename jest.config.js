/* eslint-disable import/no-commonjs */
/* eslint-disable import/unambiguous */
/* eslint-disable sonarjs/no-duplicate-string */

const jestConfig = {
	"moduleFileExtensions" : [
		"ts" ,
		"tsx" ,
		"js" ,
		"json" ,
		"jsx" ,
	] ,
	"roots" : [
		"<rootDir>" ,
	] ,
	"testPathIgnorePatterns" : [
		"<rootDir>[/\\\\](node_modules|.next)[/\\\\]" ,
	] ,
	"transform" : {
		"\\.graphql$" : [
			"graphql-let/jestTransformer" ,
			{
				"subsequentTransformer" : "babel-jest" ,
			} ,
		] ,
		"^.+\\.(ts|tsx)$" : "babel-jest" ,
	} ,
	"transformIgnorePatterns" : [
		"[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$" ,
	] ,
} ;

module.exports = jestConfig ;
