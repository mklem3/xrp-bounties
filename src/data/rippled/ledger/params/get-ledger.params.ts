/**
 * Optional Query Params that can be sent to
 * the getLedger method
 */
export default interface GetLedgerParams {
    /**
     * If true, include the identifying hashes of all transactions that are part of this ledger.
     */
    transactions?: boolean,
    /**
     * If true, include all transactions from this ledger as hex-formatted binary data. (If provided, overrides transactions.)
     */
    binary?: boolean,
    /**
     * If true, include all transactions from this ledger as nested JSON objects. (If provided, overrides binary and transactions.)
     */
    expand?: boolean
}