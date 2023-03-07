import React from "react";
import { Story, Meta } from "@storybook/react";
import { copyTextToClipboard } from "../../../helpers/copyToClipboard.helper";
import { Icon, IconNames, IconProps } from "./Icon.component";

export default {
    title: "Atoms/Icon",
    component: Icon,
} as Meta;

const Template: Story<IconProps> = (args) => (
    <>
        <div
            style={{
                fontWeight: "bold",
                padding: "5px 10px",
                background: "lightyellow",
                border: "1px solid orange",
                borderRadius: "3px",
            }}
        >
            Click an icon to copy its component to the clipboard.
        </div>
        <br />
        <br />
        <div style={{ display: "flex", flexWrap: "wrap", maxWidth: "1000px" }}>
            {Object.keys(IconNames).map((graphic) => (
                <div key={graphic} style={{ flex: "0 0 auto" }}>
                    <button
                        type="button"
                        style={{
                            border: 0,
                            background: "transparent",
                            boxShadow: "none",
                            padding: "5px",
                            textAlign: "center",
                            cursor: "pointer",
                        }}
                        title="Click to copy to clipboard"
                        onClick={() => copyTextToClipboard(`<Icon name={IconNames.${graphic}} />`)}
                    >
                        <span
                            style={{
                                display: "block",
                                padding: "20px 20px 10px",
                            }}
                        >
                            <Icon {...args} name={IconNames[graphic]} style={{ width: "55px" }} />
                        </span>
                        <span
                            style={{
                                display: "block",
                                fontSize: "12px",
                                fontWeight: "bold",
                                margin: "10px 0",
                                padding: "0 2px",
                                textAlign: "center",
                            }}
                        >
                            {IconNames[graphic]}
                        </span>
                    </button>
                </div>
            ))}
        </div>
    </>
);

export const Default = Template.bind({});
