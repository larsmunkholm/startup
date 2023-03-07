import React from "react";
import { Story, Meta } from "@storybook/react";
import { Spinner, SpinnerProps } from "./Spinner.component";

export default {
    title: "Atoms/Spinner",
    component: Spinner,
} as Meta;

const Template: Story<SpinnerProps> = (args) => <Spinner {...args} />;

export const Default = Template.bind({});
Default.storyName = "Spinner";
