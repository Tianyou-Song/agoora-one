/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/typedef */

const jsonImporter = require(
	"node-sass-json-importer" ,
) ;

module.exports = {
	"sassOptions" : {
		"importer" : jsonImporter() ,
	} ,

	webpack (
		config , options ,
	) {

		config.module.rules.push(
			{
				exclude : /node_modules/u ,
				test    : /\.graphql$/u ,
				use     : [
					options.defaultLoaders.babel ,
					{
						loader : "graphql-let/loader" ,
					} ,
				] ,
			} ,
		) ;

		config.module.rules.push(
			{
				exclude : /node_modules/u ,
				test    : /\.graphqls$/u ,
				use     : [
					"graphql-let/schema/loader" ,
				] ,
			} ,
		) ;

		config.module.rules.push(
			{
				test : /\.ya?ml$/u ,
				type : "json" ,
				use  : "yaml-loader" ,
			} ,
		) ;

		return config ;

	} ,
} ;
