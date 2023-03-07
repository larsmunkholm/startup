import React from "react";
import { cn } from "../../../helpers/classNames.helper";
import S from "./Title.module.scss";

export enum TitleTag {
    DIV = "DIV",
    H1 = "H1",
    H2 = "H2",
    H3 = "H3",
    H4 = "H4",
    P = "P",
}

// A typeface is the design of lettering that can include variations in size,
// weight (e.g. bold), slope (e.g. italic), width (e.g. condensed), and so on.
export enum TitleTypeface {
    H1 = "H1",
    H2 = "H2",
    H3 = "H3",
    H4 = "H4",
}

interface TitleWithTypeface {
    h1?: never;
    h2?: never;
    h3?: never;
    h4?: never;
    typeface: TitleTypeface;
}

interface TitleWithH1 {
    h1: true;
    h2?: never;
    h3?: never;
    h4?: never;
    typeface?: never;
}

interface TitleWithH2 {
    h1?: never;
    h2: true;
    h3?: never;
    h4?: never;
    typeface?: never;
}

interface TitleWithH3 {
    h1?: never;
    h2?: never;
    h3: true;
    h4?: never;
    typeface?: never;
}

interface TitleWithH4 {
    h1?: never;
    h2?: never;
    h3?: never;
    h4: true;
    typeface?: never;
}

interface BaseProps {
    tag?: TitleTag;
    children: React.ReactNode;
    appendix?: React.ReactNode;
    noMargin?: boolean;
    fullWidth?: boolean;
    itemProp?: string;
    inheritColor?: boolean;
    numberOfLines?: number;
}

export type TitleProps = BaseProps &
    (TitleWithTypeface | TitleWithH1 | TitleWithH2 | TitleWithH3 | TitleWithH4);

export const Title = (props: TitleProps) => {
    const {
        typeface,
        tag,
        children,
        appendix,
        noMargin,
        fullWidth,
        itemProp,
        inheritColor,
        numberOfLines,
        ...headings
    } = props;

    const {
        h2 = typeface === TitleTypeface.H2,
        h3 = typeface === TitleTypeface.H3,
        h4 = typeface === TitleTypeface.H4,
    } = headings;

    const titleClass = cn(
        S.title,
        cn(h2 && S.h2, h3 && S.h3, h4 && S.h4),
        noMargin && S.noMargin,
        fullWidth && S.fullWidth,
        inheritColor && S.inheritColor
    );

    const HtmlTag = (tag ? tag === TitleTag.H2 : h2)
        ? "h2"
        : (tag ? tag === TitleTag.H3 : h3)
        ? "h3"
        : (tag ? tag === TitleTag.H4 : h4)
        ? "h4"
        : tag === TitleTag.P
        ? "p"
        : tag === TitleTag.DIV
        ? "div"
        : "h1";

    return (
        <div className={titleClass}>
            <HtmlTag
                className={cn(S.titleTag, numberOfLines && S.clamp)}
                itemProp={itemProp}
                // @ts-ignore
                style={{ "--title-line-clamp": numberOfLines }}
            >
                {children}
            </HtmlTag>

            {/** Appendix */}
            {appendix && <div className={S.appendix}>{appendix}</div>}
        </div>
    );
};
