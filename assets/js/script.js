function load(url, callback) {
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = () => {
        callback(request.response);
    }
    request.send();
}


load("assets/header.html", (res) => {
    header = res;
});
load("assets/footer.html", (res) => {
    footer = res;
});
load("assets/data.json", (res) => {
    data = res;
})
var id = setInterval(() => {
    if (header && footer && data) {
        clearInterval(id);
        init();
    }
}, 50);

function init() {
    document.body.innerHTML = header + document.body.innerHTML + footer;

    data = JSON.parse(data);

    console.log(document.getElementsByClassName("title"));
    [].forEach.call(document.getElementsByClassName("title"), (item => {
        item.innerHTML = data.index.title;
    }));
    [].forEach.call(document.getElementsByClassName("discordlink"), (item => {
        item.href = data.discordlink;
    }));
    [].forEach.call(document.getElementsByClassName("githublink"), (item => {
        item.href = data.githublink;
    }));

    document.body.style.opacity = "1";
}