const isObject = (
	argument : unknown ,
) : argument is Record<string , unknown> => {

	return (
		typeof argument === "object"
		&& argument !== null
	) ;

} ;

export {
	isObject ,
} ;
