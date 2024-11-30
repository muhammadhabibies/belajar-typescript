describe("Class", () => {
  it("should can create class, and then from class, should can create object", () => {
    class Customer {}
    class Order {}

    // mau eksplisit boleh, ga eksplisit tipe datanya boleh juga, dan tipe datanya ini dari class-nya
    const customer: Customer = new Customer();
    const order: Order = new Order();
    const test: Customer = "gorengan"; // tapi ko ini ga error ya? Kayaknya gara-gara kosong deh gatau juga
  });

  it("should support constructor", () => {
    // constructor
    // - constructor adalah method atau function yang dipanggil ketika pertama kali object dibuat dari class
    // - constructor sama seperti function biasanya, bisa memiliki parameter, yang membedakan adalah pada constructor, kita tidak perlu mengembalikan value. Nah kenapa tidak mengembalikan value? Karena memang kan value yang dibuat adalah si class-nya (mungkin class-nya itu sendiri maksudnya eh gatau juga) (jadi katanya kalo kita menginstansiasi object, new Customer() nah kurung buka kurung tutup kan, nah sebenernya kurung ini memanggil si constructor-nya!)

    class Customer {
      constructor() {
        console.info("Create new customer");
      }
    }
    class Order {}

    const customer: Customer = new Customer();
    const order: Order = new Order();
  });
});
