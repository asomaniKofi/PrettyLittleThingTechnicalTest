import {FileReader} from "../src/reader/FileReader";

describe("testing file reader", ()=>{
    const reader = new FileReader();
    test("should return a promise", ()=>{
        expect(reader.getData("LTV719449/39/39")).toMatchObject(Promise.resolve({
            sku: "LTV719449/39/39",
            qty: 10
          }));
          expect(reader.getData("IQZ340003/37/30")).toMatchObject(Promise.resolve({
            sku: "IQZ340003/37/30",
            qty: 0
          }));
          expect(reader.getData("QWP084011/40/33")).toMatchObject(Promise.resolve({
            sku: "QWP084011/40/33",
            qty: 9
          }));
          expect(reader.getData("TVU730483/47/65")).toMatchObject(Promise.resolve({
            sku: "TVU730483/47/65",
            qty: 7
          }));
          expect(reader.getData("WBF948633/60/34")).toMatchObject(Promise.resolve({
            sku: "LTV719449/39/39",
            qty: 9
          }));
    });
});