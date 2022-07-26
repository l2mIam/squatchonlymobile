import { useState } from "react";
import { View } from "react-native";
import { SQUATCHES } from "../shared/squatches";
import DirectoryScreen from "./DirectoryScreen";
import ProfileScreen from "./SquatchProfileScreen";

const Main = () => {
  const [squatches, setSquatches] = useState(SQUATCHES);
  const [selectedSquatchId, setSelectedSquatchId] = useState();

  return (
    <View style={{ flex: 1 }}>
      <DirectoryScreen
        squatches={squatches}
        onPress={squatchId => setSelectedSquatchId(squatchId)}
      />
      <ProfileScreen
        squatch={squatches.filter(squatch => squatch.id === selectedSquatchId)[0]}
      />
    </View>
  );
}

export default Main;