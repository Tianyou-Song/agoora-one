import {
	IncomingMessage ,
	ServerResponse ,
} from "http" ;

import {
	useMemo ,
} from "react" ;

import {
	ApolloClient ,
	HttpLink ,
	InMemoryCache ,
	NormalizedCacheObject ,
} from "@apollo/client" ;

import {
	SchemaLink ,
} from "@apollo/client/link/schema" ;

import {
	schema ,
} from "./schema" ;

let apolloClient : ApolloClient<NormalizedCacheObject> | undefined ;

export interface ResolverContext {
	readonly req ?: IncomingMessage;
	readonly res ?: ServerResponse;
}

export const createIsomorphLink = (
	context : ResolverContext = {} ,
) : HttpLink | SchemaLink => {

	if ( typeof window === "undefined" ) {

		return new SchemaLink(
			{
				context ,
				schema ,
			} ,
		) ;

	}

	return new HttpLink(
		{
			credentials : "same-origin" ,
			uri         : "/api/graphql" ,
		} ,
	) ;

} ;

export const createApolloClient = (
	context ?: ResolverContext ,
) : ApolloClient<NormalizedCacheObject> => {

	return new ApolloClient(
		{
			cache   : new InMemoryCache() ,
			link    : createIsomorphLink(
				context ,
			) ,
			ssrMode : typeof window === "undefined" ,
		} ,
	) ;

} ;

export const initializeApollo = (
	initialState ?: NormalizedCacheObject ,

	/*
	 * Pages with Next.js data fetching methods, like `getStaticProps`, can send
	 * a custom context which will be used by `SchemaLink` to server render pages
	 */

	context ?: ResolverContext ,
) : ApolloClient<NormalizedCacheObject> => {

	const createdApolloClient : ApolloClient<NormalizedCacheObject> = apolloClient ?? createApolloClient(
		context ,
	) ;

	/*
	 * If your page has Next.js data fetching methods that use Apollo Client, the initial state
	 * Get hydrated here
	 */

	if ( initialState ) {

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

export const useApollo = (
	initialState ?: NormalizedCacheObject ,
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

