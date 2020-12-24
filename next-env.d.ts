/* eslint-disable import/unambiguous */
/* eslint-disable multiline-comment-style */
/* eslint-disable unicorn/prevent-abbreviations */

/// <reference types="next" />
/// <reference types="next/types/global" />

import {
	DocumentNode ,
} from "graphql" ;

declare module "*.graphqls" {
	export default typeof DocumentNode ;
}

declare module "*.yml";
