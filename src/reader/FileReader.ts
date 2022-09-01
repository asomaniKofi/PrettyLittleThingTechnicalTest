/**
 * Class which:
 * Reads both JSON files 
 * Combines data from both files depending on SKU
 * returns a promise containing the quantity & SKU
 */
import {Transaction} from "../interfaces/Transaction";
import {Stock} from "../interfaces/Stock";
import fs from "fs";
export class FileReader {
    private stockPath = "src\\data\\stock.json";
    private transPath = "src\\data\\transactions.json";
    private selectedSKU = "";
    private selectedQuantity = 0;
    /**
     * 
     * @param sku sku value we need to get data from both the stock & transaction JSON files
     * @returns a promise containing the selected quantity & SKU
     */
    public getData(sku:string):Promise<{sku: string, qty: number}>{
          this.selectedSKU = this.getSelectedSKU(sku);
          this.selectedQuantity = this.getSelectedQuantity(sku);
          const selectedPromise = this.getSelectedPromise();
          return selectedPromise;
    }
/**
 * 
 * @returns a promise containing the quantity & SKU
 */
    private getSelectedPromise():Promise<{sku: string, qty: number}> {
      return Promise.resolve({
        sku: this.selectedSKU,
        qty: this.selectedQuantity
      })
    }
/**
 * 
 * @param sku sku value we need to get data from both the stock JSON file
 * @returns the selected SKU value from the JSON file.
 */
    private getSelectedSKU(sku:string):string{
      const stocks = JSON.parse(fs.readFileSync(this.stockPath,"utf8")) as Stock[];
      for(let x = 0; x <= stocks.length; x++){
        if(stocks[x].sku == sku){
          this.selectedSKU = stocks[x].sku;
          break;
        }
      }
      return this.selectedSKU;
    }
/**
 * 
 * @param sku sku value we need to get data from both the stock JSON file
 * @returns the selected quantity from the transaction JSON file however we do return 0 if no transactions can be found.
 */
    private getSelectedQuantity(sku:String): number{
      const transactions = JSON.parse(fs.readFileSync(this.transPath,"utf8")) as Transaction[];
      for(let x = 0; x <= transactions.length; x++){
        if(transactions[x].sku == sku){
          this.selectedQuantity = transactions[x].qty;
          break;
        }else if(this.selectedSKU.length > 0){
          this.selectedQuantity = 0;
        }else {
          throw new Error("SKU doesn't exsist");
        }
      }
      return this.selectedQuantity;
    }
}