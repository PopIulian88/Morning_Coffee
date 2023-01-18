import Main from "./Main";

function Coffee(){ //Screen where we modify the main screen for a Coffee screen

    return(
        <Main
            firstPhoto={"https://t4.ftcdn.net/jpg/01/05/90/77/360_F_105907729_4RzHYsHJ2UFt5koUI19fc6VzyFPEjeXe.jpg"}
            imageAPI={"https://coffee.alexflipnote.dev/random.json"}
            coffeeMeme={true} //This help us in main to know if is a coffee or a meme
        />
    );
}

export default Coffee;