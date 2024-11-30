describe("object", () => {
  it("should support in typescript", () => {
    const person: { id: string; name: string; hobbies?: string[] } = {
      id: "1",
      name: "Habibie",
    };

    console.info(person);

    person.id = "2";
    person.name = "Syihab";

    console.info(person);
  });
});
