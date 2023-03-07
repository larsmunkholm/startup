import React, { useCallback, useId, useState, MouseEvent } from "react";
import { cn } from "../../../helpers/classNames.helper";
import { Icon, IconNames } from "../../atoms/Icon/Icon.component";
import { ButtonLink } from "../../atoms/ButtonLink/ButtonLink.component";
import { AccordionProps, AccordionViewState } from "./Accordion.props";
import S from "./Accordion.module.scss";

export const Accordion = (props: AccordionProps) => {
    const [viewState, setViewState] = useState<string>(AccordionViewState.Collapsed);

    const buttonId = useId();
    const regionId = useId();

    const onToggleButtonClicked = useCallback(
        (event: MouseEvent<HTMLElement>) => {
            event?.stopPropagation();

            if (viewState === AccordionViewState.Collapsed) {
                setViewState(AccordionViewState.Expanded);
            } else {
                setViewState(AccordionViewState.Collapsed);
            }
        },
        [viewState]
    );

    return (
        <div className={cn(S.wrapper, props.showLargeHeader && S.isLarge, props.className)}>
            <div
                className={S.header}
                id={buttonId}
                aria-controls={regionId}
                aria-expanded={viewState === AccordionViewState.Expanded}
            >
                {/** Title */}
                <div className={S.title}>{props.title}</div>

                <div className={S.toolbar}>
                    {/** Tagline */}
                    <div className={S.tagline}>{props.tagline}</div>

                    {/** Toggle: Expanded */}
                    {viewState === AccordionViewState.Expanded ? (
                        <div className={S.toggleWrapper}>
                            {props.showToggleIcons ? (
                                <Icon className={S.toggleIcon} name={IconNames.Close} />
                            ) : null}

                            {props.showToggleLabel ? (
                                <ButtonLink onClick={onToggleButtonClicked} title="Show less" />
                            ) : null}
                        </div>
                    ) : null}

                    {/** Toggle: Collapsed */}
                    {viewState === AccordionViewState.Collapsed && (
                        <div className={S.toggleWrapper}>
                            {props.showToggleIcons && (
                                <Icon className={S.toggleIcon} name={IconNames.Add} />
                            )}
                            {props.showToggleLabel && (
                                <ButtonLink onClick={onToggleButtonClicked} title="Show more" />
                            )}
                        </div>
                    )}
                </div>
            </div>

            {/** Children */}
            {viewState === AccordionViewState.Expanded && (
                <div id={regionId} role="region" aria-labelledby={buttonId} className={S.content}>
                    {props.children}
                </div>
            )}
        </div>
    );
};
