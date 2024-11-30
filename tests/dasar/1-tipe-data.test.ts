describe("data type", () => {
  it("should support primitive", () => {
    const name = "Muhammad Habibie Syihab";
    const balance: number = 1_000_000;
    const isVip: boolean = true;

    console.info(name);
    console.info(balance);
    console.info(isVip);
  });

  it("should support any in typescript", () => {
    const person: any = {
      id: 1,
      name: "Muhammad Habibie Syihab",
      age: 23,
    };

    person.age = 24;
    person.address = "Indonesia";

    console.info(person);
  });

  it("should support null and undefined / optional parameter", () => {
    // caution: dijs null dan undefined itu tipe data yang berbeda jadi kalo mau tipe null ya harus eksplisit, shortcut untuk memberi tipe data undefined pada method adalah dengan ? (tanda tanya)
    const sayHello = (name?: string | null): void => {
      // jika name tidak falsy
      if (name) {
        console.info(`Hello ${name}`);
      } else {
        console.info("Hello");
      }
    };

    sayHello("Habibie");

    const name: string | undefined = undefined;
    sayHello(name);

    sayHello(null); // harus eksplisit
  });
});
