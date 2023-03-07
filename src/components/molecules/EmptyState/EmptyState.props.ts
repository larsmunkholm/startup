import React from "react";
import { IconNames } from "../../atoms/Icon/Icon.component";
import { EmptyStateTypes } from "./EmptyState.component";

interface EmptyStateWithType {
    type: EmptyStateTypes;
    icon?: never;
}

interface EmptyStateWithIcon {
    type?: never;
    icon: IconNames;
}

interface EmptyStateBaseProps {
    title?: React.ReactNode;
    text?: React.ReactNode;
    smallText?: boolean;
    cta?: {
        text: string;
        onClick: () => void;
    };
}

export type EmptyStateProps = EmptyStateBaseProps & (EmptyStateWithIcon | EmptyStateWithType);
