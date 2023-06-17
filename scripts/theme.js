let button = document.getElementById("theme-button");
let link = document.getElementById("theme-link");
let gitHubLogo = document.getElementById("github-logo");
button.addEventListener("click", changeTheme);
function changeTheme() {
    let light = "styles/light.css";
    let dark = "styles/dark.css";
    if (link.getAttribute("href") === light) {
        link.setAttribute("href", dark);
    } else {
        link.setAttribute("href", light);
    }
    if (gitHubLogo) {
        if (gitHubLogo.getAttribute("src") === "pictures/media/github-logo.png") {
            gitHubLogo.setAttribute("src", "pictures/media/github-logo-dark.png")
        } else {
            gitHubLogo.setAttribute("src", "pictures/media/github-logo.png")
        }
    }
}