import {
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import {
  AntDesign,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";

const Profile = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffff" }}>
      <View
        style={{
          borderBottomWidth: 0.2,
          borderBottomColor: "grey",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 14,
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Discover")}>
          <AntDesign name="adduser" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={{ flexDirection: "row" }}>
          <Text
            style={{
              color: "black",
              fontSize: 18,
              fontWeight: 600,
              marginRight: 8,
            }}
          >
            Zarnain
          </Text>
          <AntDesign name="caretdown" size={14} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Privacy")}>
          <MaterialCommunityIcons
            name="dots-horizontal"
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </View>
      <ActivityIndicator animating={false} />
      <ScrollView style={{}}>
        <Image
          style={{
            alignSelf: "center",
            width: 115,
            height: 115,
            borderRadius: 100,
            margin: 12,
          }}
          source={require("../assets/Profile.jpg")}
        />
        <Text style={{ textAlign: "center", fontWeight: 600, fontSize: 16 }}>
          @yk_zarnain
        </Text>
        <View
          style={{
            marginRight: 16,
            flexDirection: "row",
            justifyContent: "space-evenly",
            paddingHorizontal: 18,
            paddingVertical: 12,
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontWeight: 800, fontSize: 18 }}>14</Text>
            <Text style={{ color: "grey" }}>Following</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontWeight: 800, fontSize: 18 }}>32</Text>
            <Text style={{ color: "grey" }}>Followers</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontWeight: 800, fontSize: 18 }}>204</Text>
            <Text style={{ color: "grey" }}>Likes</Text>
          </View>
        </View>
        <View
          style={{
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("ProfileInfo")}
            style={{
              borderWidth: 0.2,
              padding: 12,
              width: 150,
              alignItems: "center",
              marginRight: 4,
            }}
          >
            <Text style={{ fontWeight: 600, fontSize: 16 }}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderWidth: 0.2,
              justifyContent: "center",
              alignItems: "center",
              width: 38,
              height: 44,
            }}
          >
            <Octicons name="bookmark" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <TextInput
          style={{ alignSelf: "center", margin: 16 }}
          placeholder={"Tap to add bio"}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            borderTopWidth: 0.2,
            borderBottomWidth: 0.2,
            paddingVertical: 8,
          }}
        >
          <MaterialCommunityIcons
            name="reorder-vertical"
            size={24}
            color="black"
          />
          <MaterialCommunityIcons
            name="heart-remove-outline"
            size={24}
            color="black"
          />
        </View>
      </ScrollView>
      <FlatList />
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
