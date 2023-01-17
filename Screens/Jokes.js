import Main from "./Main";
import {RandomJoke} from "../createAPI/RandomJoke";

function Jokes() { //Screen where we modify the main screen for a Meme screen

    return(
        <Main
            firstPhoto={"https://cdn.vox-cdn.com/thumbor/56kmAxOk_6ZOuUVRilR9dwb1Xf8=/0x0:735x500/1400x1400/filters:" +
                "focal(368x250:369x251)/cdn.vox-cdn.com/uploads/chorus_asset/file/19933026/image.png"}
            imageAPI={`https://xkcd.com/${RandomJoke}/info.0.json`} //We generate a random number for the joke
                                                                    // !!!(in main we generate more)!!!
            coffeeMeme={false} //This help us in main to know if is a coffee or a meme
        />
    )
}

export default Jokes;