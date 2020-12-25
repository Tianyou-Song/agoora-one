const jsonImporter = require(
	"node-sass-json-importer" ,
) ;

const nextConfig = {

	"reactStrictMode" : true ,

	"sassOptions" : {
		"importer" : jsonImporter() ,
	} ,

	webpack (
		config ,
		options ,
	) {

		config.module.rules.push(
			{
				"exclude" : /node_modules/u ,
				"test"    : /\.graphql$/u ,
				"use"     : [
					options.defaultLoaders.babel ,
					{
						"loader" : "graphql-let/loader" ,
					} ,
				] ,
			} ,
		) ;

		config.module.rules.push(
			{
				"exclude" : /node_modules/u ,
				"test"    : /\.graphqls$/u ,
				"use"     : [
					"graphql-let/schema/loader" ,
				] ,
			} ,
		) ;

		config.module.rules.push(
			{
				"test" : /\.ya?ml$/u ,
				"type" : "json" ,
				"use"  : "yaml-loader" ,
			} ,
		) ;

		return config ;

	} ,
} ;

module.exports = nextConfig ;
