const printSegitiga = 5;

if(typeof printSegitiga === "number"){
  let n = printSegitiga;
  let string = "";
    for (let i = 0; i < n; i++) {
      for (let k = 1; k <= n - i; k++) {
        string += k;
      }
      string += "\n";
    }
  console.log(string);
}else{
  console.log("Data harus number")
}