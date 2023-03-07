import React from "react";
import { ImageProps } from "../../../interfaces/imageProps.interface";

export interface ImageImgProps extends ImageProps {
    className?: string;
    width?: number;
    height?: number;
    itemProp?: string;
    onClick?: (event: React.MouseEvent) => void;
    style?: React.CSSProperties;
}

export const Image = React.forwardRef<HTMLImageElement, ImageImgProps>(
    ({ alt, src, ...rest }, ref) => <img ref={ref} alt={alt} src={src} loading="lazy" {...rest} />
);
Image.displayName = "Image";
