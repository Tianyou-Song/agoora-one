/* eslint-disable @typescript-eslint/triple-slash-reference */
/* eslint-disable multiline-comment-style */
/* eslint-disable unicorn/prevent-abbreviations */

/// <reference types="next" />
/// <reference types="next/types/global" />
declare module "*.graphqls" {
	import {
		DocumentNode ,
	} from "graphql" ;

	const typeOfDocumentNode = typeof DocumentNode ;

	// eslint-disable-next-line import/no-default-export
	export default typeOfDocumentNode ;
}

declare module "*.yml";
