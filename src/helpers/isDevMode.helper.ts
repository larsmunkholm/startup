/* globals process */

/**
 * Returns true when WebPack runs in development mode.
 * When in production mode, code for development will be removed.
 */
export const isDevMode = process.env.NODE_ENV === "development";
