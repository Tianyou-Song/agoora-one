import type {
	NormalizedCacheObject ,
} from "@apollo/client" ;

import {
	ApolloProvider ,
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
	} = pageProperties as {
		initialApolloState : NormalizedCacheObject ;
	} ;

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

