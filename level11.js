//level 11

var mmn = ("2")
var mmy = ("48")


if (mmn==5)
{
    nResult = mmy % mmn;
    console.log("Result :", nResult)
}
else if (mmn < 5) {
    nResult = mmn ** 14;
    console.log("Result :" , nResult)
}

else if (mmn > 5) {
    nResult = mmn && mmy;
    console.log("Result :", nResult)
}

else if (mmn < mmy) {
    nResult1 = mmn || mmy;
    console.log("Result :", nResult1)
}

else if (mmn > mmy) {
    nResult1 = mmn + mmy;
    console.log("Result :", nResult1)
}

else if (mmn == mmy ) {
    nResult1 = mmn-mmy;
    console.log("Result :", nResult1)}

else {
    console.log("Happy days")
}