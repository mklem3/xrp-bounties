import { Validation } from '../data';
import { RippledResponseList } from '../../base/responses';

export default interface GetLedgerValidationsResponse extends RippledResponseList {
    /**
     * The identifying hash of the ledger version requested.
     */
    ledger_hash: string;
    /**
     * All known validation votes for the ledger version.
     */
    validations: Validation[];
}

