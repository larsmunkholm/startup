import React from "react";
import { Story, Meta } from "@storybook/react";
import { IconNames } from "../Icon/Icon.component";
import { InlineLink, InlineLinkProps } from "./InlineLink.component";

export default {
    title: "Atoms/InlineLink",
    component: InlineLink,
    args: {
        href: "#",
        title: "Just a link",
        onlyIcon: false,
        isBold: false,
        target: "_self",
    },
} as Meta;

const Template: Story<InlineLinkProps> = (args) => <InlineLink {...args} />;

export const Default = Template.bind({});

export const Bold = Template.bind({});
Bold.args = {
    isBold: true,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
    icon: IconNames.Add,
};

export const OnlyIcon = Template.bind({});
OnlyIcon.args = {
    icon: IconNames.Zoom,
    onlyIcon: true,
};
