//Counting Numbers
var i = 2;
while (i < 70000) {
    console.log(i);
    i *= 2;
}

//Ice Cream Problem
//allCones represents entire inventory
var allCones = Math.floor(Math.random() * 50) + 50;
//order will hold a random number of cone orders each time through the loop
var order;
console.log("Welcome to the ice cream stand.");
console.log("I start my day with " + allCones + " cones.");

do{
    order = Math.floor(Math.random() * 5) + 1;
    if (order <= allCones) {
        allCones = allCones - order;
        console.log("Sold " + order + " cones.");
    }else{
        console.log("Cannot sell you " + order + " cones. I only have " + allCones + " cones.");
        console.log("Next customer, please.");
    }
} while (allCones > 0);

console.log("I sold all the ice cream cones and get to go home!");







