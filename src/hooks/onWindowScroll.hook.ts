import { useCallback, useEffect, useRef } from "react";

interface Options {
    throttle?: number;
    runOnLoad?: boolean;
}

export const OnWindowScroll = (callback: () => void, options?: Options) => {
    const { throttle = 10, runOnLoad } = options || {};

    const lastExecution = useRef(null);
    const timeout = useRef(null);

    const execute = useCallback(() => {
        const now = Date.now();

        clearTimeout(timeout.current);
        timeout.current = setTimeout(callback, throttle);

        if (now - lastExecution.current >= throttle) {
            lastExecution.current = now;
            callback();
        }
    }, [callback, throttle]);

    useEffect(() => {
        if (runOnLoad) {
            callback();
        }

        lastExecution.current = 0;
        window.addEventListener("scroll", execute);

        return () => {
            clearTimeout(timeout.current);
            window.removeEventListener("scroll", execute);
        };
    }, [runOnLoad, callback, execute]);
};
