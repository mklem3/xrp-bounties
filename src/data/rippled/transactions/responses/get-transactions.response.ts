import { Transaction } from '../data';
import { RippledResponseList } from '../../base/responses';

export default interface GetTransactionsResponse extends RippledResponseList {
    /**
     * The requested transactions.
     */
    transactions: Transaction[];
}