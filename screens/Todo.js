import {
  StyleSheet,
  SafeAreaView,
  // Text,
  // View,
  // TextInput,
  // TouchableOpacity,
  // FlatList,
} from "react-native";
// import { MaterialCommunityIcons } from "@expo/vector-icons";
// import { Ionicons } from "@expo/vector-icons";
// import React, { useState } from "react";

export default function Todo() {
  // const [value, setValue] = useState("");
  // const [listOfNotes, setListOfNotes] = useState([]);
  // const [editIndex, setEditIndex] = useState();
  // const [editText, setEditText] = useState("");

  // function handleOnChangeText(getEnteredText) {
  //   setValue(getEnteredText);
  // }
  // function handleOnPressButton() {
  //   if (value.trim() === "") {
  //     return;
  //   }

  //   setListOfNotes((currentNotes) => [...currentNotes, value]);
  //   setValue("");
  // }
  // function handleRemoveItem(getCurrentIndex) {
  //   console.log("getCurrentIndex", getCurrentIndex);
  //   let cpyListOfNotes = [...listOfNotes];
  //   cpyListOfNotes = cpyListOfNotes.filter(
  //     (_, index) => getCurrentIndex !== index
  //   );
  //   setListOfNotes(cpyListOfNotes);
  // }

  // function handleEditItem(index) {
  //   setEditIndex(index);
  //   setEditText(listOfNotes[index]);
  // }
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      {/* <Text style={styles.heading}>Todo</Text>
      <View style={styles.container}>
        <TextInput
          onChangeText={handleOnChangeText}
          style={{
            borderColor: "grey",
            borderWidth: 1,
            padding: 15,
            width: "70%",
            marginRight: 10,
            borderRadius: 8,
          }}
          placeholder="type here"
          value={value}
        />

        <TouchableOpacity
          onPress={handleOnPressButton}
          style={{ backgroundColor: "black", padding: 16, borderRadius: 12 }}
        >
          <Text style={{ color: "white" }}>Add</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
          margin: 6,
          backgroundColor: "black",
          padding: 16,
          borderRadius: 12,
        }}
      >
        <Text
          style={{
            color: "white",
          }}
        >
          Save
        </Text>
      </TouchableOpacity>
      <View style={styles.listContainer}>
        <FlatList
          data={listOfNotes}
          renderItem={(itemData) => (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 8,
              }}
            >
              {itemData.index === editIndex ? (
                <TextInput
                  onChangeText={setEditText}
                  style={{
                    borderColor: "grey",
                    borderWidth: 1,
                    padding: 15,
                    width: "100%",
                    marginRight: 10,
                    borderRadius: 8,
                  }}
                  placeholder="type here"
                  value={editText}
                />
              ) : (
                <>
                  <Text style={styles.listItem}>{itemData.item}</Text>
                  <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity
                      onPress={() => handleEditItem(itemData.index)}
                    >
                      <Ionicons name="ios-pencil" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => handleRemoveItem(itemData.index)}
                    >
                      <MaterialCommunityIcons
                        name="delete"
                        size={24}
                        color="black"
                      />
                    </TouchableOpacity>
                  </View>
                </>
              )}
            </View>
          )}
        />
      </View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    alignItems: "center",
  },
  // container: {
  //   flexDirection: "row",
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  // heading: {
  //   fontSize: 60,
  //   fontWeight: "600",
  // },
  // listContainer: {
  //   borderTopWidth: 1,
  //   margin: 12,
  //   padding: 8,
  //   flexDirection: "row",
  // },
  // listItem: {
  //   color: "black",
  //   fontSize: 20,
  // },
});
