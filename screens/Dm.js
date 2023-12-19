import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

const Dm = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffff" }}>
      <View
        style={{
          alignItems: "center",
          paddingHorizontal: 18,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack("")}>
          <AntDesign name="left" size={22} color="black" />
        </TouchableOpacity>
        <Text
          style={{
            color: "black",
            fontSize: 16,
            fontWeight: 700,
            marginRight: 8,
          }}
        >
          Direct messages
        </Text>
        <TouchableOpacity>
          <Text style={{ fontWeight: 600, fontSize: 28 }}>+</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          top: 240,
        }}
      >
        <FontAwesome name="location-arrow" size={68} color="black" />
        <Text style={{ fontWeight: 600, fontSize: 18, marginVertical: 12 }}>
          Message your friends
        </Text>
        <Text style={{ fontSize: 14, color: "#B0B0B3" }}>
          Share videos or start a conversation
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Dm;

const styles = StyleSheet.create({});
