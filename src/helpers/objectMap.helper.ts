export const objectMap = (obj, callback) =>
    Object.fromEntries(
        Object.entries(obj).map(([key, value], index) => [key, callback(value, key, index)])
    );
