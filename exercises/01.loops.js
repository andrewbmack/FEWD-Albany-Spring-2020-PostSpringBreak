/**
 * for each item in the contacts array 
 * 
 * store the results of firstName and lastName in an array
 * 
 * print the work and cell numers for each
 * 
 */


const contacts = [
  {
    firstName: "daenerys",
    lastName: "targaryen",
    img:
      "https://theartofgrowthandofeverything.files.wordpress.com/2018/06/daenerys-targaryen6.jpg?w=540",
    phone: {
      work: "5552002000",
      cell: "5552005000"
    },
    tags: ["breaker of chains", "the dragon queen", "queen of the andals"]
  },
  {
    firstName: "jon",
    lastName: "stark",
    img:
      "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Jon_Snow_Season_8.png/220px-Jon_Snow_Season_8.png",
    phone: {
      work: "5557702000",
      cell: "5557705000"
    },
    tags: ["the nights watch", "winterfell,", "king in the north"]
  },
  {
    firstName: "aria",
    lastName: "stark",
    img:
      "https://vignette.wikia.nocookie.net/gameofthrones/images/b/be/AryaShipIronThrone.PNG/revision/latest/scale-to-width-down/335?cb=20190520174300",
    phone: {
      work: "5557792009",
      cell: "5557795009"
    },
    tags: ["hero of the seven kingdoms", "the list", "faceless"]
  }
];
// let name4 = contacts[].firstName + ' ' + contacts[].lastName

// combine first and last names and phone numbers
let name = contacts[0].firstName + ' ' + contacts[0].lastName + ' : ' + contacts[0].phone.cell + '/' + contacts[0].phone.work
let name2 = contacts[1].firstName + ' ' + contacts[1].lastName + ' : ' + contacts[1].phone.cell + '/' + contacts[1].phone.work
let name3 = contacts[2].firstName + ' ' + contacts[2].lastName + ' : ' + contacts[2].phone.cell + '/' + contacts[2].phone.work

// store in an array
let names = [name, name2, name3]

// verify
console.log(names[0])


