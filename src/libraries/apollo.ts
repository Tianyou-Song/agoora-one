import type {
	IncomingMessage , ServerResponse ,
} from "http" ;

import type {
	NormalizedCacheObject ,
} from "@apollo/client" ;

import {
	ApolloClient ,
	HttpLink ,
	InMemoryCache ,
} from "@apollo/client" ;

import {
	SchemaLink ,
} from "@apollo/client/link/schema" ;

import type {
	GraphQLSchema ,
} from "graphql" ;

import {
	useMemo ,
} from "react" ;

import {
	isNormalizedCacheObject ,
} from "../utilities/apollo" ;

let apolloClient : ApolloClient<NormalizedCacheObject> | undefined ;

interface ResolverContext {
	req ?: IncomingMessage;
	res ?: ServerResponse;
}

const createIsomorphLink = (
	context : ResolverContext = {} ,
) : HttpLink | SchemaLink => {

	if ( typeof window === "undefined" ) {

		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		const {
			schema ,
		} : {
			"schema" : GraphQLSchema;
			// eslint-disable-next-line @typescript-eslint/no-require-imports , @typescript-eslint/no-var-requires
		} = require(
			"./schema" ,
		) ;

		return new SchemaLink(
			{
				context ,
				schema ,
			} ,
		) ;

	}

	return new HttpLink(
		{
			"credentials" : "same-origin" ,
			"uri"         : "/api/graphql" ,
		} ,
	) ;

} ;

const createApolloClient = (
	context ?: ResolverContext ,
) : ApolloClient<NormalizedCacheObject> => {

	return new ApolloClient(
		{
			"cache"   : new InMemoryCache() ,
			"link"    : createIsomorphLink(
				context ,
			) ,
			"ssrMode" : typeof window === "undefined" ,
		} ,
	) ;

} ;

const initializeApollo = (
	initialState ?: unknown ,

	/*
	 * Pages with Next.js data fetching methods, like `getStaticProps`, can send
	 * a custom context which will be used by `SchemaLink` to server render pages
	 */

	context ?: ResolverContext ,
) : ApolloClient<NormalizedCacheObject> => {

	const createdApolloClient = apolloClient ?? createApolloClient(
		context ,
	) ;

	if ( isNormalizedCacheObject(
		initialState ,
	) ) {

		createdApolloClient.cache.restore(
			initialState ,
		) ;

	}

	// For SSG and SSR always create a new Apollo Client
	if ( typeof window === "undefined" ) {

		return createdApolloClient ;

	}

	// Create the Apollo Client once in the client
	if ( ! apolloClient ) {

		apolloClient = createdApolloClient ;

	}

	return createdApolloClient ;

} ;

const useApollo = (
	initialState : unknown ,
) : ApolloClient<NormalizedCacheObject> => {

	return useMemo(
		() => {

			return initializeApollo(
				initialState ,
			) ;

		} ,
		[
			initialState ,
		] ,
	) ;

} ;

export type {
	ResolverContext ,
} ;

export {
	initializeApollo ,
	useApollo ,
} ;

