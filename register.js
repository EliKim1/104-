//object literal
//arrays[]
//objects{}
//anonimous abject
let petSalon = {
    //attributes
    name:"The FasionPet",
    address:"Ave University 768",
    hours:{
        open:"9:00am",
        close:"6:00pm"
    },
    pets:[
        {
            name:"Scoobt",
            age:50,
            breed: "Dane",
            gender: "Male",
            service: "Grooming",
            ownerName: "Shaggy",
            contactPhone: "444-444-4444"
        },
        {
            name:"Kassu",
            age:1,
            breed: "Maltese",
            gender: "Male",
            service: "Grooming + Nail trim + Color",
            ownerName: "Erog Krasivi",
            contactPhone: "484-444-4444"
        },
        {
            name:"Kassu",
            age:16,
            breed: "Buldock",
            gender: "Male",
            service: "Grooming + Nail trim + Color",
            ownerName: "Elena Frog",
            contactPhone: "544-444-4444"
        },
        {
            name:"Veter",
            age:5,
            breed: "Dog",
            gender: "Female",
            service: "Shamboo",
            ownerName: "Erog Krasivi",
            contactPhone: "444-444-4244"
        }
    ]
}

  //anonymous objeckt ? 
for(let i=0;i<petSalon.pets.length;i++){
    console.log(petSalon.pets[i].name);
}
//calling the function
function displayInfo(){
    document.getElementById("info").innerHTML=`Welcome to the ${petSalon.name} family. It is available at ${petSalon.address} from ${petSalon.hours.open} to ${petSalon.hours.close}`;
}

//console.log(petSalon.hours.close);
//console.log(petSalon.pets[0]);

//calling the function
displayInfo();

function showAlert(){
    alert("Number of registered pets!" + petSalon.pets.length)
    console.log("Number of registered pets!" + petSalon.pets.length)
    document.getElementById("petsRegistered").innerHTML=`Pets registered in ${petSalon.pets.length}`;
}




