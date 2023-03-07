import React, { useState } from "react";
import { Icon, IconNames } from "../../atoms/Icon/Icon.component";
import { cn } from "../../../helpers/classNames.helper";
import { Text } from "../../atoms/Text/Text.component";
import S from "./Guide.module.scss";

export interface GuideProps {
    icon?: IconNames;
    rteText: string;
}

export const Guide = ({ icon = IconNames.Add, rteText }: GuideProps) => {
    const [visible, setVisible] = useState(false);

    return visible ? (
        <div className={S.wrapper}>
            {icon && <Icon name={icon} className={cn(S.icon, rteText && S.spacing)} />}
            <div className={S.rteText}>
                <Text noPadding smallText html={rteText} />
            </div>
            <button type="button" onClick={() => setVisible(true)} className={S.removeButton}>
                <Icon name={IconNames.Close} className={S.removeIcon} />
            </button>
        </div>
    ) : null;
};
