import React from "react";
import { Story, Meta } from "@storybook/react";
import { Guide, GuideProps } from "./Guide.component";

export default {
    title: "Molecules/Guide",
    component: Guide,
    args: {
        rteText:
            "Er du i tvivl om hvordan du bruger overblikket? Tag denne hurtige <a href='#'>interaktive guide til saldooversigten</a>",
    },
} as Meta;

const Template: Story<GuideProps> = (args) => <Guide {...args} />;

export const Default = Template.bind({});
Default.storyName = "Guide";
