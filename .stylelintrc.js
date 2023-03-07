module.exports = {
    plugins: ["stylelint-scss", "stylelint-order"],
    extends: [
        "stylelint-config-recommended",
        "stylelint-config-css-modules",
        "stylelint-config-recommended-scss",
        "stylelint-config-prettier", // must be last!!
    ],
    rules: {
        "at-rule-empty-line-before": [
            "always",
            {
                except: ["blockless-after-blockless", "first-nested"],
                ignore: ["after-comment"],
                ignoreAtRules: ["else"],
            },
        ],
        "at-rule-name-case": ["lower", { severity: "warning" }],
        "block-closing-brace-empty-line-before": "never",
        "block-closing-brace-newline-after": ["always", { ignoreAtRules: ["if", "else"] }],
        "block-closing-brace-newline-before": "always",
        "block-opening-brace-newline-after": "always",
        "comment-empty-line-before": [
            "always",
            {
                except: ["first-nested"],
                ignore: ["after-comment", "stylelint-commands"],
            },
        ],
        "declaration-block-no-duplicate-properties": true,
        "declaration-colon-space-after": "always",
        "declaration-colon-space-before": "never",
        "font-family-no-duplicate-names": true,
        "font-family-no-missing-generic-family-keyword": true,
        "function-calc-no-unspaced-operator": true,
        "function-name-case": ["lower", { ignoreFunctions: ["/DXImageTransform/"] }],
        "function-whitespace-after": "always",
        "length-zero-no-unit": true,
        "media-feature-colon-space-after": "always",
        "media-feature-name-case": ["lower", { severity: "warning" }],
        "no-descending-specificity": null,
        "number-max-precision": 3,
        "number-no-trailing-zeros": true,
        "order/order": [
            "dollar-variables",
            "custom-properties",
            {
                type: "at-rule",
                hasBlock: false,
            },
            "declarations",
            {
                type: "at-rule",
                hasBlock: true,
            },
            {
                type: "rule",
                selector: "/^&:\\w+$/",
            },
            {
                type: "at-rule",
                name: "include",
                hasBlock: true,
            },
            {
                type: "rule",
                selector: "/&:\\w+$/",
            },
            {
                type: "at-rule",
                name: "content",
            },
            {
                type: "at-rule",
                name: "return",
            },
        ],
        "order/properties-alphabetical-order": true,
        "property-no-vendor-prefix": [
            true,
            {
                ignoreProperties: ["background-clip", "box-orient", "padding-end", "padding-start"],
            },
        ],
        "rule-empty-line-before": [
            "always",
            {
                except: ["first-nested"],
                ignore: ["after-comment"],
            },
        ],
        "scss/function-no-unknown": null,
        "scss/operator-no-newline-before": null,
        "scss/operator-no-newline-after": null,
        "selector-class-pattern": [
            "^[a-z]((?!(_|-){2,}|(_|-)$)[-_a-zA-Z0-9])*(?!__[0-9-_]+($|--))(__[a-z0-9]((?!(_|-){2,}|(_|-)$)[-_a-zA-Z0-9])*)?(?!--[0-9-_]+$)(--[a-z0-9]((?!(_|-){2,}|(_|-)$)[-_a-zA-Z0-9])*)?$",
            {
                resolveNestedSelectors: true,
                message:
                    "Class names should match the BEM syntax (block__element--modifier)\nand always start with a lowercase letter, followed by a letter, number, underscore or dash.\nThe element- and modifier-parts may also start with a number, but must contain at least one letter.",
            },
        ],
        "selector-combinator-space-after": "always",
        "selector-combinator-space-before": "always",
        "selector-descendant-combinator-no-non-space": true,
        "selector-max-id": [
            0,
            {
                message: "Avoid styling from IDs - use classes instead.",
                severity: "error",
            },
        ],
        "selector-max-type": 4,
        "selector-pseudo-class-case": ["lower", { severity: "warning" }],
        "selector-pseudo-class-no-unknown": [
            true,
            {
                ignorePseudoClasses: ["global", "local"],
            },
        ],
        "selector-pseudo-element-case": ["lower", { severity: "warning" }],
        "selector-pseudo-element-colon-notation": "double",
        "selector-type-case": ["lower", { severity: "warning" }],
        "unit-case": ["lower", { severity: "warning" }],
        "value-keyword-case": ["lower", { severity: "warning" }],
        "value-list-comma-newline-after": "always-multi-line",
        "value-list-comma-space-after": "always-single-line",
        "value-list-max-empty-lines": 0,
        "value-no-vendor-prefix": [
            true,
            {
                ignoreValues: ["box"],
            },
        ],
    },
};
