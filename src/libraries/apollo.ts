import type {
	IncomingMessage , ServerResponse ,
} from "http" ;

import {
	useMemo ,
} from "react" ;

import type {
	ApolloCache ,
	NormalizedCacheObject ,
} from "@apollo/client" ;

import {
	ApolloClient ,
	InMemoryCache ,
} from "@apollo/client" ;

let apolloClient : ApolloClient<NormalizedCacheObject> | undefined ;

export interface ResolverContext {
	req ?: IncomingMessage;
	res ?: ServerResponse;
}

function createIsomorphLink (
	context : ResolverContext = {} ,
) {

	if ( typeof window === "undefined" ) {

		const {
			SchemaLink ,
		} = require(
			"@apollo/client/link/schema" ,
		) ;

		const {
			schema ,
		} = require(
			"./schema" ,
		) ;

		return new SchemaLink(
			{
				schema ,
				context ,
			} ,
		) ;

	}

	const {
		HttpLink ,
	} = require(
		"@apollo/client" ,
	) ;

	return new HttpLink(
		{
			uri         : "/api/graphql" ,
			credentials : "same-origin" ,
		} ,
	) ;

}

function createApolloClient (
	context ?: ResolverContext ,
) {

	return new ApolloClient(
		{
			ssrMode : typeof window === "undefined" ,
			link    : createIsomorphLink(
				context ,
			) ,
			cache   : new InMemoryCache() ,
		} ,
	) ;

}

export function initializeApollo (
	initialState : ApolloCache<NormalizedCacheObject> ,

	/*
	 * Pages with Next.js data fetching methods, like `getStaticProps`, can send
	 * a custom context which will be used by `SchemaLink` to server render pages
	 */

	context ?: ResolverContext ,
) {

	const _apolloClient = apolloClient ?? createApolloClient(
		context ,
	) ;

	/*
	 * If your page has Next.js data fetching methods that use Apollo Client, the initial state
	 * Get hydrated here
	 */

	if ( initialState ) {

		_apolloClient.cache.restore(
			initialState ,
		) ;

	}

	// For SSG and SSR always create a new Apollo Client
	if ( typeof window === "undefined" ) {

		return _apolloClient ;

	}

	// Create the Apollo Client once in the client
	if ( ! apolloClient ) {

		apolloClient = _apolloClient ;

	}

	return _apolloClient ;

}

export function useApollo (
	initialState : ApolloCache<NormalizedCacheObject> ,
) {

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

}