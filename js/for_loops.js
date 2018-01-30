function showMultiplicationTable (number){
    for (var i = 1; i <= 10; i++) {
        console.log(number + " x " + i + " = " + number * i);
    }
}

console.log(showMultiplicationTable(7));

//Random Number Exercise

for (i = 1; i <= 10; i++) {
    var random = Math.floor(Math.random() * 180) + 20;
    if (random % 2 === 0) {
        console.log(random + " is even.");
    }
    else {
        console.log(random + " is odd.");
    }
}


//1-9 pyramid
for (i = 1; i <= 9; i++) {
    var output =  "";
    for (j = 1; j <= i; j++) {
        output += i;
    }
    console.log(output);
}

//Counting backwards from 100 by 5
for (i = 100; i >= 5; i -= 5){
    console.log(i);
}