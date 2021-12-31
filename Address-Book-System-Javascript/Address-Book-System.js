//Adding Attribute For Contacts
class Contact{ 
    firstname
    lastname
    address
    state
    city
    zipcode
    email
    phonenumber
//Constructor to initialize variables
    constructor(firstname,lastname,address,state,city,zipcode,email,phonenumber){
        this.firstname=firstname
        this.lastname=lastname
        this.address=address
        this.state=state
        this.city=city
        this.zipcode=zipcode
        this.email=email
        this.phonenumber=phonenumber
    }   
}
/*Validating Regex pattern for Every Attribute in Contact*/

const firstnameRegex =/^[A-Z][A-Z a-z]{3,}$/
let firstnamecheck = firstnameRegex.test("Nikhil")

const lastnameRegex = /^[A-Z][A-Z a-z]{3,}$/
let lastnamecheck =lastnameRegex.test("Patil")

const addressRegex = /^[A-Z][A-Z a-z][0-9]{3,}$/
let addresscheck = addressRegex.test("Street111Nagpur")

const stateRegex =/^[A-Z][A-Z a-z]{3,}$/
let statecheck = stateRegex.test("Maharashtra")

const cityRegex =/^[A-Z][A-Z a-z]{3,}$/
let cityCheck =cityRegex.test("Nagpur")

const zipcodeRegex =/^[0-9]{3}[\s][0-9]{3}$/
let zipcodeCheck =zipcodeRegex.test("444 444")

const emailRegex = /^[A-Za-z0-9_-]+([.][A-Za-z0-9_-]+)@[A-Za-z]+[A-Za-z]+([.][A-Za-z]+)$/
let emailCheck =emailRegex.test("Nikhil@gmail.com")

const phonenumberRegex =/^[1-9]{2}[\s][1-9]{10}$/
let phonenumberCheck =phonenumberRegex.test("91 9123456789")

/*Checking condition if Entered Details are Valid or not */

if(firstnamecheck==true && lastnamecheck==true && addresscheck==true && statecheck==true && cityCheck==true && zipcodeCheck==true && emailCheck==true && phonenumberCheck==true){

    console.log("Entered Contact Details are Valid")
    
    newContact = new Contact(firstname,lastname,address,state,city,zipcode,email,phonenumber)/*adding new Contact*/    
}
else{
    throw "Invalid Contact Details Please Input Valid Details" 
}
// console.log("Welcome to Addressbook System\n")
// console.log("Adding Contact -")
// console.log(newContact)
// console.log("Contact Added")
