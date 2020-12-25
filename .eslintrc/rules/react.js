const reactRule = {
	"react/boolean-prop-naming": [
		"error",
		{
			"validateNested": true,
		},
	],
	"react/button-has-type": [
		"error",
		{
			"button": true,
			"reset": true,
			"submit": true,
		},
	],
	"react/default-props-match-prop-types": [
		"error",
		{
			"allowRequiredDefaults": false,
		},
	],
	"react/destructuring-assignment": [
		"error",
		"always",
	],
	"react/display-name": [
		"error",
		{
			"ignoreTranspilerName": false,
		},
	],
	"react/forbid-component-props": "error",
	"react/forbid-dom-props": "error",
	"react/forbid-elements": "error",
	"react/forbid-foreign-prop-types": "error",
	"react/forbid-prop-types": [
		"error",
		{
			"checkChildContextTypes": true,
			"checkContextTypes": true,
		},
	],
	"react/function-component-definition": [
		"error",
		{
			"namedComponents": "arrow-function",
			"unnamedComponents": "arrow-function",
		},
	],
	"react/jsx-boolean-value": "error",
	"react/jsx-child-element-spacing": "error",
	"react/jsx-closing-bracket-location": [
		"error",
		{
			"nonEmpty": "tag-aligned",
			"selfClosing": "tag-aligned",
		},
	],
	"react/jsx-closing-tag-location": "error",
	"react/jsx-curly-brace-presence": [
		"error",
		{
			"children": "always",
			"props": "always",
		},
	],
	"react/jsx-curly-newline": [
		"error",
		{
			"multiline": "require",
			"singleline": "require",
		},
	],
	"react/jsx-curly-spacing": [
		"error",
		{
			"children": true,
			"when": "always",
		},
	],
	"react/jsx-equals-spacing": [
		"error",
		"always",
	],
	"react/jsx-filename-extension": [
		"error",
		{
			"allow": "as-needed",
			"extensions": [
				".jsx",
				".tsx",
			],
		},
	],
	"react/jsx-first-prop-new-line": [
		"error",
		"always",
	],
	"react/jsx-fragments": [
		"error",
		"element",
	],
	"react/jsx-handler-names": [
		"error",
		{
			"checkInlineFunction": true,
			"checkLocalVariables": true,
			"eventHandlerPrefix": "handle",
			"eventHandlerPropPrefix": "on",
		},
	],
	"react/jsx-indent": [
		"error",
		"tab",
		{
			"checkAttributes": false,
			"indentLogicalExpressions": true,
		},
	],
	"react/jsx-indent-props": [
		"error",
		"tab",
	],
	"react/jsx-key": [
		"error",
		{
			"checkFragmentShorthand": true,
		},
	],
	"react/jsx-max-depth": [
		"error",
		{
			"max": 4,
		},
	],
	"react/jsx-max-props-per-line": [
		"error",
		{
			"maximum": 1,
			"when": "always",
		},
	],
	"react/jsx-no-bind": [
		"error",
		{
			"allowArrowFunctions": false,
			"allowBind": false,
			"allowFunctions": false,
			"ignoreDOMComponents": false,
			"ignoreRefs": false,
		},
	],
	"react/jsx-no-comment-textnodes": "error",
	"react/jsx-no-duplicate-props": [
		"error",
		{
			"ignoreCase": false,
		},
	],
	"react/jsx-no-literals": [
		"error",
		{
			"ignoreProps": false,
			"noAttributeStrings": false,
			"noStrings": false,
		},
	],
	"react/jsx-no-script-url": "error",
	"react/jsx-no-target-blank": [
		"error",
		{
			"allowReferrer": false,
			"enforceDynamicLinks": "always",
		},
	],
	"react/jsx-no-undef": [
		"error",
		{
			"allowGlobals": false,
		},
	],
	"react/jsx-no-useless-fragment": "error",
	"react/jsx-one-expression-per-line": [
		"error",
		{
			"allow": "none",
		},
	],
	"react/jsx-pascal-case": [
		"error",
		{
			"allowAllCaps": false,
		},
	],
	"react/jsx-props-no-multi-spaces": "error",
	"react/jsx-props-no-spreading": [
		"error",
		{
			"custom": "enforce",
			"explicitSpread": "enforce",
			"html": "enforce",
		},
	],
	"react/jsx-sort-default-props": [
		"error",
		{
			"ignoreCase": false,
		},
	],
	"react/jsx-sort-props": [
		"error",
		{
			"callbacksLast": true,
			"ignoreCase": false,
			"noSortAlphabetically": false,
			"reservedFirst": true,
			"shorthandFirst": true,
			"shorthandLast": false,
		},
	],
	"react/jsx-space-before-closing": "off",
	"react/jsx-tag-spacing": [
		"error",
		{
			"afterOpening": "never",
			"beforeClosing": "never",
			"beforeSelfClosing": "never",
			"closingSlash": "never",
		},
	],
	"react/jsx-uses-react": "error",
	"react/jsx-uses-vars": "error",
	"react/jsx-wrap-multilines": [
		"error",
		{
			"arrow": "parens-new-line",
			"assignment": "parens-new-line",
			"condition": "parens-new-line",
			"declaration": "parens-new-line",
			"logical": "parens-new-line",
			"prop": "parens-new-line",
			"return": "parens-new-line",
		},
	],
	"react/no-access-state-in-setstate": "error",
	"react/no-adjacent-inline-elements": "error",
	"react/no-array-index-key": "error",
	"react/no-children-prop": "error",
	"react/no-danger": "error",
	"react/no-danger-with-children": "error",
	"react/no-deprecated": "error",
	"react/no-did-mount-set-state": [
		"error",
		"disallow-in-func",
	],
	"react/no-did-update-set-state": [
		"error",
		"disallow-in-func",
	],
	"react/no-direct-mutation-state": "error",
	"react/no-find-dom-node": "error",
	"react/no-is-mounted": "error",
	"react/no-multi-comp": [
		"error",
		{
			"ignoreStateless": false,
		},
	],
	"react/no-redundant-should-component-update": "error",
	"react/no-render-return-value": "error",
	"react/no-set-state": "error",
	"react/no-string-refs": [
		"error",
		{
			"noTemplateLiterals": true,
		},
	],
	"react/no-this-in-sfc": "error",
	"react/no-typos": "error",
	"react/no-unescaped-entities": "error",
	"react/no-unknown-property": "error",
	"react/no-unsafe": [
		"error",
		{
			"checkAliases": true,
		},
	],
	"react/no-unused-prop-types": [
		"error",
		{
			"skipShapeProps": false,
		},
	],
	"react/no-unused-state": "error",
	"react/no-will-update-set-state": [
		"error",
		"disallow-in-func",
	],
	"react/prefer-es6-class": [
		"error",
		"always",
	],
	"react/prefer-read-only-props": "error",
	"react/prefer-stateless-function": [
		"error",
		{
			"ignorePureComponents": false,
		},
	],
	"react/prop-types": [
		"error",
		{
			"skipUndeclared": false,
		},
	],
	"react/react-in-jsx-scope": "error",
	"react/require-default-props": [
		"error",
		{
			"forbidDefaultForRequired": false,
			"ignoreFunctionalComponents": false,
		},
	],
	"react/require-optimization": "error",
	"react/require-render-return": "error",
	"react/self-closing-comp": [
		"error",
		{
			"component": true,
			"html": true,
		},
	],
	"react/sort-comp": [
		"error",
		{
			"groups": {
				"lifecycle": [
					"displayName",
					"propTypes",
					"contextTypes",
					"childContextTypes",
					"mixins",
					"statics",
					"defaultProps",
					"constructor",
					"getDefaultProps",
					"state",
					"getInitialState",
					"getChildContext",
					"getDerivedStateFromProps",
					"componentWillMount",
					"UNSAFE_componentWillMount",
					"componentDidMount",
					"componentWillReceiveProps",
					"UNSAFE_componentWillReceiveProps",
					"shouldComponentUpdate",
					"componentWillUpdate",
					"UNSAFE_componentWillUpdate",
					"getSnapshotBeforeUpdate",
					"componentDidUpdate",
					"componentDidCatch",
					"componentWillUnmount",
				],
			},
			"order": [
				"type-annotations",
				"static-variables",
				"instance-variables",
				"static-methods",
				"instance-methods",
				"getters",
				"setters",
				"lifecycle",
				"everything-else",
				"render",
			],
		},
	],
	"react/sort-prop-types": [
		"error",
		{
			"callbacksLast": false,
			"ignoreCase": true,
			"noSortAlphabetically": false,
			"requiredFirst": true,
			"sortShapeProp": true,
		},
	],
	"react/state-in-constructor": [
		"error",
		"always",
	],
	"react/static-property-placement": [
		"error",
		"static public field",
		{
			"childContextTypes": "static public field",
			"contextType": "static public field",
			"contextTypes": "static public field",
			"displayName": "static public field",
		},
	],
	"react/style-prop-object": "error",
	"react/void-dom-elements-no-children": "error",
}

module.exports = reactRule;
