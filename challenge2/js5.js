const names = [
    "Mr. Fahri",
    null,
    undefined,
    "Mr. Abdul",
    24,
    "Mrs. Josephhine",
    "Mr. Joseph",
    "Mr. Paul",
    32,
    "Mrs. Paula",
    7,
    22,
    "Mr. Hakim"
];

const allMember = (name) => {
    name.forEach(item => {
        // console.log(typeof item == "string");
        if (typeof item == "string") {
            console.log(item);
        }
    });
}