export const getUrl = (
    base: string,
    path: string,
    parameters?: Record<string, unknown>
): string => {
    const allParameters: Record<string, unknown> = { ...parameters };

    const query = Object.keys(allParameters)
        .map((key) =>
            typeof allParameters[key] === "undefined" || allParameters[key] === null
                ? ""
                : Array.isArray(allParameters[key])
                ? (allParameters[key] as string[])
                      .map((arrayValue) => `${key}=${arrayValue}`)
                      .join("&")
                : `${key}=${
                      typeof allParameters[key] === "object"
                          ? JSON.stringify(allParameters[key])
                          : String(allParameters[key])
                  }`
        )
        .join("&")
        .replace(/&+/g, "&")
        .replace(/(&|\?&?)$/, "");

    return base + "/" + path.replace(/^\/+/, "").replace(/\/+$/, "") + (query ? `?${query}` : "");
};
