export default interface Validation {
    count: number;
    first_datetime: Date;
    flags: string;
    full: string;
    last_datetime: Date;
    ledger_hash: string;
    ledger_index: string;
    reporting_node: string;
    signature: string;
    signing_time: string;
    time: Date;
    type: string;
    validation_public_key: string;
    reporter_public_key: string;
}