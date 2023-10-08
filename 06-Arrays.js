// Array Length
{
  const buahan = ["Pisang", "Mangga", "Durian", "Rambutan"];
  let size = buahan.length;
  console.log(size, buahan); // 4 [ 'Pisang', 'Mangga', 'Durian', 'Rambutan' ]
}

// Array Pop
{
  const buahan = ["Pisang", "Mangga", "Durian", "Rambutan"];
  buahan.pop();
  console.log(buahan); // [ 'Pisang', 'Mangga', 'Durian' ]
}

// Array Shift
{
  const buahan = ["Pisang", "Mangga", "Durian", "Rambutan"];
  buahan.shift();
  console.log(buahan); // [ 'Mangga', 'Durian', 'Rambutan' ]
}

// Array Push
{
  const buahan = ["Pisang", "Mangga", "Durian", "Rambutan"];
  buahan.push("Apel");
  console.log(buahan); // [ 'Pisang', 'Mangga', 'Durian', 'Rambutan', 'Apel' ]
}

// Array Unshift
{
  const buahan = ["Pisang", "Mangga", "Durian", "Rambutan"];
  buahan.unshift("Nangka");
  console.log(buahan); // [ 'Nangka', 'Pisang', 'Mangga', 'Durian', 'Rambutan' ]
}
