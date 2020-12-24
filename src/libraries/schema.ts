import path from "path" ;

import {
	loadFilesSync ,
} from "@graphql-tools/load-files" ;

import {
	mergeTypeDefs ,
} from "@graphql-tools/merge" ;

import {
	makeExecutableSchema ,
} from "@graphql-tools/schema" ;

import graphQLLetConfigYml from "../../.graphql-let.yml" ;

import resolvers from "./resolvers" ;

const graphQLLetConfig = graphQLLetConfigYml as {
	schema : string;
} ;

const loadedFiles = loadFilesSync(
	path.join(
		process.cwd() ,
		graphQLLetConfig.schema ,
	) ,
) ;

const typeDefs = mergeTypeDefs(
	loadedFiles ,
) ;

const schema = makeExecutableSchema(
	{
		resolvers ,
		typeDefs ,
	} ,
) ;

export {
	schema ,
} ;
