import { useCallback, useEffect, useRef } from "react";

interface Options {
    debounce?: number;
    runOnLoad?: boolean;
}

export const OnWindowResize = (callback: () => void, options?: Options) => {
    const { debounce = 150, runOnLoad } = options || {};

    const timeout = useRef(null);
    const execute = useCallback(() => {
        clearTimeout(timeout.current);
        timeout.current = setTimeout(callback, debounce);
    }, [callback, debounce]);

    useEffect(() => {
        if (runOnLoad) {
            callback();
        }

        window.addEventListener("resize", execute);

        return () => {
            clearTimeout(timeout.current);
            window.removeEventListener("resize", execute);
        };
    }, [runOnLoad, callback, execute]);
};
