import {StyleSheet} from 'react-native';

import CoffeeScreen from "./Screens/CoffeeScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Jokes from "./Screens/Jokes";

const Tab = createBottomTabNavigator();

export default function App() {

  return (
      <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name={"Coffee"} component={CoffeeScreen} />
            <Tab.Screen name={"Jokes"} component={Jokes}/>
        </Tab.Navigator>
      </NavigationContainer>
  );
}

//Styles

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#232"
  },

});