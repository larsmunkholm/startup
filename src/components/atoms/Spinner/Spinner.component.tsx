import React from "react";
import { cn } from "../../../helpers/classNames.helper";
import S from "./Spinner.module.scss";

export interface SpinnerProps {
    className?: string;
}

export const Spinner = ({ className }: SpinnerProps) => (
    <span className={cn(S.wrapper, className)}>
        <span className={S.spinner} />
    </span>
);
