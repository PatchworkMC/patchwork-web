function load(url, callback) {
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = () => {
        callback(request.response);
    }
    request.send();
}

function redirect(url) {
    if (window.scrollY == 0) {
        document.getElementsByClassName("content")[0].style.opacity = "0";
        setTimeout(() => {
            location = url;
        }, 500);
    } else {
        window.scrollTo({
            top: window.scrollY - 1
        });
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
            });
            setTimeout(() => {
                document.getElementsByClassName("content")[0].style.opacity = "0";
                setTimeout(() => {
                    location = url;
                }, 500);
            }, 500);
        }, 50);
    }
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