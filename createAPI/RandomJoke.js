export const RandomJoke = () => { //Generate a new joke link
    return(`https://xkcd.com/${Math.floor(Math.random() * 2500)}/info.0.json`)
}