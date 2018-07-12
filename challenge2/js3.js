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

const guests = guest1.concat(guest2)

const searchName = (names, keyword) => {
    names.forEach(function (element) {
        const splitted = element.split(" ")[1]

        if (splitted.toLowerCase().includes(keyword)) {
            console.log("Dengan nama :", element);
        }
    });
}

//or
// const search = (name){
//     const allguest = guest1.concat(guest2);
//     const searching = allguest.filter (item =>
//         item.toLowerCase().includes(name.toLowerCase())
//     )
//     console.log(searching);
// };