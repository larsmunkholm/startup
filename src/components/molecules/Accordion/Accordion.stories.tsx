import React from "react";
import { Story, Meta } from "@storybook/react";
import { Accordion } from "./Accordion.component";
import { AccordionProps } from "./Accordion.props";

export default {
    title: "Molecules/Accordion",
    component: Accordion,
    args: {
        title: "Lorem ipsum",
        showLargeHeader: false,
        showToggleIcons: false,
        showToggleLabel: false,
    } as AccordionProps,
} as Meta;

const Template: Story<AccordionProps> = (args) => (
    <Accordion {...args}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a sollicitudin lorem, ut
        elementum arcu. In commodo ex erat, non sodales ante suscipit non. Interdum et malesuada
        fames ac ante ipsum primis in faucibus. Nullam tristique ligula metus, sed consectetur diam
        faucibus placerat. Donec eu ante aliquet, dapibus neque a, fringilla elit. Nunc imperdiet
        leo urna, ac tincidunt massa imperdiet sit amet. Morbi neque ex, efficitur vitae mattis sed,
        aliquet vitae massa. Integer iaculis egestas ullamcorper. Praesent semper sollicitudin nibh
        eu dapibus. Phasellus vehicula nibh in convallis rutrum.
    </Accordion>
);

export const Default = Template.bind({});
Default.storyName = "Accordion";

export const WithTagline = Template.bind({});
WithTagline.args = {
    tagline: "dolor sit amet",
};

export const LargeHeader = Template.bind({});
LargeHeader.args = {
    showLargeHeader: true,
    tagline: "dolor sit amet",
};

export const ToggleIcons = Template.bind({});
ToggleIcons.args = {
    showToggleIcons: true,
};

export const ToggleLabel = Template.bind({});
ToggleLabel.args = {
    showToggleIcons: true,
    showToggleLabel: true,
};
