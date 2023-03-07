import React from "react";
import { Story, Meta } from "@storybook/react";
import { IconNames } from "../../atoms/Icon/Icon.component";
import { EmptyState, EmptyStateTypes } from "./EmptyState.component";

export default {
    title: "Molecules/EmptyState",
    component: EmptyState,
    args: {
        text: (
            <>
                <p>Sorry about that!</p>
                <p>
                    Try <a href="#">something else</a> instead.
                </p>
            </>
        ),
    },
} as Meta;

const Template: Story<any> = (args) => <EmptyState {...args} />;

export const Error = Template.bind({});
Error.args = {
    type: EmptyStateTypes.Error,
    icon: IconNames.Close,
    title: "An error occurred",
};

export const NoContent = Template.bind({});
NoContent.args = {
    type: EmptyStateTypes.NoContent,
    title: "No content",
};

export const NoResult = Template.bind({});
NoResult.args = {
    type: EmptyStateTypes.NoResults,
    title: "No results",
};

export const FormSubmit = Template.bind({});
FormSubmit.args = {
    type: EmptyStateTypes.FormSubmit,
    title: "Thank you for your order",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto autem dolor fuga ipsa laboriosam quae tempore voluptatem. Aut corporis eligendi facilis illo impedit molestias nobis nulla perspiciatis placeat, velit voluptatem.",
    cta: {
        text: "Make another order",
        onClick: () => null,
    },
};

export const CustomIcon = Template.bind({});
CustomIcon.args = {
    icon: IconNames.Truck,
    title: "Barcode brothers",
    cta: {
        text: "OK CTA",
        onClick: () => null,
    },
};

export const NoCartItems = Template.bind({});
NoCartItems.args = {
    icon: IconNames.Truck,
    title: "Du har ingen produkter",
    text: `Bliv mindet om at købe de produkter, som du oftest bruger gennem Farm in Time. <br> <a href="/">Læs mere her</a>`,
};
