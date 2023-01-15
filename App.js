import {View, StyleSheet, Image, Button, ActivityIndicator, Share} from 'react-native';
import {useState} from "react";
import Spacer from "./components/Spacer";

export default function App() {

    const firstPhoto = "https://static9.depositphotos.com/1001033/1134/i/600/depositphotos_11349000-stock-photo-cup-of-coffe.jpg"
    const [myImage, setMyImage] = useState(firstPhoto) // I store my API photos here
    const [isFetching, setIsFetching] = useState(false) // For loading screen

    const callAPI = () => { // Calling the API for a random coffee photo
        setIsFetching(true) // Turn on the loading while we get the data
        fetch("https://coffee.alexflipnote.dev/random.json") // Get the photo from the API
        .then((response) => response.json())
        .then((data) => {
            setMyImage(data.file);
            setIsFetching(false);
        })

    }

  return (
      <View style={styles.container}>
          <View style={styles.upContainer}>
            <Button title={"Morning coffe"} onPress={() => callAPI()} color={"green"} />
          </View>
          <View style={styles.midContainer}>
            {isFetching ? <ActivityIndicator size="large"/> : <Image source={{uri: myImage}} style={styles.photo}/>}
          </View>
          <View style={styles.downContainer}>
            <Button title={"Share via Faceboock"} onPress={() => Share.share({url: myImage})}/>
          </View>
      </View>
  );
}

//Styles

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "grey"
    },

    upContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    midContainer: {
        flex: 3,
        alignItems: "center",
        justifyContent: "center",
        borderColor: "black",
        borderWidth: 3,
    },

    downContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    photo: {
        height: "80%",
        width: "95%",
        borderRadius: 50,
        resizeMode: "contain"
    },

});