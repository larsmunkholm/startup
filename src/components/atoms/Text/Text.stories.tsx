import React from "react";
import { Story, Meta } from "@storybook/react";
import { defaultArgTypes } from "../../../helpers/defaultArgTypes.helper";
import { Text, TextProps } from "./Text.component";

export default {
    title: "Atoms/Text",
    component: Text,
    args: {
        html: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, illo reprehenderit! Alias atque aut dicta minus rem sequi similique voluptatum. Atque autem blanditiis cumque dignissimos est eveniet ex molestiae ullam.",
    },
    argTypes: defaultArgTypes,
} as Meta;

const Template: Story<TextProps> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.storyName = "Text";
