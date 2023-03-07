import React, { CSSProperties } from "react";
import { cn } from "../../../helpers/classNames.helper";
import { ReactComponent as Add } from "../../../assets/svg/icons/add.svg";
import { ReactComponent as Close } from "../../../assets/svg/icons/close.svg";
import { ReactComponent as Truck } from "../../../assets/svg/icons/truck.svg";
import { ReactComponent as Zoom } from "../../../assets/svg/icons/zoom.svg";
import S from "./Icon.module.scss";

export enum IconNames {
    Add = "Add",
    Close = "Close",
    Truck = "Truck",
    Zoom = "Zoom",
}

export interface IconProps {
    name: IconNames;
    className?: string;
    style?: CSSProperties;
    useSvgDimensions?: boolean;
}

export const Icon = ({ name, className, style, useSvgDimensions }: IconProps) => {
    let ReturnIcon = React.Fragment;

    switch (name) {
        case IconNames.Add:
            ReturnIcon = Add;
            break;
        case IconNames.Close:
            ReturnIcon = Close;
            break;
        case IconNames.Truck:
            ReturnIcon = Truck;
            break;
        case IconNames.Zoom:
            ReturnIcon = Zoom;
            break;
    }

    return (
        <span
            className={cn(S.wrapper, useSvgDimensions || S.fullSize, className)}
            style={style}
            role="none"
        >
            <ReturnIcon />
        </span>
    );
};
