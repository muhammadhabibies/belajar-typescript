describe("composing types (create complex types by combining simple ones, there are two popular ways to do so: unions & generics", () => {
  it("should support unions in typescript", () => {
    let sample: number | string | boolean = "Habibie";
    console.info(sample);

    sample = 100;
    console.info(sample);

    sample = true;
    console.info(sample);

    // meskipun union type fleksibel, hati-hati karena bisa error (misal number atau boolean kan tidak punya method toUpperCase), jadi gunakan typeof agar aman, jadi ya simple-nya ketika pakai union type maka typeof juga dipakai juga
    // berikut list typeof variable:
    // string => typeof s === "string"
    // number => typeof n === "number"
    // boolean => typeof b === "boolean"
    // undefined => typeof undefined === "undefined"
    // function => typeof f === "function"
    // array => Array.isArray(a)

    const process = (
      value: number | string | boolean
    ): number | string | boolean => {
      if (typeof value === "string") {
        return value.toUpperCase();
      } else if (typeof value === "number") {
        return value + 2;
      } else {
        return !value;
      }
    };

    expect(process("Habibie")).toBe("HABIBIE");
    expect(process(100)).toBe(102);
    expect(process(true)).toBe(false);
  });

  it("should support generics", () => {
    type StringArray = Array<string>;
    type NumberArray = Array<number>;
    type ObjectWithNameArray = Array<{ name: string }>;
  });
});
