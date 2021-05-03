const data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: 
    {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
  }
  
  const myData = {
    name: "Muhammad Rizky Ramadhan",
    username: "Zidan",
    email: "zidan.muh88@gmail.com",
    hobby: "Basketball"
  }
  
  const concatData = {
    ...data,
    ...myData
  }
  
  const {street,city} = concatData.address
  console.log(street,city)