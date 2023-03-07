export const uppercaseFirstLetter = (string: string): string =>
    `${string.slice(0, 1).toLocaleUpperCase() + string.slice(1)}`;
