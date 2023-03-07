export const isPhoneNumberValid = (input: string): boolean => {
    const strippedInput = input.replace(/\s+/g, "");
    return /((00|\+)\d{2})?(\d){8}/.test(strippedInput);
};
