import { sayHello } from "@/1-function";

describe("function", () => {
  it("should support in typescript", () => {
    expect(sayHello("Habibie")).toBe("Hello Habibie");

    // void
    const printHello = (name: string): void => console.info(`Hello ${name}`);
    printHello("Habibie");
  });

  it("should support default value", () => {
    // function parameter
    // - sama seperti di javascript, function di typescript bisa memiliki banyak parameter, rest parameter (variable argument) sampai default value
    // - fitur yang berbeda dengan javascript adalah, di typescript setiap parameter wajib diisi, kecuali kita tentukan sebagai optional menggunakan ? (tanda tanya)

    const sayHello = (name: string = "Guest"): string => `Hello ${name}`;

    expect(sayHello()).toBe("Hello Guest");
    expect(sayHello("Habibie")).toBe("Hello Habibie");
  });

  it("should support rest parameter", () => {
    // kalo rest parameter itu type-nya pasti harus array
    type Sum = (...val: number[]) => number;
    const sum: Sum = (...values: number[]): number => {
      let total = 0;
      for (const value of values) {
        total += value;
      }
      return total;
    };

    expect(sum(1, 2, 3, 4, 5)).toBe(15);
  });

  it("should support optional parameter", () => {
    const sayHello = (firstName: string, lastName?: string): string => {
      if (lastName) {
        return `Hello ${firstName} ${lastName}`;
      } else {
        return `Hello ${firstName}`;
      }
    };

    expect(sayHello("Habibie")).toBe("Hello Habibie");
    expect(sayHello("Habibie", "Syihab")).toBe("Hello Habibie Syihab");
  });

  it("should support function overloading in typescript", () => {
    // function overloading
    // - function overloading adalah kemampuan untuk membuat function dengan nama yang sama, namun dengan parameter input yang berbeda
    // - di javascript, membuat satu function dengan input data yang berbeda atau dengan output yang bisa menghasilkan data yang berbeda ini sudah biasa dilakukan sebenernya ya. Kenapa? Karena kan di javascript tidak ada istilahnya itu perbedaan tipe datanya ya, jadi semuanya bisa pake variable yang sama tipe datanya bisa berubah-rubah. Nah makannya di javascript kita biasanya bikin satu function ya, nanti tinggal di cek aja, function ini boleh tipe datanya apa
    // - namun hal ini kadang bisa membuat sebuah function tidak aman, kenapa? Karena bisa menghasilkan tipe data yang berbeda-beda, bahkan parameternya pun bisa berbeda-beda tipe datanya padahal jumlahnya sama
    // - typescript memberikan kemampuan function overloading, agar pembuatan function seperti ini lebih aman dilakukan. Kenapa lebih aman? Karena misalnya return value-nya bisa jelas tipe-nya apa, dan juga parameter-nya jelas tipe-nya apa walaupun nama function-nya itu sama.
    // Nah cara pembuatan function overloading memang agak sedikit tricky ya dibanding function biasanya. Jadi kita harus bikin template-nya dulu gitu ya, function-nya kira-kira ada berapa gitu ya, type-nya apa aja tipe-nya, dan juga return value-nya nanti apa aja, nanti baru kita bikin implementasinya. Nah diimplementasinya kita menggunakan type parameter-nya adalah any

    function callMe(value: number): number;
    function callMe(value: string): string; // kalo signature / template-nya doang yang ditulis tanpa function implementasinya akan error tentunya
    function callMe(value: any): any {
      // sebenernya kalo return value any gausah eksplisit ditulis return any juga gapapa
      if (typeof value === "string") {
        return value.toUpperCase();
      } else if (typeof value === "number") {
        return value * 10;
      }
    }

    // jadi intinya jadi aman secara tipe data aja sih di typescript ini, karena kan tidak ada function overloading di javascript, jadi ini tuh dicompile jadi javascript ya wajib pengecekan typeof sih makannya
    expect(callMe(10)).toBe(100);
    expect(callMe("Habibie")).toBe("HABIBIE");
  });

  it("should support function as parameter", () => {
    const sayHello = (name: string, filter: (name: string) => string): string =>
      `Hello ${filter(name)}`;

    const toUpper = (name: string): string => name.toUpperCase();

    expect(sayHello("Habibie", toUpper)).toBe("Hello HABIBIE");
    // dengan anonymous function
    expect(
      sayHello("Habibie", function (name: string): string {
        return name.toUpperCase();
      })
    ).toBe("Hello HABIBIE");
    // dengan arrow function
    expect(
      sayHello("Habibie", (name: string): string => name.toUpperCase())
    ).toBe("Hello HABIBIE");
  });
});
