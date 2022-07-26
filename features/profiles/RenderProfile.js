import { Text, View } from "react-native";
import { Card } from "react-native-elements";

const RenderProfile = ({ squatch }) => {
  if (squatch) {
    return (
      <Card containerStyle={{ padding: 0 }}>
        <Card.Image source={squatch.image}>
          <View style={{ justifyContent: 'center', flex: 1 }}>
            <Text style={{ color: 'white', textAlign: 'center', fontSize: 20 }}>
              {squatch.name}
            </Text>
          </View>
        </Card.Image>
        <Text style={{ margin: 20 }}>Age: {squatch.age}</Text>
        <Text style={{ margin: 20 }}>Favorite Tree: {squatch.tree}</Text>
        <Text style={{ margin: 20 }}>{squatch.description}</Text>
      </Card>
    )
  }
  return <View />
}

export default RenderProfile;