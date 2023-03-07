import React, { ForwardedRef, MouseEvent } from "react";
import { Icon, IconNames } from "../Icon/Icon.component";
import { cn } from "../../../helpers/classNames.helper";
import S from "./ButtonLink.module.scss";

export interface ButtonLinkProps {
    title: string;
    icon?: IconNames;
    onClick: (event?: MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    noUnderline?: boolean;
    disabled?: boolean;
}

export const ButtonLink = React.forwardRef(
    (
        { className, title, icon, onClick, noUnderline, disabled }: ButtonLinkProps,
        ref: ForwardedRef<HTMLButtonElement>
    ): JSX.Element => (
        <button
            className={cn(S.buttonLink, noUnderline || S.underlined, className)}
            onClick={onClick}
            ref={ref}
            disabled={disabled}
        >
            {icon && <Icon name={icon} className={S.icon} />}
            <span className={S.title}>{title}</span>
        </button>
    )
);

ButtonLink.displayName = "ButtonLink";
