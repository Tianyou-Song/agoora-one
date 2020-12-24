const putoutRule = {
	"putout/align-spaces": [
		"error",
	],
	"putout/destructuring-as-function-argument": [
		"off",
	],
	"putout/for-of-multiple-properties-destructuring": [
		"off",
	],
	"putout/function-declaration-paren-newline": [
		"off",
	],
	"putout/keyword-spacing": [
		"off",
	],
	"putout/long-properties-destructuring": [
		"error",
	],
	"putout/multiple-properties-destructuring": [
		"error",
		{
			"minProperties": 1,
		},
	],
	"putout/newline-function-call-arguments": [
		"error",
	],
	"putout/putout": [
		"error",
	],
	"putout/remove-newline-after-default-import": [
		"error",
	],
	"putout/single-property-destructuring": [
		"off",
	],
}

module.exports = putoutRule;
