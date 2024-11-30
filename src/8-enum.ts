export enum CustomerType {
  REGULAR = "REGULAR",
  GOLD = "GOLD",
  PLATINUM = "PLATINUM",
}

export type Customer = {
  id: number;
  name: string;
  type: CustomerType;
};

// enum: tipe data typescript (tidak ada di javascript) yang value-nya sudah pasti
// secara default enum ini akan dikonversi menjadi string di javascript, namun bisa juga dikonversi menjadi number kalo kita mau
// jadi ini adalah tipe data yang memang sudah ditentukan ya isi dari enum-nya apa aja. Atau nanti ketika dikonversi jadi javascript, ya sebenernya sih jadi string. Tapi dengan menggunakan tipe data enum kita bisa tentukan isi dari value string-nya itu hnaya boleh value tertentu saja
// cara membuatnya adalah dengan menggunakan keyword enum, diikuti dengan nama tipe data-nya, lalu di dalamnya tinggal sebutkan ya tipe data-nya apa saja, lalu pemisah antar tipe data atau value-nya adalah koma
// cara penggunaan atau pengaksesan enum: cukup kita sebutkan tipe enum-nya, diikuti oleh titik, lalu nama enum-nya apa atau tipe data atau value enum-nya apa
// ingat bahwa value akan jadi number kalau tidak ditambah sama dengan, jadi kalau urutan diubah, maka value juga berubah, jadi dengan index number ini tidak disarankan

// enum di javascript
// - secara default, enum di typescript akan dikonversi menjadi tipe data number
// - kadang kita ingin ubah dari number menjadi string, kita bisa melakukan hal ini ketika kita membuat enum-nya dengan menggunakan sama dengan apa value-nya, kalau tidak akan menggunakan default index dari 0
// - jadi tambahkan sama dengan ketika pembuatan enum-nya dengan nilai asli nantinya, jadi sebaiknya jangan gunakan default value default index. Dan kalau memang mau menggunakan value number, mending eksplisit sebutkan = value number-nya supaya kalau urutannya diacak atau tidak sengaja teracak pun data enum akan tetap konsisten value-nya

// kesimpulannya: jadi ini lebih aman ketika misalnya ada sebuah data entah itu number atau string tapi dia sudah ditentukan nilainya bolehnya apa aja. Jadi gunakanlah enum ketika ada kasus seperti ini
