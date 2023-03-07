export const blurActiveElement = () =>
    typeof document !== "undefined" &&
    typeof document.activeElement !== "undefined" &&
    (document.activeElement as HTMLInputElement).blur();
