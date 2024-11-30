describe("loop (semua test (fitur) ini sama saja seperti di javascript)", () => {
  it("should support for loop", () => {
    const names: string[] = ["Muhammad", "Habibie", "Syihab"];

    // for i
    for (let i = 0; i < names.length; i++) {
      console.info(names[i]);
    }

    // for of
    for (const name of names) {
      console.info(name);
    }

    // for in (penamaan variable tentu bebas, tapi kalo array itu ngambil index, kalo object ya key-nya)
    for (const index in names) {
      console.info(names[index]);
    }
  });

  it("should support while loop", () => {
    let counter: number = 0;
    while (counter < 10) {
      console.info(counter);
      counter++;
    }
  });

  it("should support do while loop", () => {
    let counter: number = 0;
    do {
      console.info(counter);
      counter++;
    } while (counter < 10);
  });

  it("should support looping keyword break and continue", () => {
    // seperti di javascript, pada saat kita melakukan perulangan, entah itu while, do while, atau bahkan for gitu ya, kita sering menggunakan kata kunci break dan continue. Ini sama seperti di javascript
    // break menghentikan pengulangan, continue melanjutkan ke pengulangan selanjutnya
    let counter: number = 0;
    do {
      counter++;

      if (counter == 10) {
        break;
      }

      if (counter % 2 == 0) {
        // kalo counter bisa dibagi dua (genap)
        continue;
      }

      // cuma bilangan ganjil saja kurang dari 10
      console.info(counter);
    } while (true);
  });
});

// javascript feature
// - semua fitur yang pernah kita bahas di kelas javascript, bisa dilakukan di typescript
// - seperti Operator Matematika, Perbandingan, Logika, String Template, Optional Chaining, With Statement, Default Parameter, Function Generator, Getter Setter, Destructuring, Modules, Standard Library dan lain-lain (jadi typescript tidak menggantikan javascript, melainkan melakukan improvement dari segi bahasanya. Kalau fiturnya, atau library bawaannya, itu tetep bisa kita gunakan juga. Jadi semua library bawaan dari javascript, atau fitur javascript, masih tetap bisa kita gunakan di typescript)
// - yang membedakan adalah, pada fitur TypeScript, karena Strongly Type, kita harus menentukan tipe data dari tiap variable dan parameter
// - pada kasus jika kita ingin seperti di javascript, dimana variable atau parameter bisa menggunakan tipe data apapun, maka kita harus menggunakan tipe data Any di TypeScript. Tapi ngapain pake typescript kalo pake any gitu, jadi sebisa mungkin hindari penggunaan tipe data any
