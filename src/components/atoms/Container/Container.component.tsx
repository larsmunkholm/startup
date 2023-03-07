import React, { ForwardedRef } from "react";
import { cn } from "../../../helpers/classNames.helper";
import S from "./Container.module.scss";

interface ContainerProps {
    children: React.ReactNode;
    noVerticalPadding?: boolean;
    noRightPadding?: boolean;
    noLeftPadding?: boolean;
    noTopPadding?: boolean;
    noBottomPadding?: boolean;
    flexColumn?: boolean;
    keepNestedPadding?: boolean;
    noOverflow?: boolean;
    className?: string;
}

export const Container = React.forwardRef(
    (
        {
            children,
            noVerticalPadding,
            noRightPadding,
            noLeftPadding,
            noTopPadding,
            noBottomPadding,
            flexColumn,
            keepNestedPadding,
            noOverflow,
            className,
        }: ContainerProps,
        ref: ForwardedRef<HTMLDivElement>
    ): JSX.Element => (
        <div
            className={cn(
                S.container,
                noVerticalPadding && S.noVerticalPadding,
                noRightPadding && S.noRightPadding,
                noLeftPadding && S.noLeftPadding,
                noTopPadding && S.noTopPadding,
                noBottomPadding && S.noBottomPadding,
                flexColumn && S.flexColumn,
                // eslint-disable-next-line css-modules/no-undef-class
                keepNestedPadding && S.keepNestedPadding,
                noOverflow && S.noOverflow,
                className
            )}
            ref={ref}
        >
            {children}
        </div>
    )
);

Container.displayName = "Container";
