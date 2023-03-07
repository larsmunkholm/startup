import React from "react";
import { Story, Meta } from "@storybook/react";
import { IconNames } from "../Icon/Icon.component";
import { ButtonLink, ButtonLinkProps } from "./ButtonLink.component";

export default {
    title: "Atoms/ButtonLink",
    component: ButtonLink,
    args: {
        icon: IconNames.Truck,
        title: "Slet adresse",
        noUnderline: false,
    },
} as Meta;

const Template: Story<ButtonLinkProps> = (args) => <ButtonLink {...args} />;

export const Default = Template.bind({});

export const NoUnderline = Template.bind({});
NoUnderline.args = {
    noUnderline: true,
};
