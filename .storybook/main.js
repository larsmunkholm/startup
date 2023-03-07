const path = require("path");

module.exports = {
    stories: [
        {
            directory: "../src/components",
            files: "**/*.stories.tsx",
        },
    ],
    staticDirs: ["../public"],
    addons: [
        {
            name: "@storybook/addon-postcss",
            options: {
                postcssLoaderOptions: {
                    implementation: require("postcss"),
                },
            },
        },
        {
            name: "@storybook/addon-essentials",
            options: {
                actions: false,
            },
        },
        "storybook-addon-themes",
    ],
    typescript: {
        check: true,
        reactDocgen: true,
    },
    babel: async (options) => {
        options.plugins.push("babel-plugin-inline-react-svg");
        return options;
    },
    webpackFinal: async (config) => {
        config.module.rules.push(
            {
                test: /\.module\.scss$/,
                use: [
                    {
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                localIdentName: "[local]__[hash:base64:5]",
                            },
                        },
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            implementation: require("postcss"),
                        },
                    },
                    {
                        loader: "sass-loader",
                    },
                ],
                include: [path.resolve(__dirname, "../")],
            },
            {
                test: /\.scss$/,
                exclude: [/\.module\.scss$/],
                use: [
                    {
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            implementation: require("postcss"),
                        },
                    },
                    {
                        loader: "sass-loader",
                    },
                ],
                include: [path.resolve(__dirname, "../")],
            }
        );

        return config;
    },
    core: {
        builder: "webpack5",
    },
};
