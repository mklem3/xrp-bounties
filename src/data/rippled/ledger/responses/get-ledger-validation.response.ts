import { Validation } from '../data';

export default interface GetLedgerValidationResponse extends Validation {
    /**
     * The value success indicates that this is a successful response.
     */
    result: string;
}