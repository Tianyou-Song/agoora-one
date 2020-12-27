import {
	ApolloProvider ,
} from "@apollo/client" ;

import type {
	NormalizedCacheObject ,
} from "@apollo/client" ;

import type {
	NextComponentType ,
	NextPageContext ,
} from "next" ;

import React from "react" ;

import "../styles/globals.scss" ;

import {
	useApollo ,
} from "../libraries/apollo" ;

const App = (
	// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
	{
		Component ,
		"pageProps" : pageProperties ,
	} : {
		Component : NextComponentType<NextPageContext , unknown , unknown> ;
		pageProps : Record<string , unknown> ;
	} ,
) : JSX.Element => {

	const {
		initialApolloState ,
	} : {
		initialApolloState ?: NormalizedCacheObject;
	} = pageProperties ;

	const apolloClient = useApollo(
		initialApolloState ,
	) ;

	return (
		<ApolloProvider
			client = {
				apolloClient
			}
		>
			<Component
				// eslint-disable-next-line react/jsx-props-no-spreading
				{
					...pageProperties
				}
			/>
		</ApolloProvider>
	) ;

} ;

export default App ;

