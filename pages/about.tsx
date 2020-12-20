import Link from "next/link" ;

import React from "react" ;

export const About = () : JSX.Element => {

	return (
		< div >
			{
				"Welcome to the about page. Go to the "
			}
			< Link
				href = {
					"/"
				}
			>
				< button
					type = {
						"button"
					}
				>
					{
						"Home"
					}
				</ button >
			</ Link >
			{
				" page."
			}
		</ div >
	) ;

} ;
