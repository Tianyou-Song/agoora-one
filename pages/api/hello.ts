/* eslint-disable @typescript-eslint/prefer-readonly-parameter-types */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type {
	NextApiRequest ,
	NextApiResponse ,
} from "next" ;

import {
	StatusCodes ,
} from "http-status-codes" ;

const api = function api (
	request : NextApiRequest ,
	response : NextApiResponse ,
) : void {

	try {

		const {
			OK ,
		} : {
			OK : number;
		} = StatusCodes ;

		response.statusCode = OK ;

		response.json(
			{
				"body"        : JSON.stringify(
					request.body ,
				) ,
				"cookies"     : request.cookies ,
				"env"         : request.env ,
				"preview"     : request.preview ,
				"previewData" : JSON.stringify(
					request.previewData ,
				) ,
				"query"       : request.query ,
			} ,
		) ;

	} catch ( error : unknown ) {

		const {
			INTERNAL_SERVER_ERROR ,
		} : {
			INTERNAL_SERVER_ERROR : number;
		} = StatusCodes ;

		response.statusCode = INTERNAL_SERVER_ERROR ;

		if (
			typeof error === "object"
			&& error !== null
			&& Boolean(
				Object.prototype.hasOwnProperty.call(
					error ,
					"message" ,
				) ,
			)
		) {

			const errorWithMessage : {message : string;} = error as {message : string;} ;

			response.json(
				JSON.stringify(
					errorWithMessage.message ,
				) ,
			) ;

		}

	}

} ;

export default api ;
