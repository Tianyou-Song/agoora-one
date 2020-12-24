const jsxA11yRule = {
	"jsx-a11y/accessible-emoji": [
		"error",
	],
	"jsx-a11y/alt-text": [
		"error",
		{
			"area": [
				"Area",
			],
			"elements": [
				"img",
				"object",
				"area",
				"input[type='image']",
			],
			"img": [
				"Image",
			],
			"input[type='image']": [
				"InputImage",
			],
			"object": [
				"Object",
			],
		},
	],
	"jsx-a11y/anchor-has-content": [
		"error",
		{
			"components": [
				"Anchor",
			],
		},
	],
	"jsx-a11y/anchor-is-valid": [
		"error",
		{
			"aspects": [
				"noHref",
				"invalidHref",
				"preferButton",
			],
			"components": [
				"Link",
				"a",
			],
			"specialLink": [
				"href",
				"hrefLeft",
				"hrefRight",
			],
		},
	],
	"jsx-a11y/aria-activedescendant-has-tabindex": [
		"error",
	],
	"jsx-a11y/aria-props": [
		"error",
	],
	"jsx-a11y/aria-proptypes": [
		"error",
	],
	"jsx-a11y/aria-role": [
		"error",
		{
			"ignoreNonDOM": false,
		},
	],
	"jsx-a11y/aria-unsupported-elements": [
		"error",
	],
	"jsx-a11y/autocomplete-valid": [
		"error",
		{
			"inputComponents": [
				"Input",
				"FormField",
			],
		},
	],
	"jsx-a11y/click-events-have-key-events": [
		"error",
	],
	"jsx-a11y/heading-has-content": [
		"error",
		{
			"components": [
				"MyHeading",
			],
		},
	],
	"jsx-a11y/html-has-lang": [
		"error",
	],
	"jsx-a11y/iframe-has-title": [
		"error",
	],
	"jsx-a11y/img-redundant-alt": [
		"error",
		{
			"components": [
				"Image",
			],
			"words": [
				"Bild",
				"Foto",
			],
		},
	],
	"jsx-a11y/interactive-supports-focus": [
		"error",
		{
			"tabbable": [
				"button",
				"checkbox",
				"columnheader",
				"combobox",
				"doc-backlink",
				"doc-biblioref",
				"doc-glossref",
				"doc-noteref",
				"grid",
				"gridcell",
				"link",
				"listbox",
				"menu",
				"menubar",
				"menuitem",
				"menuitemcheckbox",
				"menuitemradio",
				"option",
				"progressbar",
				"radio",
				"radiogroup",
				"row",
				"rowheader",
				"searchbox",
				"slider",
				"spinbutton",
				"switch",
				"tab",
				"tablist",
				"textbox",
				"tree",
				"treegrid",
				"treeitem",
			],
		},
	],
	"jsx-a11y/label-has-associated-control": [
		"error",
		{
			"assert": "both",
			"controlComponents": [
				"CustomInput",
			],
			"depth": 3,
			"labelAttributes": [
				"inputLabel",
			],
			"labelComponents": [
				"CustomLabel",
			],
		},
	],
	"jsx-a11y/lang": [
		"error",
	],
	"jsx-a11y/media-has-caption": [
		"error",
		{
			"audio": [
				"Audio",
			],
			"track": [
				"Track",
			],
			"video": [
				"Video",
			],
		},
	],
	"jsx-a11y/mouse-events-have-key-events": [
		"error",
	],
	"jsx-a11y/no-access-key": [
		"error",
	],
	"jsx-a11y/no-autofocus": [
		"error",
		{
			"ignoreNonDOM": false,
		},
	],
	"jsx-a11y/no-distracting-elements": [
		"error",
		{
			"elements": [
				"marquee",
				"blink",
			],
		},
	],
	"jsx-a11y/no-interactive-element-to-noninteractive-role": [
		"error",
		{
			"tr": [
				"none",
				"presentation",
			],
		},
	],
	"jsx-a11y/no-noninteractive-element-interactions": [
		"error",
		{
			"handlers": [
				"onClick",
				"onKeyDown",
				"onKeyPress",
				"onKeyUp",
				"onMouseDown",
				"onMouseUp",
			],
		},
	],
	"jsx-a11y/no-noninteractive-element-to-interactive-role": [
		"error",
		{
			"li": [
				"menuitem",
				"option",
				"row",
				"tab",
				"treeitem",
			],
			"ol": [
				"listbox",
				"menu",
				"menubar",
				"radiogroup",
				"tablist",
				"tree",
				"treegrid",
			],
			"table": [
				"grid",
			],
			"td": [
				"gridcell",
			],
			"ul": [
				"listbox",
				"menu",
				"menubar",
				"radiogroup",
				"tablist",
				"tree",
				"treegrid",
			],
		},
	],
	"jsx-a11y/no-noninteractive-tabindex": [
		"error",
		{
			"roles": [
				"tabpanel",
			],
			"tags": [],
		},
	],
	"jsx-a11y/no-onchange": [
		"off",
	],
	"jsx-a11y/no-redundant-roles": [
		"error",
		{
			"nav": [
				"navigation",
			],
		},
	],
	"jsx-a11y/no-static-element-interactions": [
		"error",
		{
			"handlers": [
				"onClick",
				"onKeyDown",
				"onKeyPress",
				"onKeyUp",
				"onMouseDown",
				"onMouseUp",
			],
		},
	],
	"jsx-a11y/role-has-required-aria-props": [
		"error",
	],
	"jsx-a11y/role-supports-aria-props": [
		"error",
	],
	"jsx-a11y/scope": [
		"error",
	],
	"jsx-a11y/tabindex-no-positive": [
		"error",
	],
};

module.exports = jsxA11yRule;
