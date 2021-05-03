const mtk = 80;
const bahasaIndonesia = 90;
const bahasaInggris = 89;
const ipa =  69;

const avg = (nilai1, nilai2, nilai3, nilai4) => {
  return (nilai1+nilai2+nilai3+nilai4)/4
}

const average = avg(mtk,bahasaIndonesia,bahasaInggris,ipa);

if(average >= 90 && average <= 100){
  console.log(`Rata-rata = ${average}`+"\n"+"Grade = A")
}else if(average >= 80 && average <= 89){
  console.log(`Rata-rata = ${average}`+"\n"+"Grade = B")
}else if(average >= 70 && average <= 79){
  console.log(`Rata-rata = ${average}`+"\n"+"Grade = C")
}else if(average >= 60 && average <= 69){
 console.log(`Rata-rata = ${average}`+"\n"+"Grade = D")
}else{
  console.log(`Rata-rata = ${average}`+"\n"+"Grade = E")
}