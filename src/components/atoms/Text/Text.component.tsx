import React from "react";
import { cn } from "../../../helpers/classNames.helper";
import S from "./Text.module.scss";

interface TextWithChildren {
    html?: never;
    children: React.ReactNode;
}

interface TextWithString {
    html: string;
    children?: never;
}

interface BaseProps {
    bold?: boolean;
    dimmed?: boolean;
    noPadding?: boolean;
    smallText?: boolean;
    alignCenter?: boolean;
}

export type TextProps = BaseProps & (TextWithChildren | TextWithString);

export const Text = (props: TextProps) => {
    const combinedClassNames = cn(
        S.wrapper,
        props.bold && S.bold,
        props.noPadding || S.paddingBottom,
        props.dimmed && S.dimmed,
        props.smallText && S.smallText,
        props.alignCenter && S.alignCenter
    );

    return props.html ? (
        <div className={combinedClassNames} dangerouslySetInnerHTML={{ __html: props.html }} />
    ) : (
        <div className={combinedClassNames}>{props.children}</div>
    );
};
