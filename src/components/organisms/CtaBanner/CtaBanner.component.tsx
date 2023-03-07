import React from "react";
import { Title } from "../../atoms/Title/Title.component";
import { Image } from "../../atoms/Image/Image.component";
import { cn } from "../../../helpers/classNames.helper";
import S from "./CtaBanner.module.scss";

export interface CtaBannerProps {
    image: string;
    title: string;
    text: string;
    imageFirst?: boolean;
}

export const CtaBanner = ({ image, title, text, imageFirst }: CtaBannerProps) => (
    <article className={cn(S.container, imageFirst || S.reverse)}>
        <div className={S.imageWrapper}>
            <figure className={S.image}>
                <Image src={image} alt="" />
            </figure>
        </div>

        <div className={S.contentWrapper}>
            <div className={S.content}>
                <Title h2 inheritColor>
                    {title}
                </Title>

                <div dangerouslySetInnerHTML={{ __html: text }} />
            </div>
        </div>
    </article>
);
