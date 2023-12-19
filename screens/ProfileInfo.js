import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";

const ProfileInfo = ({ navigation }) => {
  return (
    <SafeAreaView style={{ backgroundColor: "#FFFFFF", flex: 1 }}>
      <View
        style={{
          padding: 12,
          flexDirection: "row",
          alignItems: "center",
          borderBottomWidth: 0.5,
          borderColor: "#ebebeb",
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={{ marginLeft: 100, fontSize: 18, fontWeight: "600" }}>
          Edit Profile
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <View>
          <TouchableOpacity style={{ width: 115, height: 115, margin: 12 }}>
            <Image
              style={{
                opacity: 0.6,
                width: 115,
                height: 115,
                borderRadius: 60,
              }}
              source={require("../assets/Profile.jpg")}
            />
            <Ionicons
              style={{ position: "absolute", top: 36, left: 36 }}
              name="camera-outline"
              size={40}
              color="#ffff"
            />
          </TouchableOpacity>
          <Text style={{ textAlign: "center" }}>Change Photo</Text>
        </View>
        <View>
          <TouchableOpacity
            style={{
              backgroundColor: "#F1F1F2",
              width: 120,
              height: 120,
              borderRadius: 60,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Ionicons name="videocam-outline" size={44} color="black" />
          </TouchableOpacity>
          <Text style={{ textAlign: "center", top: 12 }}>Change Video</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 22,
        }}
      >
        <Text style={{ fontSize: 14, fontWeight: 500 }}>Name</Text>
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <Text style={{ paddingRight: 6, fontSize: 14, color: "#86878B" }}>
            Zarnain
          </Text>
          <AntDesign name="right" size={16} color="#86878B" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 22,
        }}
      >
        <Text style={{ fontSize: 14, fontWeight: 500 }}>Username</Text>
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <Text style={{ paddingRight: 6, fontSize: 14, color: "#86878B" }}>
            yk_zarnain
          </Text>
          <AntDesign name="right" size={16} color="#86878B" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          left: 70,
          paddingVertical: 12,
        }}
      >
        <Text
          style={{
            paddingRight: 6,
            fontSize: 14,
            color: "#86878B",
          }}
        >
          tiktok.com@yk_zarnain
        </Text>
        <Feather name="copy" size={14} color="black" />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 22,
        }}
      >
        <Text style={{ fontSize: 14, fontWeight: 500 }}>Bio</Text>
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <Text style={{ paddingRight: 6, fontSize: 14, color: "#86878B" }}>
            Add a bio to your profile
          </Text>
          <AntDesign name="right" size={16} color="#86878B" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          borderTopWidth: 0.5,
          borderColor: "#ebebeb",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 22,
        }}
      >
        <Text style={{ fontSize: 14, fontWeight: 500 }}>Instagram</Text>
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <Text style={{ paddingRight: 6, fontSize: 14, color: "#86878B" }}>
            Add instagram to your profile
          </Text>
          <AntDesign name="right" size={16} color="#86878B" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 22,
        }}
      >
        <Text style={{ fontSize: 14, fontWeight: 500 }}>Youtube</Text>
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <Text style={{ fontSize: 14, paddingRight: 6, color: "#86878B" }}>
            Add yotube to your profile
          </Text>
          <AntDesign name="right" size={16} color="#86878B" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProfileInfo;

const styles = StyleSheet.create({});
