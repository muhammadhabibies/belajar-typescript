describe("unknown and never", () => {
  it("should support unknown", () => {
    // unknown lebih spesifik, tidak seperti any, jadi unknown lebih aman

    // contoh yang bagus adalah melakukan wrapping sebuah json parser
    // data json can come in different forms dan method jsonParser tidak akan tahu the shape of data, tapi person yang menggunakan method harus tahu
    const jsonParser = (jsonString: string) => JSON.parse(jsonString);

    const myAccount = jsonParser(`{ "name": "Dorothea" }`);

    myAccount.name;
    myAccount.email;
    // variable jsonParser & myAccount ketika di hover itu type-nya any
    // it's possible untuk fix ini dengan generics, tapi ini possible di fix juga dengan unknown
    // berikut adalah solusi fix-nya
    const jsonParserUnknown = (jsonString: string): unknown =>
      JSON.parse(jsonString);

    const myOtherAccount = jsonParserUnknown(`{ "name": "Samuel" }`);

    // myOtherAccount.name; // nah ini jadi type save sehingga tidak bisa diakses sampe type di deklarasi kepada typescript
    // berikut adalah cara deklarasi type untuk ensure that api customers think about their typing up-front(intinya jadi ada type-nya jelas):
    type User = { name: string };
    const myUserAccount = jsonParserUnknown(`{ "name": "Samuel" }`) as User;
    myUserAccount.name; // nah sekarang baru bisa! Unknown is a great tool cnah

    // contoh lain entah darimana lupa:
    // method parameter
    const processData = (data: unknown): void => {
      if (typeof data === "string") {
        console.log(data.toUpperCase());
      } else {
        console.log("invalid parameter data type");
      }
    };

    // variable
    let gorengan: unknown;
    gorengan = "power bank";
    gorengan = 123;
  });

  it("should support never", () => {
    let ayam: never;
  });

  // ya gitulah lieur unknown sama never can paham kasusna
});
