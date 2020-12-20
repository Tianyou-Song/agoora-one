/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-underscore-dangle */
import type {
	MutationResolvers , QueryResolvers ,
} from "./type-defs.graphqls" ;

import type {
	ResolverContext ,
} from "./apollo" ;

const userProfile : Required<QueryResolvers<ResolverContext>> = {
	id     : String(
		// eslint-disable-next-line @typescript-eslint/no-magic-numbers
		1 ,
	) ,
	name   : "John Smith" ,
	status : "cached" ,
} ;

const Query : Required<QueryResolvers<ResolverContext>> = {
	viewer (
		_parent : string , _arguments : string , _context : string , _info : string ,
	) {

		return userProfile ;

	} ,
} ;

const Mutation : Required<MutationResolvers<ResolverContext>> = {
	updateName (
		_parent : string , _arguments : { readonly name : string; } , _context : string , _info : string ,
	) {

		const {
			name : username ,
		} : {
			name : string;
		} = _arguments ;

		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
		userProfile.name = username ;

		return userProfile ;

	} ,
} ;

export default {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	Mutation ,
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	Query ,
} ;
