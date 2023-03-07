import React from "react";
import { Story, Meta } from "@storybook/react";
import { CtaBanner, CtaBannerProps } from "./CtaBanner.component";

export default {
    title: "Organisms/CTA Banner",
    component: CtaBanner,
    args: {
        image: "https://via.placeholder.com/650x350/",
        title: "Lorem ipsum dolor",
        description:
            "Quisque sed rutrum orci. Pellentesque semper tortor in augue congue maximus. Nullam quis tempor purus, sed ultrices quam. Sed consequat aliquam sem id vestibulum.",
        imageFirst: false,
    },
} as Meta;

const Template: Story<CtaBannerProps> = (args) => <CtaBanner {...args} />;

export const Default = Template.bind({});

export const ImageFirst = Template.bind({});
ImageFirst.args = {
    imageFirst: true,
};
