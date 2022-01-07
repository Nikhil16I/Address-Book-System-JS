//Adding Attribute For Contacts
class Contact{ 
    firstName
    lastName
    address
    state
    city
    zipCode
    email
    phoneNumber
//Constructor to initialize variables
    constructor(firstName,lastName,address,state,city,zipCode,email,phoneNumber){
        this.firstname=firstName
        this.lastname=lastName
        this.address=address
        this.state=state
        this.city=city
        this.zipcode=zipCode
        this.email=email
        this.phonenumber=phoneNumber
    }   
}
/*Validating Regex pattern for Every Attribute in Contact*/

function contactDetails(firstName,lastName,address,state,city,zipCode,email,phoneNumber){
    const firstNamePattern = /^[A-Z][a-zA-Z]{3,}/;
    let firstName_Check = firstNamePattern.test(firstName);

    const lastNamePattern = /^[A-Z][a-zA-Z]{3,}/;
    let lastName_Check = lastNamePattern.test(lastName);

    const addressPattern = /^[A-Z][a-zA-Z0-9]{3,}/;
    let address_Check = addressPattern.test(address);

    const statePattern = /^[A-Z][a-zA-Z]{3,}/;
    let state_Check = statePattern.test(state);

    const cityPattern = /^[A-Z][a-zA-Z]{3,}/;
    let city_Check = cityPattern.test(city);

    const zipCodePattern = /^[0-9]{3}[\s]{1}[0-9]{3}/;
    let zipCode_Check = zipCodePattern.test(zipCode) ;

    const emailPattern = /^[A-Za-z0-9]+(.[A-Za-z0-9]+)*@[^_\\W]+(.[^_\\W]+)?(?=(.[^_\\W]{3,}$|.[a-zA-Z]{2}$)).*$/;
    let email_Check = emailPattern.test(email);

    const phoneNumberPattern = /^[0-9]{2}[\s]{1}[0-9]{10}/;
    let phoneNumber_Check = phoneNumberPattern.test(phoneNumber);

        if(firstName_Check == true && lastName_Check == true && address_Check == true && state_Check == true && city_Check == true
            && zipCode_Check == true && email_Check == true && phoneNumber_Check == true){
            let newCotact = new Contact(firstName,lastName,address,state,city,zipCode,email,phoneNumber);
            console.log("Contact Added Successfully");
            console.log(newCotact);
        }else{
            throw 'Contact Details Are Invalid ! please check details';
        }
}
/*Function to edit Contact*/

var addressBook = new Array();

function editContact(findName,editedVariable,variableNewValue){
    addressBook.forEach(newContact => {
        if(newContact.firstName == findName){
            switch(editedVariable){
                case "firstName":
                    newContact.firstName = variableNewValue;
                    break;
                case "lastName":
                    newContact.lastName = variableNewValue;
                    break;
                case "address":
                    newContact.address = variableNewValue;
                    break;
                case "state":
                    newContact.state = variableNewValue;
                    break;
                case "city":
                    newContact.city = variableNewValue;
                    break;
                case "zipCode":
                    newContact.zipCode = variableNewValue;
                    break;  
                case "firstName":
                    newContact.firstName = variableNewValue;
                    break;
                case "lastName":
                    newContact.lastName = variableNewValue;
                    break;      
            }
        }
    })
}
function deleteContact(first_Name){
    if(addressBook.length == null){
        console.log("Contact Added In Address Book");
    }else{
        for(let i = 0; i <addressBook.length ; i++){
            if(addressBook[i].firstName == first_Name){
                addressBook.splice(i,1);
                console.log("Contact Deleted from Addressbook");
            }
        }
    }
}

function selectFunction(select){
    switch(select){
        case "contactDetails":
                //Calling Contact Details Fucntion
                contactDetails("Nikhil","Patil","Nagpur","Maharashtra","Nagpur","444444","nikhil@gmail.com","91 1234567890");
                contactDetails("Adesh","Jain","Aurangabad","Maharashtra","Aurangabad","444444","adijain@gmail.com","91 1098755454");
                console.log(addressBook);
                break;
        case "editContact":
                //Calling Edit Contact Function
                editContact("Nikihl","City","Nagpur");
                console.log(addressBook);
                break;
        case "deleteContact":
                //Calling Delete Contact Function
                deleteContact("Adesh");
                console.log(addressBook);
                break;
    }
}
function countContact(){
    addressBook.reduce(() => {
        count++;
    },count = 0);
    console.log("\nTotal Contacts In Address Book Are: "+count + "\n");
}
/*selecting a function from function*/

selectFunction("contactDetails");
selectFunction("countContact");
selectFunction("editContact");
selectFunction("deleteContact");
selectFunction("countContact");