/* eslint-disable no-console */
/* eslint-disable putout/putout */

import type {
	NormalizedCacheObject ,
} from "@apollo/client" ;

import Link from "next/link" ;

import type React from "react" ;

import {
	useCallback ,
	useState ,
} from "react" ;

import {
	initializeApollo ,
} from "../libraries/apollo" ;

import type {
	ViewerQuery ,
} from "../libraries/viewer.graphql" ;

import {
	ViewerDocument  ,
	useUpdateNameMutation ,
	useViewerQuery ,
} from "../libraries/viewer.graphql" ;

import HomeStyles from "../styles/Home.module.scss" ;

const getStaticProps = async () : Promise<{
	"props" : {
		"initialApolloState" : NormalizedCacheObject;
	};
}> => {

	const apolloClient = initializeApollo() ;

	await apolloClient.query(
		{
			"query" : ViewerDocument ,
		} ,
	) ;

	return {
		"props" : {
			"initialApolloState" : apolloClient.cache.extract() ,
		} ,
	} ;

} ;

const Index = () : JSX.Element => {

	const {
		data ,
	} = useViewerQuery() ;

	const {
		viewer ,
	} = data ?? {} ;

	const [
		enteredName ,
		setEnteredName ,
	] = useState(
		"" ,
	) ;

	const [
		updateNameMutation ,
	] = useUpdateNameMutation() ;

	const handleNameTextChange = useCallback(
		(
			nameChangeEvent : React.ChangeEvent<HTMLInputElement> ,
		) => {

			setEnteredName(
				nameChangeEvent.target.value ,
			) ;

		} ,
		[
			setEnteredName ,
		] ,
	) ;

	const handleNameChange = useCallback(
		async () : Promise<void> => {

			await updateNameMutation(
				{
					"update" : (
						store ,
						{
							"data": {
								"updateName" : {
								// eslint-disable-next-line @typescript-eslint/no-shadow
									name ,
								} ,
							} ,
						} ,
					) => {

						const {
							"viewer" : storeViewer ,
						} = store.readQuery(
							{
								"query" : ViewerDocument ,
							} ,
						) as ViewerQuery ;

						const viewerToWrite = {
							...storeViewer ,
						} ;

						viewerToWrite.name = name as string ;

						store.writeQuery(
							{
								"data"  : {
									"viewer" : viewerToWrite ,
								} ,
								"query" : ViewerDocument ,
							} ,
						) ;

					} ,

					"variables" : {
						"name" : enteredName ,
					} ,
				} ,
			) ;

		} ,
		[
			enteredName ,
			updateNameMutation ,
		] ,
	) ;

	return (
		<div
			className = {
				HomeStyles.main
			}
		>
			{
				`You're signed in as ${ viewer?.name ?? "" } and you're ${ viewer?.status ?? "" }. Go to the `
			}
			<Link
				href = {
					"/about"
				}
			>
				{
					"about"
				}
			</Link>
			{
				" page."
			}
			<div>
				<input
					placeholder = {
						"your new name..."
					}
					type = {
						"text"
					}
					onChange = {
						handleNameTextChange
					}
				/>
				<input
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
			</div>
		</div>
	) ;

} ;

export {
	getStaticProps ,
} ;

export default Index ;
