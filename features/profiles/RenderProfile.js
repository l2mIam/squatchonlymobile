import { Text, View, Dimensions } from "react-native";
import { Card } from "react-native-elements";

const RenderProfile = ({ squatch }) => {
  if (squatch) {
    const win = Dimensions.get('window');

    return (
      <Card containerStyle={{ padding: 0 }}>
        <Card.Image
          source={squatch.image}
          style={{
            height: win.width *2/3
          }}
        >
        </Card.Image>
        <Text style={{ margin: 20 }}>{`Age: ${squatch.age}\nFavorite Tree: ${squatch.tree}\n${squatch.description}`}</Text>
      </Card>
    )
  }
  return <View />
}

export default RenderProfile;