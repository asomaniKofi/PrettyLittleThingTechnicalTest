/**
 * Interface to help cast the transaction json data into an object
 */
export interface Transaction{
    sku:string;
    type:string;
    qty: number;
}