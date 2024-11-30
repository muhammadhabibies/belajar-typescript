export interface Seller {
  id: number;
  name: string;
  address?: string;
  readonly nib: string;
  readonly npwp: string;
}

// interface
// - interface adalah cara lain melakukan deklarasi data selain menggunakan Type
// - lantas kalau begitu, apa bedanya Interface dan Type?
// - interface bisa dikembangkan dengan mudah dibanding dengan Type
// - oleh karena itu, untuk tipe data yang kompleks, kebanyakan programmer typescript akan menggunakan interface dibandingkan menggunakan type

// cara pembuatannya hampir mirip type alias, hanya tidak menggunakan sama dengan saja, cara penggunaannya pun sama dengan type alias
// ketika di compile tsc, hasilnya akan kosong, jika membuat interface hasilnya akan kosong, kenapa kosong? Karena sebenernya deklarasi interface ini cuma digunakan oleh si typescript. Hasil setelah dicompile menjadi javascript, isi-nya adalah kosong
// jadi sebenarnya banyak yang menggunakan interface dibanding menggunakan type alias

// readonly properties
// - properties dapat kita jadikan sebagai readonly, yang artinya tidak bisa diubah lagi (artinya apa? Ketika dideklarasikan pertama kali datanya, kita bisa ubah, tapi setelah itu tidak bisa diubah lagi)
// - kita bisa menggunakan keyword readonly pada attribute tersebut (nah sebenarnya ketika kita compile menjadi javascript itu tidak ada istilahnya attribute readonly ya, jadi semuanya bisa diubah. Tapi saat ditypescript, itu bisa dicegah. Jadi kalo ada kode typescript lain yang ingin mencoba mengubah properties-nya, maka dia akan di error-kan ya, jadi tidak bisa di compile kode-nya)

// jadi readonly itu setelah pertama kali dibuat, itu tidak boleh diubah lagi. Jadi seperti property nim, setelah pertama kali dibuat, nah nim ini tidak boleh diubah lagi
// lalu readonly itu bisa optional, bisa juga tidak propertinya, tapi biasanya kalo readonly jarang yang optional property-nya karena kan dibuatnya diawal cnah. Tapi yang aku pahami bahwa ya boleh aja readonly itu optional dan ya memang boleh lah sepertinya gausah dipikirin sih ini mah ya

// function interface
// - di typescript, kita juga bisa membuat deklarasi Function dalam bentuk Interface (jadi di typescript kita bisa bikin sebuah interface, dimana sebenarnya interface ini representasi dari sebuah function)
// - dengan demikian ketika kita ingin membuat variable yang berisi function, kita bisa dengan mudah menggunakan interface tersebut

// indexable interface
// - interface juga bisa digunakan untuk membuat tipe data dengan jenis yang memiliki index, seperti Array atau Object

// extending interface
// - interface bisa melanjutkan (extends) ke interface lain
// - secara otomatis attribute Interface yang dilanjutkan dimiliki juga oleh interface tersebut
// - ini membuat kita lebih mudah ketika membuat tipe data yang kompleks

// function di interface
// - implementasi dari interface di javascript sebenarnya adalah sebuah object
// - seperti yang kita tahu, di javascript, kita bisa menambahkan function sebagai attribute di object
// - hal ini juga bisa kita lakukan di interface

// intersection types
// - intersection merupakan cara membuat tipe data baru dengan cara menggabungkan dua tipe data lain
// - hal ini sangat cocok ketika kita tidak bisa melakukan extends pada Interface (misal dari package sehingga kita tidak bisa mengubahnya nih)
// - kita bisa membuat type dengan menggunakan keyword & (dan) (yaitu gabungan dari 2 interface jadi intersection ini tuh) (jadi bisa jadi kita ga perlu bikin attribute baru pada interface sehingga kita pingin gabungin aja langsung tidak extends kasusnya, jadi ga bikin interface baru dengan extends karena ya ga butuh ada attribute tambahan kasusnya)

// type assertions
// - kadang, kita sering berada pada situasi dimana kita tahu tipe data yang kita gunakan, namun typescript tidak tahu tipe data tersebut
// - biasanya pada kasus ini kita menggunakan kode dari javascript (misal saja ini) sehingga membuat return value-nya berupa tipe data Any
// - pada kasus ini, kita bisa melakukan konversi ke tipe data yang kita mau menggunakan kata kunci as
// - ini disebut type assertions (jadi melakukan konversi tipe data)
