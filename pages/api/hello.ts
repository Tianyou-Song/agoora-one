/* eslint-disable @typescript-eslint/prefer-readonly-parameter-types */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type {
	NextApiRequest ,
	NextApiResponse ,
} from "next" ;

const api = function api (
	request : NextApiRequest ,
	response : NextApiResponse ,
) : void {

	// eslint-disable-next-line @typescript-eslint/no-magic-numbers
	response.statusCode = 200 ;

	response.json(
		{
			"body" : JSON.stringify(
				request.body ,
			) ,
			"cookies"     : request.cookies ,
			"env"         : request.env ,
			"preview"     : request.preview ,
			"previewData" : JSON.stringify(
				request.previewData ,
			) ,
			"query" : request.query ,
		} ,
	) ;

} ;

export default api ;
