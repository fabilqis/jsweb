//level 3 & 4


const guest1 = [
    "Mr. Fahri",
    "Mr. Abdul",
    "Mrs. Dilla",
    "Mr. Heru",
    "Mr. Paul",
    "Mr. Hilman",
    "Mrs. Mela"
];

const guest2 = [
    "Mr. Indra",
    "Mr. Kien",
    "Mrs. Welly",
    "Mr. Wondo",
    "Mr. Arthur",
    "Mr. Edi",
    "Mr. Jamal"
]

guest1.concat(guest2).forEach(function(element){
    if( element.split(" ")[1].includes('E')){
        console.log("Dengan nama :", element);
    }
});

//or
// const search = (name){
//     const allguest = guest1.concat(guest2);
//     const searching = allguest.filter (item =>
//         item.toLowerCase().includes(name.toLowerCase())
//     )
//     console.log(searching);
// };



