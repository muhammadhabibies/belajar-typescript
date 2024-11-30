import { Customer, CustomerType } from "@/8-enum";

describe("enum", () => {
  it("should support in typescript", () => {
    const customer: Customer = {
      id: 1,
      name: "Habibie",
      type: CustomerType.GOLD,
    };

    console.info(customer);
  });
});
