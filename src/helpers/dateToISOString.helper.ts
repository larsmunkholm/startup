import { formatISO } from "date-fns";

export const dateToISOString = (date: Date): string =>
    formatISO(date).replace(/\+\d+:\d+/, ".000Z");
