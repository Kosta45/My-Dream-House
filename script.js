const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    location();

};

const routes = {
    "/": "/index.html",
    "/home": "/index.html",
    "/exterior": "/exterior.html",
    "/interior": "/interior.html",
}

const location = async () => {
    const path = window.location.pathname;
    const route = routes[path];
    const html = await fetch(route).then((data) => data.text());
    document.getElementById("main-page").innerHTML = html;
}

windows.onpopstate = location;
window.route = route;

location();