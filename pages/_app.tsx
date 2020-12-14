/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/prefer-readonly-parameter-types */
import "../styles/globals.scss" ;

import type {
	AppProps as AppProperties ,
} from "next/dist/next-server/lib/router/router" ;

import React from "react" ;

const myApp = (
	{
		Component ,
		pageProps : pageProperties ,
	} : AppProperties ,
) : JSX.Element => {

	return (
		< Component
			{ ...pageProperties }
		/>
	) ;

} ;

export default myApp ;
