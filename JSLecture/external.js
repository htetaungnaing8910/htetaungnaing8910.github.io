// string data type
// let name = "Kyaw Zin Aung";
// let name = "Kyaw ZIn Aung";
let name = 'Kyaw Zin Aung';
console.log(name);
console.log(typeof(name));

// numberic data type
let age = 30;
console.log(age);
console.log(typeof(age));

// boolean data type (true / false)
let isStudent = true;
console.log(isStudent);
console.log(typeof(isStudent));

// underfined data type
let underfinedVar;
console.log(underfinedVar);
console.log(typeof(underfinedVar));

// null data type
let nullVar = null;
console.log(nullVar);
console.log(typeof(nullVar));

// array data type => Array() / [] => index start from 0
// let studentLists = new Array('Aung Aung','Aye Aye','Tun Tun','Hla Hla');
let studentLists = ['Aung Aung','Aye Aye','Tun Tun','Hla Hla'];
console.log(studentLists);
console.log(typeof(studentLists));
console.log(studentLists.length);
console.log(studentLists[1]);


// object data type key : value;

let student = {
    name : "Kyaw Zin Aung",
    age : 30,
    address : "Myotha , Myanmar",
    education : "B.C.Sc"
}
console.log(student);
console.log(typeof(student));
console.log(student.address);

