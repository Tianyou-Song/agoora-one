/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/typedef */

const jsonImporter = require(
	"node-sass-json-importer" ,
) ;

module.exports = {
	"sassOptions" : {
		"importer" : jsonImporter() ,
	} ,
} ;
