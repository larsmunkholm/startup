import React, { useRef } from "react";
import { Story, Meta } from "@storybook/react";
import { defaultArgTypes } from "../../../helpers/defaultArgTypes.helper";
import { ContentBox, ContentBoxProps } from "./ContentBox.component";

export default {
    title: "Atoms/ContentBox",
    component: ContentBox,
    args: {
        smallVerticalPadding: false,
        loading: false,
    },
    argTypes: defaultArgTypes,
} as Meta;

const Template: Story<ContentBoxProps> = (args) => {
    const boxRef = useRef(null);
    return (
        <ContentBox ref={boxRef} {...args}>
            This is a content box
            <br />
            <button type="button" onClick={() => boxRef.current.alert()}>
                Show alert
            </button>
        </ContentBox>
    );
};

export const Default = Template.bind({});

export const SmallVerticalPadding = Template.bind({});
SmallVerticalPadding.args = {
    smallVerticalPadding: true,
};

export const Loading = Template.bind({});
Loading.args = {
    loading: true,
};
