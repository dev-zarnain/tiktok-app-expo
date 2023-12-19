import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { AntDesign, FontAwesome5, Ionicons } from "@expo/vector-icons";

const Inbox = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffff" }}>
      <View
        style={{
          alignItems: "center",
          paddingHorizontal: 22,
          flexDirection: "row",
          justifyContent: "center",
          marginLeft: 32,
        }}
      >
        <Text
          style={{
            color: "black",
            fontSize: 18,
            fontWeight: 600,
            marginRight: 8,
          }}
        >
          All Activity
        </Text>
        <AntDesign name="caretdown" size={14} color="black" />
        <TouchableOpacity
          onPress={() => navigation.navigate("DirectMessage")}
          style={{ left: 84 }}
        >
          <FontAwesome5 name="location-arrow" size={24} color="black" />
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
        <Ionicons name="chatbox-outline" size={60} color="#B0B0B3" />
        <Text style={{ fontWeight: 600, fontSize: 16, marginVertical: 8 }}>
          Notifications aren't available
        </Text>
        <Text style={{ fontSize: 12, color: "#B0B0B3" }}>
          Notifications about your account will appear here
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Inbox;

const styles = StyleSheet.create({});
