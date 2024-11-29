/**
 * Get the max amount of pages needed for pagination
 * 
 * @param total - The total amount of items to be paginated
 * @param perPage - The per page amount of items
 * @returns number
 */
export function getMaxPage(total: number, perPage: number): number {
    let amount = Math.round(total / perPage);

    if ((total - (perPage * amount)) % perPage > 0) {
        amount += total % perPage > 0 ? 1 : 0;
    }

    return amount < 1 ? 1 : amount;
}

/**
 * Get the starting index for the pagination
 * 
 * @param perPage - The per page amount of items
 * @param current - The current page of the pagination
 * @returns number
 */
export function getStartIndex(perPage: number, current?: number): number {
    return current && current !== 1 ? (perPage * (current - 1)) + 1 : 0;
}

/**
 * Get the ending index for the pagination
 * 
 * @param perPage - The per page amount of items
 * @param current - The current page of the pagination
 * @returns number
 */
export function getEndIndex(perPage: number, current?: number): number {
    return current && current !== 1 ? (perPage * current) + 1 : perPage;
}
