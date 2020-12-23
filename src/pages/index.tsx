import Link from "next/link" ;

import React , {
	useState ,
} from "react" ;

import {
	ViewerDocument ,
	useUpdateNameMutation ,
	useViewerQuery ,
} from "../libraries/viewer.graphql" ;

import {
	initializeApollo ,
} from "../libraries/apollo" ;

import HomeStyles from "../styles/Home.module.scss" ;

const Index = () => {

	const {
		viewer ,
	} = useViewerQuery().data! ;

	const [
		name ,
		setNewName ,
	] = useState(
		"" ,
	) ;

	const [
		updateNameMutation ,
	] = useUpdateNameMutation() ;

	const onChangeName = () => {

		updateNameMutation(
			{
				variables : {
					name ,
				} ,

				/*
				 * Follow apollo suggestion to update cache
				 * https://www.apollographql.com/docs/angular/features/cache-updates/#update
				 */

				update : (
					store ,
					{
						data: {
							updateName: {
								name ,
							} ,
						} ,
					} ,
				) => {

					// Read the data from our cache for this query.
					const {
						viewer ,
					} = store.readQuery(
						{
							query : ViewerDocument ,
						} ,
					) ;

					const newViewer = viewer ;

					// Add our comment from the mutation to the end.
					newViewer.name = name ;

					// Write our data back to the cache.
					store.writeQuery(
						{
							query : ViewerDocument ,
							data  : {
								viewer : newViewer ,
							} ,
						} ,
					) ;

				} ,
			} ,
		) ;

	} ;

	return (
		< div
			className = {
				HomeStyles.main
			}
		>
			{
				"You're signed in as "
			}
			{
				viewer.name
			}
			{
				" "
			}
			{
				"and you're"
			}
			{
				viewer.status
			}
			{
				". Go to the"
			}
			{
				" "
			}
			< Link
				href = {
					"/about"
				}
			>
				< a >
					{
						"about"
					}
				</ a >
			</ Link >
			{
				" "
			}
			{
				"page."
			}
			< div >
				< input
					placeholder = {
						"your new name..."
					}
					type = {
						"text"
					}
					onChange = {
						(
							e ,
						) => {

							setNewName(
								e.target.value ,
							) ;

						}
					}
				/>
				< input
					type = {
						"button"
					}
					value = {
						"change"
					}
					onClick = {
						onChangeName
					}
				/>
			</ div >
		</ div >
	) ;

} ;

export async function getStaticProps () {

	const apolloClient = initializeApollo() ;

	await apolloClient.query(
		{
			query : ViewerDocument ,
		} ,
	) ;

	return {
		props : {
			initialApolloState : apolloClient.cache.extract() ,
		} ,
	} ;

}

export default Index ;

