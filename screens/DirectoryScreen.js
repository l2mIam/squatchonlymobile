import { FlatList } from "react-native";
import { Avatar, ListItem } from "react-native-elements";
import { useState } from "react";
import { SQUATCHES } from "../shared/squatches";

const DirectoryScreen = ({ navigation }) => {
  const [squatches, setSquatches] = useState(SQUATCHES)

  const renderDirectoryItem = ({ item: squatch }) => {
    return (
      <ListItem onPress={() => navigation.navigate('SquatchProfileScreen', {squatch})}>
        <Avatar
          source={squatch.image}
          rounded
          size="medium"
          avatarStyle={{
            borderWidth: 1,
            borderColor: '#000'
          }}
        />
        <ListItem.Content>
          <ListItem.Title>{squatch.name}</ListItem.Title>
          <ListItem.Subtitle>{squatch.description}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  };
  return (
    <FlatList 
      data={squatches}
      renderItem={renderDirectoryItem}
      keyExtractor={(item) => item.id.toString()}
    />
  )
}

export default DirectoryScreen;