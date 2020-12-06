import "../styles/globals.scss" ;

import type {
    AppProps ,
} from "next/dist/next-server/lib/router/router" ;

import React from "react" ;

const MyApp = function MyApp (
    {
        Component ,
        pageProps ,
    }: AppProps ,
// eslint-disable-next-line no-undef
): JSX.Element {

    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Component {...pageProps} /> ;

} ;

export default MyApp ;
