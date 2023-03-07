import React from "react";
import { Story, Meta } from "@storybook/react";
import { Title, TitleProps, TitleTag, TitleTypeface } from "./Title.component";

export default {
    title: "Atoms/Title",
    component: Title,
    args: {
        children: <>Over&shy;skrift</>,
        h1: false,
        h2: false,
        h3: false,
        typeface: undefined,
        tag: undefined,
        numberOfLines: 0,
    },
} as Meta;

const Template: Story<TitleProps> = ({ children, ...args }: TitleProps) => (
    <Title {...args}>{children}</Title>
);

export const Typeface1 = Template.bind({});
Typeface1.args = { h1: true };

export const Typeface2 = Template.bind({});
Typeface2.args = { h2: true };

export const Typeface3 = Template.bind({});
Typeface3.args = { h3: true };

export const TypefaceAttribute = Template.bind({});
TypefaceAttribute.args = {
    h1: undefined as never,
    h2: undefined as never,
    h3: undefined as never,
    typeface: TitleTypeface.H3,
};

export const DifferentTag = Template.bind({});
DifferentTag.args = {
    children: "P-tag with H2-typeface",
    h2: true,
    tag: TitleTag.P,
};

export const LineClamp = Template.bind({});
LineClamp.args = {
    children:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin malesuada ullamcorper porttitor. Sed aliquet, libero at condimentum pellentesque, nulla dui volutpat massa, sit amet consequat quam elit nec felis. Integer arcu est, rhoncus at mollis vitae, faucibus in velit. Ut dignissim eu justo non dictum. Suspendisse potenti. Aliquam a erat a enim pharetra sodales vel tincidunt lacus. Vestibulum fringilla tempor eleifend. Cras et ornare purus.",
    numberOfLines: 2,
};
