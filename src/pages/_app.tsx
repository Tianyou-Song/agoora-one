import "../styles/globals.scss" ;

import React from "react" ;

import {
	AppProps as AppProperties ,
} from "next/app" ;

import {
	ApolloClient ,
	ApolloProvider ,
	NormalizedCacheObject ,
} from "@apollo/client" ;

import {
	useApollo ,
} from "../lib/apollo" ;

const App = (
	// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
	{
		Component ,
		pageProps:pageProperties ,
	} : Readonly<AppProperties> ,
) : JSX.Element => {

	const apolloClient : ApolloClient<NormalizedCacheObject> = useApollo(
		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
		pageProperties.initialApolloState ,
	) ;

	return (
		< ApolloProvider
			client = {
				apolloClient
			}
		>
			< Component
				// eslint-disable-next-line react/jsx-props-no-spreading
				{
					...pageProperties
				}
			/>
		</ ApolloProvider >
	) ;

} ;

export default App ;

