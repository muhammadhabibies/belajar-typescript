describe("union type", () => {
  it("should support in typescript", () => {
    let sample: number | string | boolean = "Habibie";
    console.info(sample);

    sample = 100;
    console.info(sample);

    sample = true;
    console.info(sample);
  });

  it("should support typeof operator", () => {
    // meskipun union type fleksibel, hati-hati karena bisa error (misal number atau boolean kan tidak punya method toUpperCase), jadi gunakan typeof agar aman, jadi ya simple-nya ketika pakai union type maka typeof juga dipakai juga

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
});
