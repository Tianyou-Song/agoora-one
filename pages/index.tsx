/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import Link from "next/link" ;

import React , {
	Dispatch ,
	SetStateAction ,
	useCallback ,
	useState ,
} from "react" ;

import {
	ViewerDocument ,
	useUpdateNameMutation ,
	useViewerQuery ,
} from "../lib/viewer.graphql" ;

import {
	initializeApollo ,
} from "../lib/apollo" ;

import {
	ApolloClient ,
	NormalizedCacheObject ,
} from "@apollo/client" ;

const Index = () : JSX.Element => {

	const {
		viewer ,
	} = useViewerQuery().data! ;

	const [
		nameState ,
		setNameState ,
	] : [
		nameState : string ,
		setNameState : Dispatch<SetStateAction<string>> ,
	] = useState(
		"" ,
	) ;

	const handleNameStateChange : (
		// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
		nameChangeEvent : Readonly<React.ChangeEvent<HTMLInputElement>>
	) => void = useCallback(
		( // eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
			nameChangeEvent : Readonly<React.ChangeEvent<HTMLInputElement>> ,
		) : void => {

			setNameState(
				nameChangeEvent.target.value ,
			) ;

		} ,
		[
			setNameState ,
		] ,
	) ;

	const [
		updateNameMutation ,
	] = useUpdateNameMutation() ;

	const handleNameChange : () => void = useCallback(
		() : void => {

			updateNameMutation(
				{

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

					variables : {
						name : nameState ,
					} ,
				} ,
			) ;

		} ,
		[
			nameState ,
			updateNameMutation ,
		] ,
	) ;

	return (
		< div >
			{
				"You're signed in as "
			}
			{
				viewer.name
			}
			{
				" and you're"
			}
			{
				viewer.status
			}
			{
				". Go to the "
			}
			< Link
				href = {
					"/about"
				}
			>
				< button
					type = {
						"button"
					}
				>
					{
						"about"
					}
				</ button >
			</ Link >
			{
				" page."
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
						handleNameStateChange
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
						handleNameChange
					}
				/>
			</ div >
		</ div >
	) ;

} ;

export const getStaticProperties = async () : Promise<{
	properties : {
		initialApolloState : NormalizedCacheObject;
	};
}> => {

	const apolloClient : ApolloClient<NormalizedCacheObject> = initializeApollo() ;

	await apolloClient.query(
		{
			query : ViewerDocument ,
		} ,
	) ;

	return {
		properties : {
			initialApolloState : apolloClient.cache.extract() ,
		} ,
	} ;

} ;

export default Index ;
