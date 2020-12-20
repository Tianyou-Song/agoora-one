import path from "path" ;

import {
	DocumentNode ,
	GraphQLSchema , Source ,
} from "graphql" ;

import {
	makeExecutableSchema ,
} from "@graphql-tools/schema" ;

import {
	loadFilesSync ,
} from "@graphql-tools/load-files" ;

import {
	mergeTypeDefs ,
} from "@graphql-tools/merge" ;

import graphQLLetConfig from "../.graphql-let.yml" ;

import resolvers from "./resolvers" ;

const loadedFiles : string | Source | DocumentNode | GraphQLSchema[] = loadFilesSync(
	path.join(
		process.cwd() ,
		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
		graphQLLetConfig.schema ,
	) ,
) ;

const typeDefs : DocumentNode = mergeTypeDefs(
	loadedFiles ,
) ;

export const schema : GraphQLSchema = makeExecutableSchema(
	{
		resolvers ,
		typeDefs ,
	} ,
) ;

