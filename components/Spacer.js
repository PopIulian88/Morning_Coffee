import {View} from "react-native";

const Spacer = ({height = 25}) => { // put an up space
    return (
        <View style={{height: height}}/>
    )
}

export default Spacer;