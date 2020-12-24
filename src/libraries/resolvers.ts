import type {
	ResolverContext ,
} from "./apollo" ;

import type {
	MutationResolvers ,
	QueryResolvers ,
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
		methodParent , methodArguments ,
	) {

		const {
			"name" : argumentName ,
		} = methodArguments ;

		userProfile.name = argumentName ;

		return userProfile ;

	} ,
} ;

const defaultExport = {
	Mutation ,
	Query ,
} ;

// eslint-disable-next-line import/no-default-export
export default defaultExport ;
