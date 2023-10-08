//Contoh penggunaan salah ❌
{
  const mobil = "Nissan GTR";
  mobil = "Toyota Supra"; // Penyebab Error

  console.log(mobil); // Error
}

//Contoh penggunaan benar ✅
{
  const motor = "Vario";

  console.log(motor); // Vario
}

//Contoh penggunaan dengan Array
const laptop = ["Acer", "Asus", "Lenovo", "MSI"]; // baris array dimulai dari angka [0] yaitu "Acer"

//Mengganti nilai const Array
laptop[0] = "Dell";
console.log(laptop); // [ 'Dell', 'Asus', 'Lenovo', 'MSI' ]

laptop.push("Axio");
console.log(laptop); // [ 'Dell', 'Asus', 'Lenovo', 'MSI', 'Axio' ]

// Menambahkan nilai dan mengubah nilai const
{
  const handphone = { type: "android", merk: "Oppo", warna: "Putih" };
  handphone.merk = "Xiaomi";
  handphone.releaseyear = "2020";

  console.log(handphone);

  // Output :
  //   {
  //   type: 'android',
  //   merk: 'Xiaomi',
  //   warna: 'Putih',
  //   releaseyear: '2020'
  // }
}

//Block Scope
{
  const tahun = 2023;
  console.log(tahun); // 2023
}

console.log(tahun); // Tidak bisa dipanggil karna const tahun berada di dalam {}
