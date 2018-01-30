var oddNumber = parseFloat(prompt("Please enter an odd number between 1 and 50."));
while(oddNumber % 2 === 0){
    oddNumber = parseFloat(prompt("Please enter a valid number."));
    if (oddNumber % 2 !== 0){
        break;
    }
}

console.log("Number to skip is: " + oddNumber);
for (var i = 1; i < 50; i++) {
    if (i % 2 === 0){
        continue;
    }
    if (oddNumber === i){
        console.log("Yikes! Skipping number: " + oddNumber);
    }
    else{
        console.log("Here is an odd number: " + i);
    }
}