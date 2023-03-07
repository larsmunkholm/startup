import React from "react";
import { DA_LinkProps } from "../../../interfaces/linkProps.interface";
import { cn } from "../../../helpers/classNames.helper";
import { BasicLink } from "../BasicLink/BasicLink.component";
import { Icon, IconNames } from "../Icon/Icon.component";
import S from "./InlineLink.module.scss";

interface BaseProps {
    icon?: IconNames;
    onlyIcon?: boolean;
    isBold?: boolean;
    itemProp?: string;
    noUnderline?: boolean;
    className?: string;
}

export type InlineLinkProps = BaseProps & DA_LinkProps;

export const InlineLink = ({
    title,
    href,
    target,
    icon,
    onlyIcon,
    isBold,
    itemProp,
    noUnderline,
    className,
    conventionalRouting,
}: InlineLinkProps) => (
    <BasicLink
        href={href}
        target={target}
        className={cn(S.link, noUnderline || S.underline, className)}
        ariaLabel={onlyIcon ? title : undefined}
        conventionalRouting={conventionalRouting}
    >
        {icon && (
            <span className={S.iconWrapper}>
                <Icon name={icon} />
            </span>
        )}
        {!onlyIcon && (
            <span
                className={cn(S.text, isBold && S.bold)}
                itemProp={itemProp}
                dangerouslySetInnerHTML={{ __html: title }}
            />
        )}
        {onlyIcon && itemProp && <meta itemProp={itemProp} content={title} />}
    </BasicLink>
);
