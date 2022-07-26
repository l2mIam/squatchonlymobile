import { FlatList } from "react-native";
import { Avatar, ListItem } from "react-native-elements";

const DirectoryScreen = (props) => {
  const renderDirectoryItem = ({ item: squatch }) => {
    return (
      <ListItem>
        <Avatar source={squatch.image} rounded />
        <ListItem.Content>
          <ListItem.Title>{squatch.name}</ListItem.Title>
          <ListItem.Subtitle>{squatch.description}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    )
  }
  return (
    <FlatList 
      data={props.squatch}
      renderItem={renderDirectoryItem}
      keyExtractor={(item) => item.id.toString()}
    />
  )
}

export default DirectoryScreen;