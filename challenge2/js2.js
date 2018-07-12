const nameMember = [
    "Mr. Fahri",
    "Mr. Abdul",
    "Mrs. Dilla",
    "Mr. Heru",
    "Mr. Paul",
    "Mr. Hilman",
    "Mrs. Mela"
];

nameMember.forEach(function(element){
    if(element.charAt(2)==="s"){
        console.log(element + '(Female)');
    }
    else{
        console.log(element + '(Male)');
    }
});

