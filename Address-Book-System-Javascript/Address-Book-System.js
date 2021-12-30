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
console.log("Welcome to Addressbook System\n")
console.log("Adding Contact -")
let newContact = new Contact("Nikhil","Patil","Nagpur","Maharashtra","Nagpur",444444,"Nikhil@gmail.com",9123465687)/*adding new Contact*/
console.log(newContact)
console.log("Contact Added")