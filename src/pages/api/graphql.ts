import {
	ApolloServer ,
} from "apollo-server-micro" ;

import {
	schema ,
} from "../../libraries/schema" ;

const apolloServer = new ApolloServer(
	{
		schema ,
	} ,
) ;

const config = {
	"api" : {
		"bodyParser" : false ,
	} ,
} ;

const apolloServerHandler = apolloServer.createHandler(
	{
		"path" : "/api/graphql" ,
	} ,
) ;

export {
	config ,
} ;

export default apolloServerHandler ;
