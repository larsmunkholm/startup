import React, { useImperativeHandle, useRef, useState } from "react";
import { cn } from "../../../helpers/classNames.helper";
import S from "./ContentBox.module.scss";

export interface ContentBoxRef {
    alert: (ms?: number) => Promise<boolean>;
}

export interface ContentBoxProps {
    children: React.ReactNode;
    smallVerticalPadding?: boolean;
    smallMargin?: boolean;
    noPadding?: boolean;
    loading?: boolean;
    className?: string;
    onClick?: (event: React.MouseEvent) => void;
}

export const ContentBox = React.forwardRef(
    (
        {
            children,
            smallVerticalPadding,
            smallMargin,
            noPadding,
            loading,
            className,
            onClick,
        }: ContentBoxProps,
        ref
    ): JSX.Element => {
        const [showAlert, setShowAlert] = useState(false);
        const alertTimeout = useRef<NodeJS.Timeout | null>(null);

        useImperativeHandle(
            ref,
            (ms = 1500) => ({
                alert: () => {
                    if (alertTimeout.current) {
                        clearTimeout(alertTimeout.current);
                    }

                    setShowAlert(true);

                    return new Promise((resolve) => {
                        alertTimeout.current = setTimeout(() => {
                            setShowAlert(false);
                            resolve(true);
                        }, ms);
                    });
                },
            }),
            []
        );

        return (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
            <section
                className={cn(
                    S.container,
                    smallVerticalPadding && S.smallVerticalPadding,
                    smallMargin && S.smallMargin,
                    noPadding && S.noPadding,
                    className
                )}
                onClick={onClick}
            >
                {children}

                <div
                    className={cn(
                        S.indicator,
                        S.loadingIndicator,
                        loading && !showAlert && S.enabled
                    )}
                />
                <div className={cn(S.indicator, S.alertIndicator, showAlert && S.enabled)} />
            </section>
        );
    }
);

ContentBox.displayName = "ContentBox";
