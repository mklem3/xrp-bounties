import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetParams } from 'src/utils/http.utils';
import { GetLedgerParams, GetLedgerValidationsParams } from 'src/data/rippled/ledger/params';
import { GetLedgerResponse, GetLedgerValidationsResponse, GetLedgerValidationResponse } from 'src/data/rippled/ledger/responses';
import { GetTransactionParams, GetTransactionsParams } from 'src/data/rippled/transactions/params';
import { GetTransactionResponse, GetTransactionsResponse } from 'src/data/rippled/transactions/responses';

@Injectable()
export class RippledService {

    private baseDataUrl: string = 'https://data.ripple.com/v2';

    constructor(private http: HttpClient) { }

    /**
     * Retrieve a specific Ledger by hash, index, date, or latest validated.
     * @param ledger_identifier (Optional) An identifier for the ledger to retrieve: either the full hash in hex, 
     * an integer sequence number, or a date-time. If a date-time is provided, retrieve the ledger that was most recently closed at that time. 
     * If omitted, retrieve the latest validated ledger.
     * @param params Optionally, you can provide the following query parameters
     */
    public getLedger(ledger_identifier: string = '', params: GetLedgerParams = {}): Observable<GetLedgerResponse> {
        const url = `${this.baseDataUrl}/ledgers/${ledger_identifier}?${GetParams(params)}`;
        return this.http.get<GetLedgerResponse>(url);
    }

    /**
     * Retrieve a any validations recorded for a specific ledger hash. This dataset includes ledger versions that are outside the validated ledger chain. (New in v2.2.0 )
     * @param ledger_hash Ledger hash to retrieve validations for.
     * @param params Optionally, you can provide the following query parameters
     */
    public getLedgerValidations(ledger_hash: string, params: GetLedgerValidationsParams = {}): Observable<GetLedgerValidationsResponse> {
        const url = `${this.baseDataUrl}/ledgers/${ledger_hash}/validations?${GetParams(params)}`;
        return this.http.get<GetLedgerValidationsResponse>(url);
    }

    /** 
     * Retrieve a validation vote recorded for a specific ledger hash by a specific validator. This dataset includes ledger versions that are outside the validated ledger chain. (New in v2.2.0 )
     * @param ledger_hash Ledger hash to retrieve validations for.
     * @param pubkey Validator public key.
     */
    public getLedgerValidation(ledger_hash: string, pubkey: string): Observable<GetLedgerValidationResponse> {
        const url = `${this.baseDataUrl}/ledgers/${ledger_hash}/validations/${pubkey}`;
        return this.http.get<GetLedgerValidationResponse>(url);
    }

    /**
     * Retrieve a specific transaction by its identifying hash
     * @param hash The identifying hash of the transaction.
     * @param params Optionally, you can provide the following query parameters
     */
    public getTransaction(hash: string, params: GetTransactionParams = {}): Observable<GetTransactionResponse> {
        const url = `${this.baseDataUrl}/transactions/${hash}${GetParams(params)}`;
        return this.http.get<GetTransactionResponse>(url);
    }

        /**
     * Retrieve a specific transaction by its identifying hash
     * @param hash The identifying hash of the transaction.
     * @param params Optionally, you can provide the following query parameters
     */
    public getTransactions(params: GetTransactionsParams = {}): Observable<GetTransactionsResponse> {
        const url = `${this.baseDataUrl}/transactions/${GetParams(params)}`;
        return this.http.get<GetTransactionsResponse>(url);
    }
}