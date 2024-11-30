describe("if statement (semua ini sama seperti di javascript)", () => {
  it("should support in typescript", () => {
    const examValue: number = 90;

    if (examValue > 80) {
      console.info("Good");
    } else if (examValue > 60) {
      console.info("Not Bad");
    } else {
      console.info("Try Again");
    }
  });

  it("should support ternary operator", () => {
    const value: number = 80;
    const say = value >= 75 ? "Congratulation" : "Try Again";
    console.info(say);
  });

  it("should support switch statement", () => {
    const sayHello = (name: string): string => {
      switch (name) {
        case "Habibie":
          return "Hi Habibie";
        case "Febi":
          return "Halo Febi";
        default:
          return "Hello";
      }
    };

    console.info(sayHello("Habibie"));
    console.info(sayHello("Febi"));
    console.info(sayHello("power bank"));
  });
});
