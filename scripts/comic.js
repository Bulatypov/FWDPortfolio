const jokeButton = document.getElementById("joke-button");
const joke = document.getElementById("joke");
const mainDiv = document.getElementById("comic");
const comic = document.getElementById("comic-img");
const jokeTime = document.getElementById("joke-time");
jokeButton.addEventListener("click", async () => {
    const comicRequest = await fetch("https://fwd.innopolis.app/api/hw2?email=b.latypov@innopolis.university");
    const comicId = await comicRequest.json();
    const res = await fetch(`https://fwd.innopolis.university/api/comic?id=${comicId}`);
    const data = await res.json();
    const {img} = data;
    const {safe_title} = data;
    const {year} = data;
    const {month} = data;
    const {day} = data;
    const {alt} = data;
    const date = new Date(Date.UTC(year, month, day));
    joke.textContent = safe_title;
    jokeTime.textContent = date.toLocaleDateString("en-US", {year: 'numeric', month: 'long', day: 'numeric'});
    comic.setAttribute("src", img);
    comic.setAttribute("alt", alt);
    mainDiv.setAttribute("style", "height: 100%; margin-bottom: 2%;");
})