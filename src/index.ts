"use strict";
import {FileReader} from "./reader/FileReader";
const reader = new FileReader();
reader.getData("LTV719449/39/39").then((value:{sku: string, qty: number})=>{
    console.log(`SKU: ${value.sku}`);
    console.log(`Quantity: ${value.qty}`);
});