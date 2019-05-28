import { Ledger } from "../data";
import { RippledResponse } from '../../base/responses';

export default interface GetLedgerResponse extends RippledResponse {
    /**
     * The requested ledger.
     */
    ledger: Ledger;
}