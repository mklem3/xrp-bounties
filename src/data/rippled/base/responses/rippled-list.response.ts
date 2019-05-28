import RippledResponse from "./rippled.response";

export default interface RippledResponseList extends RippledResponse {
    /**
     * Number of Transactions returned.
     */
    count: number;
    /**
     * (May be omitted) Pagination marker.
     */
    marker: string;
}