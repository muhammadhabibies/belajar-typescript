import { Seller } from "@/10-seller";
import { Employee, Manager } from "@/11-employee";
import { Person } from "@/12-person";

describe("interface", () => {
  it("should support in typescript", () => {
    const seller: Seller = {
      id: 1,
      name: "Toko ABC",
      nib: "12341234",
      npwp: "12341234",
    };

    seller.name = "Toko Bako";
    // seller.nib = "2384723847"; // nah property readonly ini ga bisa diedit

    console.info(seller);
  });

  it("should support function interface", () => {
    interface AddFunction {
      (value1: number, value2: number): number;
    }

    const add: AddFunction = (value1: number, value2: number): number => {
      return value1 + value2;
    };

    expect(add(2, 2)).toBe(4);
  });

  it("should support indexable interface (array dan object)", () => {
    interface StringArray {
      [index: number]: string;
    }

    const names: StringArray = ["Muhammad", "Habibie", "Syihab"];
    console.info(names);
  });

  it("should support indexable interface for non number index (object)", () => {
    interface StringDictionary {
      [key: string]: string;
    }

    const dictionary: StringDictionary = {
      name: "Habibie",
      address: "Indonesia",
    };

    expect(dictionary["name"]).toBe("Habibie");
    expect(dictionary["address"]).toBe("Indonesia");
  });

  it("should support extends interface", () => {
    const employee: Employee = {
      id: "1",
      name: "Habibie",
      division: "IT",
    };

    console.info(employee);

    const manager: Manager = {
      id: "2",
      name: "Syihab",
      division: "IT",
      numberOfEmployees: 10,
    };

    console.info(manager);
  });

  it("should support function in interface", () => {
    const person: Person = {
      name: "Habibie",
      sayHello: function (name: string): string {
        return `Hello ${name}, my name is ${this.name}`;
      },
    };

    console.info(person.sayHello("Febi"));
  });

  it("should support intersection types", () => {
    interface HasName {
      name: string;
    }

    interface HasId {
      id: string;
    }

    // interface Person extends HasName, HasId {}
    // bisa aja gini buat interface baru, cuman tidak ada tambahan attribute apapun misalnya kasusnya. Nah dibanding bikin ini kita bisa langsung bikin type aja
    type Domain = HasId & HasName; // nah ini sama aja hasilnya, dan & ini adalah intersection types
    // nah interface dan type ini kalo dicompile hasilnya ya ga ada apa-apa di javscriptnya kosong. Jadi inin ya memang ditanganinya oleh typescript agar lebih aman

    const domain: Domain = {
      id: "1",
      name: "Habibie",
    };

    console.info(domain);
  });

  it("should support type assertions", () => {
    // kita punya sebuah variable person yang dimana dia punya name dan age. Nah tetapi ini tipe-nya adalah any.
    // nah misal saja: kita tahu bahwa variable person ini ada type-nya yang nama interface-nya itu "Person"
    // nah kita bisa paksa variable person ini agar dikonversi menjadi "Person" dengan cara contohnya kita bikin variable baru "person2" yang tipe-nya "Person", yang dimana ini adalah konversi dari variable "person" yang pertama ini. Jadi 'person' as 'Person'
    // nah dengan demikian, otomatis nanti dkonversi ya variable person ini menjadi tipe data-nya yang "Person"
    // nah yang penting kita tahu ya mau dikonversi menjadi tipe data apa, jadi kita bisa lakukan seperti ini dengan type assertions ini
    const person: any = {
      name: "Habibie",
      age: 23,
    };
    // nah disini biasanya kita tentukan type-nya entah langsung atau dengan interface, nah misalnya sebelumnya kita pakenya any. Jadi entah kita memanggil sebuah function di javascript misalnya, otomatis dia return-nya adalah any karena tipe data-nya tidak ada kan
    // nah lalu dia punya name dan age beserta value-nya misalnya
    // nah kita mau konversi ini menjadi tipe data "Person" misalnya, yang sudah kita buat interface-nya misal
    // const person2 yang tipe-nya Person, nah kita ambil value-nya dari variable person, lalu as Person, jadi as ini tipe-nya sebagai Person
    // nah kita bisa lakukan dengan cara seperti ini

    // nah saat kita menggunakan type assertions seperti ini, nah sebenarnya si typescript-nya itu, istilahnya tuh tidak menghiraukan apakah benar data atau isi-nya seperti type "Person" atau tidak gitu ya
    // contohnya di variable person type any ini dia ada age kan, sedangkan di interface "Person" itu tidak ada age gitu ya. Dan di person tidak ada sayHello, sedangkan di "Person" itu ada sayHello
    // jadi saat kita menggunakan type assertions, ini kita harus cek lagi dengan hati-hati ya karena ditakutkan datanya sebenarnya tidak ada, ya jadi seperti ini lah gitu ya
    // jadi kalo kita coba log person2, hasilnya ya dia punya name dan age tapi dia tidak punya sayHello gitu ya
    // jadi kalo kita mau, karena sudah dikonversi menjadi "Person" ya tipe-nya, jadi kalo kita mau akses person2.age, ini tidak ada! Karena kan memang di struktur interface "Person" ini tidak ada age. Nah selain ini kita bisa tiba-tiba panggil person2.sayHello("test"), nah kalo kita coba runnning, ini bisa jadi error (memang error bukan bisa jadi sih), nah jadi error ya kenapa? Karena sayHello itu tidak ada di person!
    // nah jadi hati-hati ketika kita melakukan konversi, si typescript-nya otomatis bisa melakukan konversi, tapi sebenarnya ini jadi tidak aman ya, kenapa? Karena kalo kita sampe salah melakukan konversi isinya atau valuenya gitu ya, maka bisa terjadi error ya dan ini gak akan ketauan errornya sampe kita jalankan aplikasinya
    // jadi ini adalah type assertions untuk mengubah tipe data

    const person2: Person = person as Person;
    // person2.age // nah ini akan error ga ada karena di interface Person itu tidak ada, tapi ya data age-nya ini ada
    // person2.sayHello("test"); // nah ini jadinya justru error, tapi intelisense-nya ada gitu tapi ya ga ada kan sayHello ini di variable person diatas, tapi di interface ada dan jadinya akan error karena tidak ada di variabel di atas, jadi hati-hati pake type assertions ini

    console.info(person2);
  });
});
