import { Transaction } from '../../transactions';

export default interface Ledger {
    accepted: string;
    account_hash: string;
    close_flags: string;
    close_time: number;
    close_time_human: string;
    close_time_resolution: string;
    closed: string;
    hash: string;
    ledger_hash: string;
    ledger_index: number;
    parent_close_time: number;
    parent_hash: string;
    seqNum: string;
    totalCoins: string;
    total_coins: string;
    transaction_hash: string;
    transactions: Transaction[];
    tx_count: string;
}
