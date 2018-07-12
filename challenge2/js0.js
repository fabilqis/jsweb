const names = [
    "Mr. Fahri",
    "Mr. Abdul",
    "Mrs. Dilla",
    "Mr. Heru",
    "Mr. Paul",
    "Mr. Hilman",
    "Mrs. Mela"
];

names.forEach(name=>{
    console.log(name);
    });
    
    const displayOnebyOne = (array) => {
    array.map(item => console.log(item))
    }
    
    displayOnebyOne(names)