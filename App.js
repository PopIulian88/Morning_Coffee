import {StyleSheet} from 'react-native';

import Coffee from "./Screens/Coffee";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Jokes from "./Screens/Jokes";
import {Icon} from "react-native-elements";
import {Feather, FontAwesome, MaterialCommunityIcons} from "@expo/vector-icons";


const Tab = createBottomTabNavigator();

export default function App() {

  return (
      <NavigationContainer>
        <Tab.Navigator screenOptions={styles.navigator} tabBarOptions={styles.tabBar}>
            <Tab.Screen name={"Coffee"} component={Coffee} options={styles.tabCoffee}/>
            <Tab.Screen name={"Jokes"} component={Jokes} options={styles.tabJoke}/>
        </Tab.Navigator>
      </NavigationContainer>
  );
}

//Styles

const styles = StyleSheet.create({

  navigator: {
      headerShown: false,
  },

    tabBar: {
        activeTintColor: "white",
        inactiveTintColor: 'lightgray',
        activeBackgroundColor: "#8B4513",
        inactiveBackgroundColor: '#b55031',
    },

  tabCoffee: {
      tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="coffee" size={30} color="#F9AA33" />
      ),
      activeColor:"#00aea2",

  },

  tabJoke: {
      tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIcons name="robot-happy" size={30} color="#F9AA33" />
      ),
  }

});