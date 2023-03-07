import React from "react";
import { Story, Meta } from "@storybook/react";
import { IconNames } from "../Icon/Icon.component";
import { Alert, AlertProps, AlertSeverityProps } from "./Alert.component";

export default {
    title: "Atoms/Alert",
    component: Alert,
    args: {
        content: (
            <span>
                This is a clean & <b>simple message</b>.
            </span>
        ),
        shadow: false,
    },
} as Meta;

const Template: Story<AlertProps> = (args) => <Alert {...args} />;

export const Success = Template.bind({});
Success.args = {
    severity: AlertSeverityProps.Success,
    content: (
        <>
            This is a clean & <a href="#">simple message</a>.
        </>
    ),
};

export const Warning = Template.bind({});
Warning.args = {
    severity: AlertSeverityProps.Warning,
};

export const Info = Template.bind({});
Info.args = {
    severity: AlertSeverityProps.Info,
};

export const Error = Template.bind({});
Error.args = {
    severity: AlertSeverityProps.Error,
};

export const WithCustomIcon = Template.bind({});
WithCustomIcon.args = {
    severity: AlertSeverityProps.Success,
    icon: IconNames.Truck,
};

export const WithoutIcon = Template.bind({});
WithoutIcon.args = {
    severity: AlertSeverityProps.Info,
    icon: false,
};

export const WithShadow = Template.bind({});
WithShadow.args = {
    content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non ultricies eros. Donec tincidunt condimentum porttitor. In lacinia maximus nunc, sit amet vehicula mi pretium in. Pellentesque suscipit congue leo, sed fringilla turpis iaculis imperdiet. Integer aliquam, dui dapibus placerat mattis, ex erat tempus felis, vel pharetra erat velit ac mauris. Suspendisse lorem risus, dapibus a molestie ac, tristique in mi. Nunc luctus massa at ultrices finibus. Praesent et odio in libero placerat euismod. Pellentesque suscipit vel nisl fermentum ornare. Vivamus neque sapien, aliquet eu lobortis a, tincidunt nec quam. Donec commodo lacus purus, vel sagittis felis fermentum ut. Integer quis massa tempus, fermentum risus id, porta ligula. Ut mattis imperdiet elit, a dapibus quam dignissim eget. Integer rutrum rutrum fringilla. Nulla sed volutpat sapien. Phasellus orci mauris, viverra a tempor eu, tincidunt non nibh.",
    severity: AlertSeverityProps.Info,
    shadow: true,
};
