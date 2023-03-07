import { useState } from "react";
import { OnWindowScroll } from "./onWindowScroll.hook";

export const UseScrollPosition = () => {
    const [scrollPosition, setScrollPosition] = useState({
        x: 0,
        y: 0,
    });
    OnWindowScroll(() => setScrollPosition({ x: window.pageXOffset, y: window.pageYOffset }));
    return scrollPosition;
};
