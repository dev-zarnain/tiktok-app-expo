import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  AntDesign,
  Ionicons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const Privacy = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 12,
          borderBottomWidth: 0.2,
          borderBottomColor: "grey",
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="left" size={22} color="black" />
        </TouchableOpacity>
        <Text style={{ marginLeft: 84, fontSize: 16, fontWeight: "600" }}>
          Privacy and settings
        </Text>
      </View>
      <ScrollView>
        <View style={{ margin: 15, borderBottomWidth: 0.2 }}>
          <Text
            style={{
              marginBottom: 22,
              fontSize: 17,
              color: "grey",
              fontWeight: 600,
            }}
          >
            Account
          </Text>
          <TouchableOpacity
            style={{
              marginBottom: 18,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <AntDesign name="user" size={20} color="black" />
              <Text style={{ fontSize: 15, marginLeft: 10 }}>
                Manage my account
              </Text>
            </View>
            <AntDesign name="right" size={16} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginBottom: 18,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <AntDesign name="lock" size={20} color="black" />
              <Text style={{ fontSize: 15, marginLeft: 10 }}>
                Privacy and safety
              </Text>
            </View>
            <AntDesign name="right" size={16} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginBottom: 18,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons name="md-videocam-outline" size={20} color="black" />
              <Text style={{ fontSize: 15, marginLeft: 10 }}>
                Content preferences
              </Text>
            </View>
            <AntDesign name="right" size={16} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginBottom: 18,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons name="wallet-outline" size={20} color="black" />
              <Text style={{ fontSize: 15, marginLeft: 10 }}>Balance</Text>
            </View>
            <AntDesign name="right" size={16} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginBottom: 18,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons name="arrow-redo-outline" size={20} color="black" />
              <Text style={{ fontSize: 15, marginLeft: 10 }}>
                Share profile
              </Text>
            </View>
            <AntDesign name="right" size={16} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginBottom: 18,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MaterialIcons name="qr-code-scanner" size={20} color="black" />
              <Text style={{ fontSize: 15, marginLeft: 10 }}>Tikcode</Text>
            </View>
            <AntDesign name="right" size={16} color="black" />
          </TouchableOpacity>
        </View>
        <View style={{ margin: 15, borderBottomWidth: 0.2 }}>
          <Text
            style={{
              marginBottom: 22,
              fontSize: 17,
              color: "grey",
              fontWeight: 600,
            }}
          >
            General
          </Text>
          <TouchableOpacity
            style={{
              marginBottom: 18,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons
                name="ios-notifications-outline"
                size={20}
                color="black"
              />
              <Text style={{ fontSize: 15, marginLeft: 10 }}>
                Push notifications
              </Text>
            </View>
            <AntDesign name="right" size={16} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginBottom: 18,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MaterialIcons name="language" size={20} color="black" />
              <Text style={{ fontSize: 15, marginLeft: 10 }}>Language</Text>
            </View>
            <AntDesign name="right" size={16} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginBottom: 18,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MaterialCommunityIcons
                name="umbrella-outline"
                size={20}
                color="black"
              />
              <Text style={{ fontSize: 15, marginLeft: 10 }}>
                Digital Wellbeing
              </Text>
            </View>
            <AntDesign name="right" size={16} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginBottom: 18,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Octicons name="accessibility" size={20} color="black" />
              <Text style={{ fontSize: 15, marginLeft: 10 }}>
                Accessibility
              </Text>
            </View>
            <AntDesign name="right" size={16} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginBottom: 18,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <SimpleLineIcons name="drop" size={20} color="black" />
              <Text style={{ fontSize: 15, marginLeft: 10 }}>Data Saver</Text>
            </View>
            <AntDesign name="right" size={16} color="black" />
          </TouchableOpacity>
        </View>
        <View style={{ margin: 15 }}>
          <Text
            style={{
              marginBottom: 22,
              fontSize: 17,
              color: "grey",
              fontWeight: 600,
            }}
          >
            Support
          </Text>
          <TouchableOpacity
            style={{
              marginBottom: 18,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <AntDesign name="edit" size={20} color="black" />
              <Text style={{ fontSize: 15, marginLeft: 10 }}>
                Report a problem
              </Text>
            </View>
            <AntDesign name="right" size={16} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginBottom: 18,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons name="help-circle-outline" size={20} color="black" />
              <Text style={{ fontSize: 15, marginLeft: 10 }}>Help Center</Text>
            </View>
            <AntDesign name="right" size={16} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginBottom: 18,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          ></TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Privacy;

const styles = StyleSheet.create({});
