import Main from "./Main";

function CoffeeScreen(){

    return(
        <Main
            firstPhoto={"https://static9.depositphotos.com/1001033/1134/i/600/depositphotos_11349000-stock-photo-cup-of-coffe.jpg"}
            imageAPI={"https://coffee.alexflipnote.dev/random.json"}
            quote={true}
        />
    );
}

export default CoffeeScreen;