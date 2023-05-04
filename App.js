import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import { characters } from "./data";

export default function App() {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.character}
      onPress={() => setSelectedCharacter(item)}
    >
      <Image style={styles.characterImage} source={item.image} />
      <Text style={styles.characterName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Street Fighter 2 Character Select</Text>
        <FlatList
          data={characters}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={3}
          contentContainerStyle={styles.characterList}
        />
        {selectedCharacter && (
          <View style={styles.selectedCharacter}>
            <Text style={styles.selectedCharacterText}>
              Selected Character: {selectedCharacter.name}
            </Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  characterList: {
    alignSelf: "center",
  },
  character: {
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  characterImage: {
    width: 100,
    height: 225,
    marginTop: 200,
  },
  characterName: {
    marginTop: 5,
  },
  selectedCharacter: {
    marginTop: 20,
  },
  selectedCharacterText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
