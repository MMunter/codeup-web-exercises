const wait = (number) => {
    return new Promise((resolve,reject) => {
        setTimeout(resolve, number);
        });
};

wait(1000).then(() => console.log("You'll see this after 1 second"));
wait(3000).then(() => console.log("You'll see this after 3 seconds"));

function getDateOfLastCommit(username) {
    let dates = [];
    fetch("https:// api.github.com/users/" + username + "/events/public", {headers: {"Authorization": "token  6d3d97fce1297eef018efd3b270eacb723e83b93"}})
        .then(response => response.json())
        .then((repositories) => {
            repositories.map(repo => {
                dates.push(repo.created_at);
            });
            dates.sort();
            document.querySelector("span").innerText = new Date(dates[dates.length - 1]);
            console.log(dates);
        });
}


getDateOfLastCommit("mdm911");



