const users = [ {id: 201, name: 'john', job: 'doctor'} ]
// console.log(users[0].name);

//-----------------------
const data = {
    count: 5000,
    data: [
        {id: 1, name: 'Alice', job: 'leader'},
        {id: 2, name: 'Bob', job:'banker'}
    ]
}
const firstName = data.data[0].name;
// console.log(firstName);


//-----------------------
const user = {
    id: 4002,
    name: 'Steve Smith',
    address:{
        street:{
            first: '24/A Sydney lane',
            second: 'third floor',
            third: 'right side'
        },
        postOffice: 'cantonment',
        city: 'Sydney'
    }
}

const userFloor = user.address.stret?.second;
console.log(userFloor);