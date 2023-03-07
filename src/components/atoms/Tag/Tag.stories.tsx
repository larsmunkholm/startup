import React from "react";
import { Story, Meta } from "@storybook/react";
import { defaultArgTypes } from "../../../helpers/defaultArgTypes.helper";
import { Tag, TagProps } from "./Tag.component";

export default {
    title: "Atoms/Tag",
    component: Tag,
    args: { color: "good" } as TagProps,
    argTypes: defaultArgTypes,
} as Meta;

const Template: Story<TagProps> = (args) => <Tag {...args}>Lorem ipsum</Tag>;

export const Good = Template.bind({});
Good.args = { color: "good" };

export const Warning = Template.bind({});
Warning.args = { color: "warning" };

export const Bad = Template.bind({});
Bad.args = { color: "bad" };

export const Neutral = Template.bind({});
Neutral.args = { color: "neutral" };

export const AlternativeNeutral = Template.bind({});
AlternativeNeutral.args = { color: "alternativeNeutral" };
