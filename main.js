// Your code here.

// GET FIRST NAME
console.log("\n Get First Name");
function getFirstName(person){
	return person.firstName;
}
console.log(getFirstName({firstName: 'Colin', lastName: 'Jaffe'}));
console.log(getFirstName({firstName: 'Petra', lastName: 'Solano'}));


// GET LAST NAME
console.log("\n Get Last Name");
function getLastName(person){
	return person.lastName;
}
console.log(getLastName({firstName: 'Colin', lastName: 'Jaffe'}));
console.log(getLastName({firstName: 'Petra', lastName: 'Solano'}));


// GET FULL NAME
console.log("\n Get Full Name");
function getFullName(person){
	return `${person.firstName} ${person.lastName}`
}
console.log(getFullName({firstName: 'Colin', lastName: 'Jaffe'}));
console.log(getFullName({firstName: 'Petra', lastName: 'Solano'}));


// SET FULL NAME
console.log("\n Set First Name");
function setFirstName(person, newFirstName){
	person.firstName = newFirstName;
}
let person1 = {firstName: 'Colin', lastName: 'Jaffe'};
let person2 = {firstName: 'Petra', lastName: 'Solano'};
setFirstName(person1 , 'Redacted');
setFirstName(person2, 'Anthony');
console.log(person1);
console.log(person2);


// SET AGE
console.log("\n Set Age");
function setAge(person, newAge){
	person.age = newAge;
}
let dude1 = {firstName: 'Colin', lastName: 'Jaffe', age: 39};
let dude2 = {firstName: 'Petra', lastName: 'Solano', age: 29};
setAge(dude1, 45);
setAge(dude2, 35);
console.log(dude1);
console.log(dude2);


// GIVE BIRTHDAY
console.log("\n Give Birthday");
function giveBirthday(person){
	if (person.age === undefined){
		person.age = 1;
	}else{
		person.age++;
	}
}
let homie1 = {firstName: 'Colin', lastName: 'Jaffe', age: 39};
let homie2 = {firstName: 'Petra', lastName: 'Solano', age: 29};
let homie3 = {firstName: 'Baby', lastName: 'Jaffe'}
giveBirthday(homie1);
giveBirthday(homie2);
giveBirthday(homie3);
console.log(homie1);
console.log(homie2);
console.log(homie3);


// MARRY
console.log("\n Marry");
function marry(marry1, marry2){
	if (marry1.married === false && marry2.married === false){
		marry1.married = true;
		marry2.married = true;
	}
	if (marry1.spouseName === undefined){
		marry1.spouseName = `${marry2.firstName} ${marry2.lastName}`
	}
	if (marry2.spouseName === undefined){
		marry2.spouseName = `${marry1.firstName} ${marry1.lastName}`
	}
}
let marry1 = {firstName: 'Colin', lastName: 'Jaffe', married: false}
let marry2 = {firstName: 'Petra', lastName: 'Solano', married: false}
marry(marry1, marry2)
console.log(marry1) 
console.log(marry2) 


// DIVORCE
console.log("\n Divorce");
function divorce(div1, div2){
	if (div1.married === true && div2.married === true){
		div1.married = false;
		div2.married = false;
	}
	delete div1.spouseName;
	delete div2.spouseName;
}
const div1 = {firstName: 'Colin', lastName: 'Jaffe', married: true, spouseName: 'Petra Solano'}
const div2 = {firstName: 'Petra', lastName: 'Solano', married: true, spouseName: 'Colin Jaffe'}
divorce(div1, div2);
console.log(div1)  
console.log(div2) 





// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}


module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}
