import Link from "next/link" ;

import React from "react" ;

const About = () : JSX.Element => {

	return (
		<div>
			{
				"Welcome to the about page. Go to the "
			}
			<Link
				href = {
					"/"
				}
			>
				{
					"Home"
				}
			</Link>
			{
				" page."
			}
		</div>
	) ;

} ;

export default About ;
