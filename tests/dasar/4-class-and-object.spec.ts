describe("classes", () => {
  it("should support classes and object", () => {
    interface Classes {
      property1: string;
      property2?: string;
      method1: () => void;
      method2: () => void;
      method3: () => void;
    }

    class Testing {
      property1: string;
      #property2?: string;
      static #property3: string;

      static method4(): void {
        console.log(`Property2 = ${this.#property3}`);
      }

      constructor(param1: string, param2?: string) {
        this.property1 = param1;
        this.#property2 = param2;
      }

      method1(): void {
        console.log("Method 1 is called");
      }

      method2(): void {
        console.log("Property1 is " + this.property1);
      }

      method3(): void {
        console.log(`Property2 = ${this.#property2}`);
      }
    }

    let obj: Classes = new Testing("value1", "value2");

    // Mengakses metode dan properti dari objek
    obj.method1();
    obj.method2();
    obj.method3();
    Testing.method4();
    console.log(obj.property1);
    console.log(obj.property2);
  });
});
