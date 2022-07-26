import { Platform, View } from "react-native";
import Constants from "expo-constants";
import { createStackNavigator } from "@react-navigation/stack";
import DirectoryScreen from "./DirectoryScreen";
import SquatchProfileScreen from "./SquatchProfileScreen";

const DirectoryNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Directory"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#151'
        },
        headerTintColor: '#bfb'
      }}
    >
      <Stack.Screen
        name='Directory'
        component={DirectoryScreen}
        options={{title: `Lot's of Squatches`}}
      />
      <Stack.Screen
        name='SquatchProfileScreen'
        component={SquatchProfileScreen}
        options={({ route }) => ({title: route.params.squatch.name})}
      />
    </Stack.Navigator>
  )
}

const Main = () => {
  {/* const [squatches, setSquatches] = useState(SQUATCHES);
  const [selectedSquatchId, setSelectedSquatchId] = useState(); */}

  return (
    <View
      style={{
        flex: 1,
        paddingTop:
          Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
      }}
    >
      {/* <DirectoryScreen
        squatches={squatches}
        onPress={squatchId => setSelectedSquatchId(squatchId)}
      />
      <ProfileScreen
        squatch={squatches.filter(squatch => squatch.id === selectedSquatchId)[0]}
      /> */}
      <DirectoryNavigator />
    </View>
  );
}

export default Main;