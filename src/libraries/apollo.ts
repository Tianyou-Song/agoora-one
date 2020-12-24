import type {
	IncomingMessage ,
	ServerResponse ,
} from "http" ;

import {
	ApolloClient ,
	HttpLink ,
	InMemoryCache ,
} from "@apollo/client" ;

import type {
	NormalizedCacheObject ,
} from "@apollo/client" ;

import {
	SchemaLink ,
} from "@apollo/client/link/schema" ;

import {
	useMemo ,
} from "react" ;

import {
	schema ,
} from  "./schema" ;

let apolloClient : ApolloClient<NormalizedCacheObject> | undefined ;

interface ResolverContext {
	req ?: IncomingMessage;
	res ?: ServerResponse;
}

const createIsomorphLink = (
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
			"cache" : new InMemoryCache() ,
			"link"  : createIsomorphLink(
				context ,
			) ,
			"ssrMode" : typeof window === "undefined" ,
		} ,
	) ;

} ;

const initializeApollo = (
	initialState ? : NormalizedCacheObject ,
	context ? : ResolverContext ,
) : ApolloClient<NormalizedCacheObject> => {

	const apolloClientToUse = apolloClient ?? createApolloClient(
		context ,
	) ;

	/*
	 * If your page has Next.js data fetching methods that use Apollo Client, the initial state
	 * Get hydrated here
	 */

	if ( initialState ) {

		apolloClientToUse.cache.restore(
			initialState ,
		) ;

	}

	// For SSG and SSR always create a new Apollo Client
	if ( typeof window === "undefined" ) {

		return apolloClientToUse ;

	}

	// Create the Apollo Client once in the client
	if ( ! apolloClient ) {

		apolloClient = apolloClientToUse ;

	}

	return apolloClientToUse ;

} ;

const useApollo = (
	initialState : NormalizedCacheObject ,
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

export {
	ResolverContext ,
	createApolloClient ,
	createIsomorphLink ,
	initializeApollo ,
	useApollo ,
} ;
