const nameMember = [
    "Mr. Fahri",
    "Mr. Abdul",
    "Mrs. Dilla",
    "Mr. Heru",
    "Mr. Paul",
    "Mr. Hilman",
    "Mrs. Mela"
];

const displayMisters = (array) => {
    const filtered = array.filter(item => item.charAt(2) !== "s")
    console.log(filtered);
}

displayMisters(nameMember)

