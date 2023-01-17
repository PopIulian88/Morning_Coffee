import {View} from "react-native";

const Spacer = ({height = 25}) => { // put an up space on the height we want
    return (
        <View style={{height: height}}/>
    )
}

export default Spacer;