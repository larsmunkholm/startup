import React, { useState } from "react";
import { cn } from "../../../helpers/classNames.helper";
import { Icon, IconNames } from "../Icon/Icon.component";
import S from "./Alert.module.scss";

export enum AlertSeverityProps {
    Error = "Error",
    Warning = "Warning",
    Info = "Info",
    Success = "Success",
}

export interface AlertProps {
    content: React.ReactNode;
    severity?: AlertSeverityProps;
    className?: string;
    icon?: IconNames | false;
    shadow?: boolean;
}

export const Alert = ({ content, severity, className, icon, shadow }: AlertProps) => {
    const [hidden, setHidden] = useState(false);

    const alertClass = cn(
        S.alert,
        severity === AlertSeverityProps.Error && S.error,
        severity === AlertSeverityProps.Warning && S.warning,
        severity === AlertSeverityProps.Info && S.info,
        severity === AlertSeverityProps.Success && S.success
    );

    const iconName =
        typeof icon !== "undefined"
            ? icon
            : severity === AlertSeverityProps.Success
            ? IconNames.Add
            : severity === AlertSeverityProps.Warning
            ? IconNames.Close
            : severity === AlertSeverityProps.Error
            ? IconNames.Close
            : IconNames.Zoom;

    return hidden ? null : (
        <div className={cn(alertClass, className, shadow && S.shadow)}>
            {iconName && <Icon name={iconName} className={cn(S.icon)} />}
            <div className={S.alertText}>{content}</div>

            <button onClick={() => setHidden(true)} className={S.close}>
                <Icon name={IconNames.Close} />
            </button>
        </div>
    );
};
