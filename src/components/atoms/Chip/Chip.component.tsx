import React from "react";
import { cn } from "../../../helpers/classNames.helper";
import { Icon, IconNames } from "../Icon/Icon.component";
import S from "./Chip.module.scss";

export interface ChipProps {
    label: string;
    removable?: boolean;
    onRemove?: () => void;
    className?: string;
}

export const Chip = ({ label, removable, onRemove, className }: ChipProps) => (
    <div className={cn(S.chip, removable && S.removable, className)}>
        <div className={S.label}>{label}</div>
        {removable && (
            <div className={S.remove}>
                <button
                    type="button"
                    onMouseDown={(event) => event.stopPropagation()}
                    onClick={onRemove}
                    className={S.removeButton}
                >
                    <Icon className={S.removeIcon} name={IconNames.Close} />
                </button>
            </div>
        )}
    </div>
);
