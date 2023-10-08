// If
{
  if (new Date().getHours() < 20) {
    console.log("Hai belum malam");
  }
}

// If else
{
  if (new Date().getHours() < 18) {
    console.log("Hari belum sore");
  } else {
    console.log("Hari ini sore");
  }
}

// If else if
{
  const jam = new Date().getHours();

  if (jam < 10) {
    console.log("Hari belum siang");
  } else if (jam < 18) {
    console.log("Hari belum sore");
  } else {
    console.log("Hari belum malam");
  }
}
