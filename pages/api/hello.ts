/* eslint-disable @typescript-eslint/prefer-readonly-parameter-types */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type {
	NextApiRequest ,
	NextApiResponse ,
} from "next" ;

import {
	StatusCodes ,
} from "http-status-codes" ;

const

	{
		INTERNAL_SERVER_ERROR ,
		OK ,
	} : {
		INTERNAL_SERVER_ERROR : number;
		OK : number;
	} = StatusCodes ;

const api = (
	request : NextApiRequest ,
	response : NextApiResponse ,
) : void => {

	try {

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

		response.statusCode = INTERNAL_SERVER_ERROR ;

		if (
			error instanceof Error
		) {

			response.json(
				JSON.stringify(
					error.message ,
				) ,
			) ;

		} else {

			response.json(
				JSON.stringify(
					error ,
				) ,
			) ;

		}

	}

} ;

export default api ;
