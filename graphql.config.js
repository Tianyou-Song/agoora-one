/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable unicorn/prevent-abbreviations */
/* eslint-disable sonarjs/no-duplicate-string */
module.exports = {
	projects : {
		app : {
			documents : [
				"**/*.{graphql,js,ts,jsx,tsx}" ,
				"my/fragments.graphql" ,
			] ,
			extensions : {
				endpoints : {
					"default" : {
						headers : {
							Authorization : `Bearer ${ process.env.API_TOKEN }` ,
						} ,
						url : "http://localhost:8000" ,
					} ,
				} ,
			} ,
			schema : [
				"src/schema.graphql" ,
				"directives.graphql" ,
			] ,
		} ,
		db : {
			documents : [
				"src/db/**/*.graphql" ,
				"my/fragments.graphql" ,
			] ,
			extensions : {
				codegen : [
					{
						generator : "graphql-binding" ,
						language  : "typescript" ,
						output    : {
							binding : "src/generated/db.ts" ,
						} ,
					} ,
				] ,
				endpoints : {
					"default" : {
						headers : {
							Authorization : `Bearer ${ process.env.API_TOKEN }` ,
						} ,
						url : "http://localhost:8080" ,
					} ,
				} ,
			} ,
			schema : "src/generated/db.graphql" ,
		} ,
	} ,
} ;
