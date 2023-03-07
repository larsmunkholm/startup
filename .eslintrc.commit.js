module.exports = {
    extends: "./.eslintrc.js",
    rules: {
        "import/newline-after-import": 1,
        "import/no-unused-modules": 1,
        "import/order": [
            "error",
            {
                pathGroups: [
                    {
                        pattern: "react",
                        group: "builtin",
                        position: "before",
                    },
                    {
                        pattern: "./**/*.scss",
                        group: "unknown",
                        position: "after",
                    },
                    {
                        pattern: "../**/*.scss",
                        group: "unknown",
                        position: "after",
                    },
                ],
                pathGroupsExcludedImportTypes: ["react"],
            },
        ],
        "padding-line-between-statements": [
            "error",
            {
                blankLine: "never",
                prev: "import",
                next: "import",
            },
        ],
        "react/jsx-curly-brace-presence": [
            1,
            {
                props: "never",
                children: "never",
            },
        ],
        "react/jsx-no-useless-fragment": [
            "error",
            {
                allowExpressions: true,
            },
        ],
        "react/self-closing-comp": [
            "error",
            {
                component: true,
                html: true,
            },
        ],
        "unused-imports/no-unused-imports": "error",
    },
};
