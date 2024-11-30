describe("array", () => {
  it("should same with javascript", () => {
    const names: string[] = ["Muhammad", "Habibie", "Syihab"];
    const values: number[] = [1, 2, 3];
    const ayam: Array<string> = ["gorengan"];
    const quantity: Array<number> = [1, 2, 3];

    console.info(names);
    console.info(values);
    console.info(ayam);
    console.info(quantity);
  });

  it("should support readonly array", () => {
    const hobbies: ReadonlyArray<string> = ["gorengan", "testing", "bro"];
    console.info(hobbies);
  });

  it("should support tuple", () => {
    // tuple adalah tipe data Array, yang panjang array dan tipe data di tiap index-nya sudah ditentukan sejak awal
    // ada tuple biasa dan ada tuple readonly yang tinggal ditambahain keyword readonly

    const person: readonly [string, string, number] = [
      "Muhammad",
      "Habibie",
      23,
    ];

    console.info(person[0]);
    console.info(person[1]);
    console.info(person[2]);
  });
});
