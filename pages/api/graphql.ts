import {
	ApolloServer ,
} from "apollo-server-micro" ;

import {
	schema ,
} from "../../lib/schema" ;

const apolloServer : ApolloServer = new ApolloServer(
	{
		schema ,
	} ,
) ;

export const config : Record<string , unknown> = {
	api : {
		bodyParser : false ,
	} ,
} ;

export default apolloServer.createHandler(
	{
		path : "/api/graphql" ,
	} ,
) ;
