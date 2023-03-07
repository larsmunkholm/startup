import "../src/styles/global/main.scss";
import React from "react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { MemoryRouter } from "react-router-dom";

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*", disable: true },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    viewport: {
        viewports: {
            ...INITIAL_VIEWPORTS,
        },
    },
};

export const decorators = [
    (Story) => (
        <MemoryRouter initialEntries={["/"]}>
            <Story />
        </MemoryRouter>
    ),
];
