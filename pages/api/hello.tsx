// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type {
    NextApiRequest ,
    NextApiResponse ,
} from "next" ;

const api = function (
    request: NextApiRequest ,
    response: NextApiResponse ,
): void {

    // eslint-disable-next-line no-magic-numbers
    response.statusCode = 200 ;

    response.json (
        {
            "body" : JSON.stringify (
                request.body ,
            ) ,
            "cookies"     : request.cookies ,
            "env"         : request.env ,
            "preview"     : request.preview ,
            "previewData" : JSON.stringify (
                request.previewData ,
            ) ,
            "query" : request.query ,
        } ,
    ) ;

} ;

export default api ;
