import type {
	ResolverContext ,
} from "./apollo" ;

import type {
	MutationResolvers , QueryResolvers ,
} from "./type-defs.graphqls" ;

const userProfile = {
	id     : String(
		1 ,
	) ,
	name   : "John Smith" ,
	status : "cached" ,
} ;

const Query : Required<QueryResolvers<ResolverContext>> = {
	viewer () {

		return userProfile ;

	} ,
} ;

const Mutation : Required<MutationResolvers<ResolverContext>> = {
	updateName (
		_parent , _arguments ,
	) {

		userProfile.name = _arguments.name ;

		return userProfile ;

	} ,
} ;

export default {
	Query ,
	Mutation ,
} ;

