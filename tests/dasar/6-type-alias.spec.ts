import { Category, Product } from "@/6-type-alias";

describe("type alias", () => {
  it("should support in typescript", () => {
    const category: Category = {
      id: "1",
      name: "Handphone",
    };

    const product: Product = {
      id: "1",
      name: "Samsung S20",
      price: 20_000_000,
      category: category,
    };

    console.info(category);
    console.info(product);
  });
});
