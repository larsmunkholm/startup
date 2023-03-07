import React, { ForwardedRef, LegacyRef, MouseEvent, Ref } from "react";
import { cn } from "../../../helpers/classNames.helper";
import { Icon, IconNames } from "../Icon/Icon.component";
import { BasicLink } from "../BasicLink/BasicLink.component";
import { Spinner } from "../Spinner/Spinner.component";
import S from "./Button.module.scss";

export enum ButtonColor {
    White = "White",
    Action = "Action",
    Alert = "Alert",
    Grey = "Grey",
    LightGrey = "LightGrey",
}

interface ButtonPropsBase {
    title?: string;
    className?: string;
    color?: ButtonColor;
    icon?: IconNames;
    isGhost?: boolean;
    small?: boolean;
    large?: boolean;
    hideText?: boolean;
    noWrap?: boolean;
    iconRight?: boolean;
    showSpinner?: boolean;
    fullWidth?: boolean;
    disabled?: boolean;
}

interface ButtonWithOnClick extends ButtonPropsBase {
    onClick: (event?: MouseEvent<HTMLButtonElement>) => void;
    href?: never;
    target?: never;
    submit?: never;
    conventionalRouting?: never;
}

interface ButtonWithSubmit extends ButtonPropsBase {
    onClick?: never;
    href?: never;
    target?: never;
    submit: true;
    conventionalRouting?: never;
}

interface ButtonWithHref extends ButtonPropsBase {
    onClick?: (event?: MouseEvent<HTMLButtonElement>) => void;
    href: string;
    target?: "_blank" | "_self";
    submit?: never;
    conventionalRouting?: boolean;
}

export type ButtonProps = ButtonWithOnClick | ButtonWithSubmit | ButtonWithHref;

export const Button = React.forwardRef(
    (
        {
            title,
            onClick,
            color,
            className,
            icon,
            href,
            target,
            isGhost,
            small,
            large,
            hideText,
            fullWidth,
            disabled,
            noWrap,
            submit,
            iconRight,
            conventionalRouting,
            showSpinner,
        }: ButtonProps,
        ref: ForwardedRef<HTMLAnchorElement | HTMLButtonElement>
    ) => {
        const buttonClass = cn(
            S.button,
            small && S.small,
            large && S.large,
            isGhost && S.ghost,
            iconRight && S.iconRight,
            noWrap && S.noWrap,
            icon && S.hasIcon,
            icon && (!title || hideText) && S.iconOnly,
            fullWidth && S.fullWidth,
            disabled && S.disabled,
            (color === ButtonColor.Action || (!color && !isGhost)) && S.action,
            color === ButtonColor.White && S.white,
            (color === ButtonColor.Grey || (!color && isGhost)) && S.grey,
            color === ButtonColor.LightGrey && S.lightGrey,
            color === ButtonColor.Alert && S.alert,
            className
        );

        return href ? (
            <BasicLink
                ref={ref as Ref<HTMLAnchorElement>}
                href={href}
                target={target}
                className={buttonClass}
                onClick={onClick}
                conventionalRouting={conventionalRouting}
                ariaLabel={hideText && title}
            >
                {showSpinner && !icon && (
                    <span className={S.spinner}>
                        <Spinner />
                    </span>
                )}
                <span className={S.content}>
                    {icon && !showSpinner ? (
                        <Icon name={icon} className={S.icon} />
                    ) : (
                        icon && showSpinner && <Spinner className={S.icon} />
                    )}
                    {title && !hideText && <span className={S.title}>{title}</span>}
                </span>
            </BasicLink>
        ) : (
            <button
                ref={ref as LegacyRef<HTMLButtonElement>}
                className={buttonClass}
                type={submit ? "submit" : "button"}
                onClick={onClick}
                disabled={disabled || showSpinner}
                aria-label={hideText && title}
            >
                {showSpinner && !icon && (
                    <span className={S.spinner}>
                        <Spinner />
                    </span>
                )}
                <span className={S.content}>
                    {icon && !showSpinner ? (
                        <Icon name={icon} className={S.icon} />
                    ) : (
                        icon && showSpinner && <Spinner className={S.icon} />
                    )}
                    {title && !hideText && <span className={S.title}>{title}</span>}
                </span>
            </button>
        );
    }
);

Button.displayName = "Button";
