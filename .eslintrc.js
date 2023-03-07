module.exports = {
    parser: "@typescript-eslint/parser",
    env: {
        browser: true,
        commonjs: true,
        es6: true,
    },
    plugins: [
        "react",
        "import",
        "jsx-a11y",
        "unused-imports",
        "css-modules",
        "react-hooks",
    ],
    extends: [
        "eslint:recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:react/recommended",
        "plugin:css-modules/recommended",
        "plugin:storybook/recommended",
        "prettier", // must be last!!
    ],
    overrides: [
        {
            files: ["**/*.+(js|jsx|ts|tsx)"],
            excludedFiles: "*.stories.(ts|tsx)",
            rules: {
                "import/no-default-export": 0,
            },
        },
        {
            files: ["**/*.+(ts|tsx)"],
            parserOptions: {
                project: "./tsconfig.json",
            },
            plugins: ["@typescript-eslint"],
            extends: [
                "plugin:@typescript-eslint/eslint-recommended",
                "plugin:@typescript-eslint/recommended",
            ],
            rules: {
                "@typescript-eslint/ban-ts-comment": 0,
                "@typescript-eslint/explicit-function-return-type": 0,
                "@typescript-eslint/explicit-module-boundary-types": 0,
                "@typescript-eslint/no-explicit-any": [
                    "error",
                    { ignoreRestArgs: false },
                ],
                "@typescript-eslint/no-unused-vars": 0,
            },
        },
        {
            files: ["**/index.tsx", "**/*.stories.tsx", "**/*.page.tsx"],
            rules: {
                "@typescript-eslint/no-explicit-any": 0,
            },
        },
    ],
    settings: {
        react: {
            version: "detect",
        },
    },
    rules: {
        eqeqeq: ["error", "always"],
        "import/first": 1,
        "import/no-default-export": 1,
        "import/no-mutable-exports": 1,
        "jsx-a11y/anchor-is-valid": "off",
        "jsx-a11y/no-autofocus": "off",
        "no-unused-vars": "off",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "error",
        "unused-imports/no-unused-vars": [
            "warn",
            {
                vars: "all",
                varsIgnorePattern: "^_",
                args: "after-used",
                argsIgnorePattern: "^_",
            },
        ],
    },
    ignorePatterns: ["generate/**/*.*"],
    globals: {
        JSX: true,
    },
};
