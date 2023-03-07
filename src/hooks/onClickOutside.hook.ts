import { useEffect } from "react";

export const useOnClickOutside = (ref, callback: () => void, deps = []) => {
    useEffect(() => {
        if (deps.every((dep) => typeof dep !== "undefined" && dep !== false)) {
            const handleClickOutside = (event) => {
                if (Array.isArray(ref)) {
                    let executeCallback = true;
                    ref.forEach((thisRef) => {
                        if (thisRef.current && thisRef.current.contains(event.target)) {
                            executeCallback = false;
                        }
                    });

                    if (executeCallback) {
                        callback();
                    }
                } else if (ref.current && !ref.current.contains(event.target)) {
                    callback();
                }
            };
            document.addEventListener("mousedown", handleClickOutside);
            return () => document.removeEventListener("mousedown", handleClickOutside);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ref, ...deps]);
};
