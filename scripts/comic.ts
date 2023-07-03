let button = document.getElementById("theme-button") as HTMLButtonElement;
let link = document.getElementById("theme-link") as HTMLLinkElement;
let gitHubLogo = document.getElementById("github-logo") as HTMLImageElement;
button.addEventListener("click", changeTheme);
function changeTheme() {
    const light: string = "styles/light.css";
    const dark: string = "styles/dark.css";
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

const jokeButton = document.getElementById("joke-button") as HTMLButtonElement;
const joke = document.getElementById("joke") as HTMLHeadingElement;
const mainDiv = document.getElementById("comic") as HTMLDivElement;
const comic = document.getElementById("comic-img") as HTMLImageElement;
const jokeTime = document.getElementById("joke-time") as HTMLParagraphElement;
jokeButton.addEventListener("click", async () => {
    const comicRequest: Response = await fetch("https://fwd.innopolis.app/api/hw2?email=b.latypov@innopolis.university");
    const comicId: number = await comicRequest.json();
    const res: Response = await fetch(`https://fwd.innopolis.university/api/comic?id=${comicId}`);
    const data: Object = await res.json();
    const img: string = data.img;
    const safe_title: string = data.safe_title;
    const year: number = data.year;
    const month: number = data.month;
    const day: number = data.day;
    const alt: string = data.alt;
    const date: Date = new Date(Date.UTC(year, month, day));
    joke.textContent = safe_title;
    jokeTime.textContent = date.toLocaleDateString("en-US", {year: 'numeric', month: 'long', day: 'numeric'});
    comic.setAttribute("src", img);
    comic.setAttribute("alt", alt);
    mainDiv.setAttribute("style", "height: 100%; margin-bottom: 2%;");
})