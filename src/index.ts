import fetchUser from "./githubAPI";

(async () => {
    const userData = await fetchUser('customiz')
    document.querySelector('h1').innerHTML = JSON.stringify(userData)
})()