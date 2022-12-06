const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    location();

};

const routes = {
    404: "/pages/404.html",
    "/": "/main.html",
    "/home": "/home.html",
    "/exterior": "/exterior.html",
    "/interior": "/interior.html",
}

const location = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data) => data.text());
    document.getElementById("main-page").innerHTML = html;
}

windows.onpopstate = location;
window.route = route;

location();