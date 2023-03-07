import React from "react";
import { Story, Meta } from "@storybook/react";
import { defaultArgTypes } from "../../../helpers/defaultArgTypes.helper";
import { IconNames } from "../Icon/Icon.component";
import { Button, ButtonColor, ButtonProps } from "./Button.component";

export default {
    title: "Atoms/Button",
    component: Button,
    args: {
        title: "Just a button text",
        href: "",
        small: false,
        large: false,
        isGhost: false,
        disabled: false,
        color: ButtonColor.Action,
        noWrap: false,
        iconRight: false,
        showSpinner: false,
    },
    argTypes: defaultArgTypes,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Small = Template.bind({});
Small.args = { small: true };

export const Large = Template.bind({});
Large.args = { large: true };

export const White = Template.bind({});
White.args = {
    color: ButtonColor.White,
};

export const Grey = Template.bind({});
Grey.args = {
    color: ButtonColor.Grey,
};

export const IconOnly = Template.bind({});
IconOnly.args = {
    icon: IconNames.Zoom,
    title: "",
};
export const IconLeft = Template.bind({});
IconLeft.args = {
    icon: IconNames.Zoom,
    title: "Just a text - long text",
};

export const IconRight = Template.bind({});
IconRight.args = {
    icon: IconNames.Zoom,
    title: "Just a text - long text",
    iconRight: true,
};

export const Ghost = Template.bind({});
Ghost.args = {
    isGhost: true,
    icon: IconNames.Zoom,
    title: "Just a text - long text ",
};

export const Disabled = Template.bind({});
Disabled.args = {
    icon: IconNames.Zoom,
    title: "Just a text - long text ",
    disabled: true,
};

export const DisabledGhost = Template.bind({});
DisabledGhost.args = {
    isGhost: true,
    icon: IconNames.Zoom,
    title: "Just a text - long text ",
    disabled: true,
};

export const AsALink = Template.bind({});
AsALink.args = {
    href: "#",
    icon: IconNames.Zoom,
};

export const WithASpinner = Template.bind({});
WithASpinner.args = {
    showSpinner: true,
};
