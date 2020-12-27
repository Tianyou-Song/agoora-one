/* eslint-disable no-undef */
import {
	InMemoryCache , gql ,
} from "@apollo/client" ;

import {
	MockedProvider ,
} from "@apollo/client/testing" ;

import React from "react" ;

import renderer from "react-test-renderer" ;

import Index from "../pages" ;

const cache = new InMemoryCache() ;

cache.writeQuery(
	{
		"data" : {
			"viewer" : {
				// eslint-disable-next-line @typescript-eslint/naming-convention
				"__typename" : "User" ,
				"id"         : "Baa" ,
				"name"       : "Baa" ,
				"status"     : "Healthy" ,
			} ,
		} ,
		"query" : gql `
			query Viewer {
			viewer {
				id
				name
				status
			}
			}
		` ,
	} ,
) ;

describe(
	"Index" ,
	() => {

		it(
			"renders the html we want" ,
			() => {

				const component = renderer.create(
					<MockedProvider
						cache = {
							cache
						}
					>
						<Index/>
					</MockedProvider> ,
				) ;

				expect(
					component.toJSON() ,
				)
					.toMatchSnapshot() ;

			} ,
		) ;

	} ,
) ;

