interface Options {
    decimals?: number;
}

export const formatNumber = (
    number: number | undefined,
    locale: string,
    options: Options = {}
): string =>
    (typeof number === "undefined" ? 0 : number).toLocaleString([locale, "en-GB"], {
        minimumFractionDigits: options.decimals,
        maximumFractionDigits: options.decimals,
    });
