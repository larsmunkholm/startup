import React, { ForwardedRef } from "react";
import { Link } from "react-router-dom";

interface BasicLinkProps {
    href: string;
    target?: "_blank" | "_self";
    children: React.ReactNode;
    className?: string;
    ariaLabel?: string;
    title?: string;
    itemScope?: boolean;
    itemProp?: string;
    itemType?: string;
    onClick?: () => void;
    onMouseEnter?: () => void;
    conventionalRouting?: boolean;
}

export const BasicLink = React.forwardRef(
    (
        {
            href,
            target,
            children,
            className,
            ariaLabel,
            title,
            itemScope,
            itemProp,
            itemType,
            onClick,
            onMouseEnter,
            conventionalRouting,
        }: BasicLinkProps,
        ref: ForwardedRef<HTMLAnchorElement>
    ): JSX.Element => {
        const isExternal = /^https?:\/\/|^mailto:|^tel:/.test(href);
        const anchorTarget = target ? target : isExternal ? "_blank" : "_self";

        const linkProp = {
            target: anchorTarget,
            rel: isExternal ? "noopener" : undefined,
            className: className,
            "aria-label": ariaLabel,
            title: title,
            itemScope: itemScope,
            itemProp: itemProp,
            itemType: itemType,
            onClick: onClick,
            onMouseEnter: onMouseEnter,
        };

        return conventionalRouting || isExternal ? (
            <a href={href} {...linkProp} ref={ref}>
                {children}
            </a>
        ) : (
            <Link to={href} {...linkProp} ref={ref}>
                {children}
            </Link>
        );
    }
);

BasicLink.displayName = "DA_BasicLink";
