const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
    },
];

const languageObject = users.filter(user => user.languages.length >= 3);
console.table(languageObject);

// document.getElementById("demo").innerHTML = languageObject;


const userEmails = users.map(user => user.email);

// document.getElementById("demo").innerHTML = userEmails;
console.table(userEmails);


let newObject = users.reduce( (user,tempObject) => {
    tempObject[user.id] = user;
    return tempObject;
}, {});

// document.getElementById("user_id").innerHTML = newObject;
console.log(newObject);
