/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/typedef */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
const jsonImporter = require(
	"node-sass-json-importer" ,
) ;

module.exports = {
	"sassOptions" : {
		"importer" : jsonImporter() ,
	} ,
} ;
