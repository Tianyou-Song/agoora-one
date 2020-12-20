import {
	InMemoryCache , gql ,
} from "@apollo/client" ;

import React from "react" ;

import Index from "../pages" ;

import renderer from "react-test-renderer" ;

import {
	MockedProvider ,
} from "@apollo/client/testing" ;

const cache : InMemoryCache = new InMemoryCache() ;

cache.writeQuery(
	{
		data : {
			viewer : {
				__typename : "User" ,
				id         : "Baa" ,
				name       : "Baa" ,
				status     : "Healthy" ,
			} ,
		} ,
		query : gql `
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

