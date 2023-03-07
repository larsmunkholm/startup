export const isEmailValid = (input: string): boolean => {
    const strippedInput = input.replace(/\s+/g, "");
    return /(.+)@(.+)\.(.+){2,}/.test(strippedInput);
};
