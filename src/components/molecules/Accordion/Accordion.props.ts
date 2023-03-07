import React from "react";

export interface AccordionProps {
    title: string;
    tagline?: string;

    showLargeHeader?: boolean;
    showToggleIcons?: boolean;
    showToggleLabel?: boolean;

    className?: string;
    children: React.ReactNode;
}

export enum AccordionViewState {
    Collapsed = "COLLAPSED",
    Expanded = "EXPANDED",
}
