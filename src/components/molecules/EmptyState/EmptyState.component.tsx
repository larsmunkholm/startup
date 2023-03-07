import React, { useMemo } from "react";
import { Button } from "../../atoms/Button/Button.component";
import { Icon, IconNames } from "../../atoms/Icon/Icon.component";
import { Spinner } from "../../atoms/Spinner/Spinner.component";
import { Text } from "../../atoms/Text/Text.component";
import { Title } from "../../atoms/Title/Title.component";
import { EmptyStateProps } from "./EmptyState.props";
import S from "./EmptyState.module.scss";

export enum EmptyStateTypes {
    Loading = "Loading",
    Error = "Error",
    NoContent = "NoContent",
    NoResults = "NoResults",
    FormSubmit = "FormSubmit",
    NoCartItems = "NoCardItems",
}

export const EmptyState = (props: EmptyStateProps) => {
    const title = useMemo(() => {
        // Custom title
        if (props.title) {
            return props.title;
        }
        switch (props.type) {
            // No cart items
            case EmptyStateTypes.NoCartItems:
                return <Icon name={IconNames.Close} className={S.icon} />;
            // Loading
            case EmptyStateTypes.Loading:
                return "Loading";
            // No Content
            case EmptyStateTypes.NoContent:
                return "No content";
            // No Results
            case EmptyStateTypes.NoResults:
                return "No results";
            // Error
            case EmptyStateTypes.Error:
                return "Error";
            // Form Submit
            case EmptyStateTypes.FormSubmit:
                return "Form submitted";
            // Fallback
            default:
                return "";
        }
    }, [props.type, props.title]);

    const icon = useMemo(() => {
        // Custom icon
        if (props.icon) {
            return <Icon name={props.icon} className={S.icon} />;
        }
        switch (props.type) {
            // No cart items
            case EmptyStateTypes.NoCartItems:
                return <Icon name={IconNames.Close} className={S.icon} />;
            // Loading
            case EmptyStateTypes.Loading:
                return <Spinner />;
            // No Content
            case EmptyStateTypes.NoContent:
                return <Icon name={IconNames.Close} className={S.icon} />;
            // No Results
            case EmptyStateTypes.NoResults:
                return <Icon name={IconNames.Close} className={S.icon} />;
            // Error
            case EmptyStateTypes.Error:
                return <Icon name={IconNames.Truck} className={S.icon} />;
            // Form Submit
            case EmptyStateTypes.FormSubmit:
                return <Icon name={IconNames.Add} className={S.icon} />;
            // Fallback
            default:
                return <Icon name={IconNames.Close} className={S.icon} />;
        }
    }, [props.type, props.icon]);

    return (
        <div className={S.wrapper}>
            {/** Icon */}
            {icon ? <div className={S.iconWrapper}>{icon}</div> : null}

            {/** Title */}
            <div className={S.emptyTitle}>
                <Title h3 noMargin>
                    {title}
                </Title>
            </div>

            {/** Text: String */}
            {typeof props.text === "string" && (
                <div className={S.text}>
                    <Text smallText={props.smallText} noPadding html={props.text} />
                </div>
            )}

            {/** Text: ReactNode */}
            {React.isValidElement(props.text) && (
                <div className={S.text}>
                    <Text smallText={props.smallText} noPadding>
                        {props.text}
                    </Text>
                </div>
            )}

            {/** Button */}
            {props.cta ? (
                <div className={S.cta}>
                    <Button title={props.cta.text} onClick={props.cta.onClick} />
                </div>
            ) : null}
        </div>
    );
};
