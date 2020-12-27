const isObject = (
	argument : unknown ,
) : argument is Record<string , unknown> => {

	return (
		typeof argument === "object"
		&& argument !== null
	) ;

} ;

// eslint-disable-next-line import/no-unused-modules
export {
	isObject ,
} ;
