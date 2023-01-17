import {
    View,
    StyleSheet,
    Image,
    ActivityIndicator,
    Share,
    StatusBar,
    TouchableOpacity,
    Text
} from 'react-native';
import {useState} from "react";
import Spacer from "../components/Spacer";
import {Icon} from "react-native-elements";
import AutoDimensionImage, {imageDimensionTypes} from "react-native-auto-dimensions-image";
import {Motivation} from "../createAPI/Motivation";
import {RandomJoke} from "../createAPI/RandomJoke";

function Main({firstPhoto, imageAPI, coffeeMeme}) {

    const [myImage, setMyImage] = useState(firstPhoto)          // I store my API photos here
    const [myInspiration, setMyInspiration] = useState("You are not fully dressed until you wear a smile!")
                                                                //I store my inspirational API here
    const [isFetching, setIsFetching] = useState(false) // For loading screen(Fetching)

    const callAPI = () => {                          // Calling the API for a random coffee photo
        setIsFetching(true)                    // Turn on the loading while we get the data

        if(!coffeeMeme) //If is a joke we want to generate a random photo/link(API rules)
            imageAPI = RandomJoke();

        fetch(imageAPI)                             // Get the photo from the API
            .then((response) => response.json())
            .then((data) => {
                if(coffeeMeme) { //We have different API calls based on the case(coffee/joke)
                    setMyImage(data.file);
                }else {
                    setMyImage(data.img);
                }
                setIsFetching(false); //Turn the loading off
            })

        if(coffeeMeme) { //If is a coffee case we don't want to have the same quote 2 times in a row so this helps
            let message = Motivation();

            while (message === myInspiration) {
                message = Motivation();
            }
            setMyInspiration(message);
        }
    }

    return(
        <View style={styles.container}>
            <StatusBar hidden />

            <View style={styles.upContainer}>
                <Icon
                    onPress={() => Share.share({url: myImage})}
                    name={"share"}
                    color={"#F9AA33"}
                    size={30}
                    reverse
                />
            </View>

            <View style={styles.midContainer}>
                {isFetching ? <ActivityIndicator size="large"/> :
                    <AutoDimensionImage dimensionType={imageDimensionTypes.HEIGHT} dimensionValue={300}
                                        otherDimensionMaxValue={333} source={{uri: myImage}}
                                        style={{borderRadius: coffeeMeme ? 50 : 0 /*On joke screen we have the full photo*/}}
                    />
                }

                <Spacer/>

                <Text style={styles.text}>{myInspiration}</Text>
            </View>

            <View style={styles.downContainer}>
                <TouchableOpacity onPress={() => callAPI()}>
                    <Image source={require("../photos/coffeeButton.jpg")} style={styles.button}/>
                </TouchableOpacity>
            </View>
        </View>
    );
}

//Styles

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 10,
        backgroundColor: "#232"
    },

    upContainer: {
        flex: 1,
        alignItems: "flex-end",
        justifyContent: "center",
    },

    midContainer: {
        flex: 5,
        alignItems: "center",
        justifyContent: "center",
    },

    downContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    text: {
        color: "white",
        fontSize: 20,
    },

    button: {
        height: 100,
        width: 100,
        borderRadius: 50,

    },

});

export default Main;