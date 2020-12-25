import type {
	NormalizedCacheObject ,
} from "@apollo/client" ;

import type {
	ViewerQuery ,
} from "../libraries/viewer.graphql" ;

import {
	isObject ,
} from "./type" ;

const isNormalizedCacheObject = (
	argument : unknown ,
) : argument is NormalizedCacheObject => {

	return isObject(
		argument ,
	) ;

} ;

const isViewerQuery = (
	argument : unknown ,
) : argument is ViewerQuery => {

	return (
		isObject(
			argument ,
		)
		&& "viewer" in argument
	) ;

} ;

export {
	isNormalizedCacheObject ,
	isViewerQuery ,
} ;

