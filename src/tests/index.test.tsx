import {
	InMemoryCache , gql ,
} from "@apollo/client" ;

import {
	MockedProvider ,
// eslint-disable-next-line import/no-internal-modules
} from "@apollo/client/testing" ;

import React from "react" ;

import renderer from "react-test-renderer" ;

import Index from "../pages" ;

const cache = new InMemoryCache() ;

cache.writeQuery(
	{
		query : gql `
    query Viewer {
      viewer {
        id
        name
        status
      }
    }
  ` ,
		data : {
			viewer : {
				__typename : "User" ,
				id         : "Baa" ,
				name       : "Baa" ,
				status     : "Healthy" ,
			} ,
		} ,
	} ,
) ;

describe(
	"Index" ,
	() => {

		it(
			"renders the html we want" ,
			() => {

				const component = renderer.create(
					< MockedProvider
						cache = {
							cache
						}
					>
						< Index />
					</ MockedProvider > ,
				) ;

				expect(
					component.toJSON() ,
				)
					.toMatchSnapshot() ;

			} ,
		) ;

	} ,
) ;

