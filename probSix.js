// console the value of age
const student = {
  name: "Fredie",
  age: 26,
};
// console.log(student.age);

// console the value of city
let data = {
  location: [
    {
      latitude: "34.5, 37,8",
      longitude: "98.77, 58.7",
      city: "Hyderabad",
      country: "India",
    },
  ],
};
// const loc = data['location'][0]['city'];
// const loc = data.location[0].city;
// console.log(loc);

// -----------------

const user = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};

const comName = user.company.catchPhrase;
console.log(comName);

const geo = user.address.geo.lat;
// console.log(geo);

const mail = user.email;
// console.log(mail);

const address = user.address;
// console.log(address);

const city = user.address.city;
// console.log(city);
