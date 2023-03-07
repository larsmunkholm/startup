import React from "react";
import { Story, Meta } from "@storybook/react";
import { Image, ImageImgProps } from "./Image.component";

export default {
    title: "Atoms/Image",
    component: Image,
    args: {
        src: "https://placekitten.com/1920/1080",
        alt: "alt tekst",
    },
} as Meta;

// eslint-disable-next-line jsx-a11y/alt-text
const Template: Story<ImageImgProps> = (args) => <Image {...args} />;

export const Default = Template.bind({});
Default.storyName = "Image";
