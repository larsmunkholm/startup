import React from "react";
import { Story, Meta } from "@storybook/react";
import { defaultArgTypes } from "../../../helpers/defaultArgTypes.helper";
import { Chip, ChipProps } from "./Chip.component";

export default {
    title: "Atoms/Chip",
    component: Chip,
    args: {
        label: "I am a chip",
        removable: false,
    },
    argTypes: defaultArgTypes,
} as Meta;

const Template: Story<ChipProps> = (args) => <Chip {...args} />;

export const Default = Template.bind({});

export const Removable = Template.bind({});
Removable.args = { removable: true };
