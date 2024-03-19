const student={
    id: 1,
    name:'Kabir',
    dept: 'cse',
    regNo: 2019331543,
    address:{
        street: '32/2, Banani, Dhaka',
        road: 'Mahakhali',
        city: 'Dhaka',
        country: 'Bangladesh'
    },

    friends: ['Nahid', 'Arif', 'Maruf', 'Momin', 'Sazidul'],
    isYoung: true,
    isMarried: false
};

// console.log(student);
//{ id: 1, name: 'Kabir', age: 25, dept: 'cse', regNo: 2019331543 }
// {"id":1,"name":"Kabir","age":25,"dept":"cse","regNo":2019331543} =>after using stringfiy

const studentJSON= JSON.stringify(student);
console.log(studentJSON.name);
// console.log(studentJSON);
const studentObj= JSON.parse(studentJSON);
// console.log(studentObj);