import { timeLocale } from "@/types/utils/time";

/**
 * A general format function for dates
 * 
 * @param date - The provided date to be used in formatting
 * @param locale - The locale used for formatting (defaults to en-US)
 * @param config - The formatting options to be used
 * @returns string
 */
export function formatDate(date: string, locale?: timeLocale, config?: Intl.DateTimeFormatOptions): string {
    const d = new Date(date);
    return d.toLocaleDateString(locale || 'en-US', config);
}

/**
 * A formatter for blog dates
 * 
 * @param date - The provided blog date to be used in formatting
 * @param locale - The locale used for formatting (defaults to en-US)
 * @returns string
 */
export function formatBlogDate(date: string, locale?: timeLocale): string {
    return formatDate(date, locale, {
        day: "numeric",
        year: "numeric",
        month: "long"
    });
}