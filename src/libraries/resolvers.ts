import type {
	ResolverContext ,
} from "./apollo" ;

import type {
	MutationResolvers , QueryResolvers ,
} from "./type-defs.graphqls" ;

const userProfile = {
	"id"     : String(
		// eslint-disable-next-line @typescript-eslint/no-magic-numbers
		1 ,
	) ,
	"name"   : "John Smith" ,
	"status" : "cached" ,
} ;

const Query : Required<QueryResolvers<ResolverContext>> = {
	viewer () {

		return userProfile ;

	} ,
} ;

const Mutation : Required<MutationResolvers<ResolverContext>> = {
	updateName (
		_updateNameParent ,
		updateNameArguments ,
	) {

		const {
			"name" : argumentName ,
		} = updateNameArguments ;

		userProfile.name = argumentName ;

		return userProfile ;

	} ,
} ;

const resolvers = {
	Mutation ,
	Query ,
} ;

export default resolvers ;
