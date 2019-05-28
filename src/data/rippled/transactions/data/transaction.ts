export default interface Transaction {
    /**
     * An identifying hash value unique to this transaction, as a hex string.
     */
    hash: string;
    /**
     * The sequence number of the ledger that included this ledger.
     */
    ledger_index: number;
    /**
     * The time when this transaction was included in a validated ledger.
     */
    date: Date;
    /**
     * The fields of this transaction object, as defined by the Transaction Format.
     * @see https://developers.ripple.com/transaction-formats.html
     */
    tx: Tx;
    /**
     * Metadata about the results of this transaction.
     */
    meta: Meta;
}

interface Tx {
    TransactionType: string;
    Flags: number;
    Sequence: number;
    TakerPays: Balance | number;
    TakerGets: Balance | number;
    Fee: string;
    SigningPubKey: string;
    TxnSignature: string;
    Account: string;
    LastLedgerSequence?: number;
    OfferSequence?: number;
    Expiration?: number;
}

interface Meta {
    TransactionIndex: number;
    AffectedNodes: AffectedNode[];
    TransactionResult: string;
}

interface AffectedNode {
    ModifiedNode: ModifiedNode;
    DeletedNode: DeletedNode;
    CreatedNode: CreatedNode;
}

interface Node {
    LedgerEntryType: string;
    LedgerIndex: string;
}

interface ModifiedNode extends Node {
    PreviousTxnLgrSeq: number;
    PreviousTxnID: string;
    PreviousFields: PreviousFields;
    FinalFields: FinalFields;
}

interface DeletedNode extends Node {
    LedgerEntryType: string;
    FinalFields: FinalFields2;
    PreviousFields: PreviousFields2;
}

interface CreatedNode extends Node {
    NewFields: NewFields;
}

interface Balance {
    value: string;
    currency: string;
    issuer: string;
}

interface BasicCommonFields {
    TakerPays: Balance | number;
    TakerGets: Balance | number;
    Balance: Balance;
}

interface PreviousFields2 extends BasicCommonFields {
    Flags?: number;
}

interface PreviousFields extends BasicCommonFields {
    OwnerCount?: number;
    Sequence?: number;
}

interface CommonFields extends BasicCommonFields {
    Flags: number;
    RootIndex: string;
    Sequence?: number;
    Account: string;
    Expiration?: number;
    HighNode: string;
    LowLimit: Balance;
    HighLimit: Balance;
    BookNode: string;
    OwnerNode: string;
    BookDirectory: string;
}

interface NewFields extends CommonFields {
    ExchangeRate: string;
    TakerPaysCurrency: string;
    TakerPaysIssuer: string;
    TakerGetsCurrency: string;
    TakerGetsIssuer: string;
}

interface FinalFields extends CommonFields {
    OwnerCount: number;
    RegularKey: string;
    Owner: string;
    LowNode: string;
    IndexPrevious: string;
    LowQualityIn?: number;
    LowQualityOut?: number;
    Domain: string;
}

interface FinalFields2 extends CommonFields {
    ExchangeRate: string;
    LowNode: string;
    TakerPaysCurrency: string;
    TakerPaysIssuer: string;
    TakerGetsCurrency: string;
    TakerGetsIssuer: string;
    PreviousTxnLgrSeq?: number;
    PreviousTxnID: string;
}

