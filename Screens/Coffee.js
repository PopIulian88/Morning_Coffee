import Main from "./Main";

function Coffee(){ //Screen where we modify the main screen for a Coffee screen

    return(
        <Main
            firstPhoto={"https://static9.depositphotos.com/1001033/1134/i/600/" +
                "depositphotos_11349000-stock-photo-cup-of-coffe.jpg"}
            imageAPI={"https://coffee.alexflipnote.dev/random.json"}
            coffeeMeme={true} //This help us in main to know if is a coffee or a meme
        />
    );
}

export default Coffee;