function load(url, callback) {
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = () => {
        callback(request.response);
    }
    request.send();
}

function redirect(url) {
    closenav();
    if (window.scrollY == 0) {
        content.style.opacity = "0";
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
                content.style.opacity = "0";
                setTimeout(() => {
                    location = url;
                }, 500);
            }, 500);
        }, 50);
    }
}

function animatein(animation, elem) { // Adds/removes animation classes
    elem.classList.remove(animation + "out");
    elem.classList.add(animation + "in");
}

function animateout(animation, elem) { // Adds/removes animation classes
    elem.classList.remove(animation + "in");
    elem.classList.add(animation + "out");
}

function closenav() { // Close the navbar if it is open
    if (navopen) {
        togglenav();
    }
}

function togglenav() { // Toggle the navigation bar
    nav = document.getElementById("nav");
    navopen = !navopen;
    if (navopen) {
        nav.style.transform = "translateY(0)";
        nav.style.pointerEvents = "auto";
        animatein("nav", nav);
    } else {
        nav.style.transform = "translateY(-100%)";
        nav.style.pointerEvents = "none";
        animateout("nav", nav);
    }
}




var navopen = false;

load("assets/header.html", (res) => {
    header = res;
});
load("assets/nav.html", (res) => {
    nav = res;
});
load("assets/footer.html", (res) => {
    footer = res;
});
load("assets/data.json", (res) => {
    data = res;
})
var id = setInterval(() => {
    console.log(".");
    if (header && nav && footer && data) {
        clearInterval(id);
        init();
    }
}, 10);

function init() {
    document.body.innerHTML = header + nav + "<main class='content'><div class='maincontainer'>" + document.body.innerHTML + "</div></main>" + footer;

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

    content = document.getElementsByClassName("content")[0];

    setTimeout(() => {
        content.style.opacity = "1";

        header = undefined;
        nav = undefined;
        footer = undefined;
        data = undefined;
    }, 100);
}