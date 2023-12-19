import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import {
  AntDesign,
  FontAwesome,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";

const Discover = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View
        style={{
          alignItems: "center",
          paddingHorizontal: 18,
          padding: 8,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
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
          Find Friends
        </Text>
        <TouchableOpacity>
          <MaterialCommunityIcons name="line-scan" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          backgroundColor: "#dcdcdc",
          padding: 8,
          margin: 18,
        }}
      >
        <Ionicons
          name="ios-search-outline"
          size={20}
          color="black"
          style={{ marginRight: 6 }}
        />
        <TextInput placeholder="Search" style={{ width: "92%" }} />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          paddingHorizontal: 12,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 18,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              backgroundColor: "#ED7360",
              padding: 12,
              borderRadius: 40,
              marginRight: 12,
            }}
          >
            <Ionicons name="person-add-outline" size={28} color="white" />
          </View>
          <Text style={{ fontWeight: 500 }}>Invite friends</Text>
        </View>
        <AntDesign name="right" size={16} color="black" />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          paddingHorizontal: 12,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 18,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              backgroundColor: "#67DDA0",
              paddingVertical: 12,
              paddingHorizontal: 15,
              borderRadius: 40,
              marginRight: 12,
            }}
          >
            <FontAwesome name="phone" size={28} color="white" />
          </View>
          <Text style={{ fontWeight: 500 }}>Find contacts</Text>
        </View>
        <AntDesign name="right" size={16} color="black" />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          paddingHorizontal: 12,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 18,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              backgroundColor: "#3173F1",
              paddingVertical: 12,
              paddingHorizontal: 18,

              borderRadius: 40,
              marginRight: 12,
            }}
          >
            <FontAwesome name="facebook" size={28} color="white" />
          </View>
          <Text style={{ fontWeight: 500 }}>Find facebook friends</Text>
        </View>
        <AntDesign name="right" size={16} color="black" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Discover;

const styles = StyleSheet.create({});
