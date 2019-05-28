
/**
 * Optional Query Params that can be sent to
 * the getLedgerValidations method
 */
export default interface GetLedgerValidationsParams {
    /**
     * Maximum results per page. The default is 200. Cannot be more than 1000.
     */
    limit?: number,
    /**
     * Pagination key from previously returned response.
     */
    marker?: string,
    /**
     * Format of returned results: csv or json. The default is json.
     */
    format?: string
}