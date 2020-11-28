import "../styles/globals.css";
import { AppProps } from "next/dist/next-server/lib/router/router";
import React from "react";

const MyApp = ({ Component, pageProps } : AppProps) : JSX.Element => {
	// eslint-disable-next-line react/jsx-props-no-spreading
	return <Component {...pageProps} />;
};

export default MyApp;
