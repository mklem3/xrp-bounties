import { Transaction } from '../data';
import { RippledResponse } from '../../base/responses';

export default interface GetTransactionResponse extends RippledResponse {
    /**
     * The requested transaction.
     */
    transaction: Transaction;
}