var option = prompt("1) Add student\n 2) Delete student\n 3) View students in alphabetical order\n 4) View students in reverse alphabetical order.\n Please enter the number of your option choice.");
option = parseFloat(option);
var studentNames = [];
switch (option) {
    case 1:
        var addName = prompt("Enter the name to be added.");
        studentNames.push(addName);
        break;
    case 2:
        var removeName = prompt("Enter the name to be deleted.");
        studentNames.pop(removeName);
        break;
    case 3:
        console.log(studentNames.sort());
        break;
    case 4:
        alert(studentNames.reverse());
        break;
}


