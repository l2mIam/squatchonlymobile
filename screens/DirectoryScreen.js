import { FlatList } from "react-native";
import { Avatar, ListItem } from "react-native-elements";

const DirectoryScreen = (props) => {
  const renderDirectoryItem = ({ item: squatch }) => {
    return (
      <ListItem>
        <Avatar
          source={squatch.image}
          rounded
          size="medium"
          avatarStyle={{
            borderWidth: 1,
            borderColor: '#000',
            borderStyle:'solid'
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
      data={props.squatches}
      renderItem={renderDirectoryItem}
      keyExtractor={(item) => item.id.toString()}
    />
  )
}

export default DirectoryScreen;