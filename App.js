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
import Spacer from "./components/Spacer";
import {Icon} from "react-native-elements";
import AutoDimensionImage, {imageDimensionTypes} from "react-native-auto-dimensions-image";
import {Motivation} from "./MotivationAPI";


export default function App() {

    const firstPhoto = "https://static9.depositphotos.com/1001033/1134/i/600/depositphotos_11349000-stock-photo-cup-of-coffe.jpg"
    const [myImage, setMyImage] = useState(firstPhoto) // I store my API photos here
    const [myInspiration, setMyInspiration] = useState("Life's too short for bad coffee!") //I store my inspirational API here
    const [isFetching, setIsFetching] = useState(false) // For loading screen

    const callAPI = () => { // Calling the API for a random coffee photo
        setIsFetching(true) // Turn on the loading while we get the data
        fetch("https://coffee.alexflipnote.dev/random.json") // Get the photo from the API
        .then((response) => response.json())
        .then((data) => {
            setMyImage(data.file);
            setIsFetching(false);
        })
        setMyInspiration(Motivation());
    }

  return (
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
                                                otherDimensionMaxValue={333} source={{uri: myImage}} style={{borderRadius: 50}}/>
              }
              <Spacer/>
              <Text style={styles.text}>{myInspiration}</Text>
          </View>

          <View style={styles.downContainer}>
              <TouchableOpacity onPress={() => callAPI()}>
                  <Image source={require("./photos/coffeeButton.jpg")} style={styles.button}/>
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