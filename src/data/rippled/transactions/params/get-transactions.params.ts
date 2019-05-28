
export default interface GetTransactionsParams {
    /**
     * Filter results to this time and later.
     */
    start?: string,
    /**
     * Filter results to this time and earlier.
     */
    end?: string,
    /**
     * If true, return results in reverse chronological order. The default is false
     */
    descending?: boolean,
    /**
     * Filter transactions to a specific transaction type.
     */
    type?: string,
    /**
     * Filter transactions for a specific transaction result.
     */
    result?: string,	
    /**
     * If true, return transactions in binary form. The default is false.
     */
    binary?: boolean,
    /**
     * Maximum results per page. The default is 20. Cannot be more than 100.
     */
    limit?: number,
    /**
     * Pagination marker from a previous response.
     */
    marker?: string,	
}