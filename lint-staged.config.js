const sharedTasks = ["prettier --write"];

module.exports = {
    "./packages/*/src/**/*.*(js|jsx|ts|tsx)": [
        "eslint --max-warnings 1 --fix --cache -c .eslintrc.commit.js -- ",
        ...sharedTasks,
    ],
    "./packages/*/src/**/*.*(css|scss)": [
        "stylelint --max-warnings 1 --fix --cache -- ",
        ...sharedTasks,
    ],
};
