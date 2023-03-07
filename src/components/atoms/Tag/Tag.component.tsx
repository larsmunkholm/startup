import React from "react";
import { cn } from "../../../helpers/classNames.helper";
import S from "./Tag.module.scss";

export interface TagProps {
    color: "good" | "warning" | "bad" | "neutral" | "alternativeNeutral";
    children: React.ReactNode;
}

export const Tag = (props: TagProps) => {
    const colorClasses: Record<TagProps["color"], string> = {
        good: S.good,
        warning: S.warning,
        bad: S.bad,
        neutral: S.neutral,
        alternativeNeutral: S.alternativeNeutral,
    };

    return <span className={cn(S.tag, colorClasses[props.color])}>{props.children}</span>;
};
