function wait(number) {
    return new Promise((resolve) => {
        setTimeout(resolve, number);
        });
}

wait(1000).then(() => console.log("You'll see this after 1 second"));
wait(3000).then(() => console.log("You'll see this after 3 seconds"));


fetch("https://api.github.com/users/" + username + "/repos?per_page=100", {headers: {"Authorization": "token cc1562aa71d592d9a9fd63709f141e3b1450c7d6" }})
    .then(response => response.json())
    .then(repositories => {
        repositories.map(repo => {
           dates.push(repo.updated_at);
        });
        dates.sort();
        document.querySelector("span").innerText = new Date(dates[dates.length -1]);
        });


    getDateOfLastCommit("mdm911");



