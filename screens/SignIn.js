import {
  Image,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function SignIn({ navigation }) {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <Text style={styles.headingText}>SIGN IN </Text>
        <View style={styles.userContainer}>
          <Image style={styles.img} source={require("../assets/user.png")} />
          <TextInput placeholder="Username" style={styles.input} />
        </View>
        <View style={styles.passwordContainer}>
          <Image
            style={styles.img}
            source={require("../assets/password.png")}
          />
          <TextInput placeholder="Password" style={styles.input} />
        </View>
        <View style={styles.registerContainer}>
          <Text>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Me")}>
            <Text style={styles.registerText}>Register Here</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("MyTabs")}
          style={styles.loginButton}
        >
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
  },
  container: {
    justifyContent: "center",
    backgroundColor: "#FAFAFA",
    alignItems: "center",
    flex: 1,
  },
  headingText: {
    marginBottom: "10%",
    fontSize: 40,
    fontWeight: "600",
  },
  input: {
    padding: 4,
    width: "90%",
    overflow: "hidden",
  },
  userContainer: {
    backgroundColor: "#e8eded",
    margin: 12,
    alignItems: "center",
    width: "70%",
    flexDirection: "row",
    borderBottomWidth: 1,
  },
  passwordContainer: {
    backgroundColor: "#e8eded",
    alignItems: "center",
    margin: 18,
    width: "70%",
    flexDirection: "row",
    borderBottomWidth: 1,
  },
  img: {
    marginRight: "2%",
    width: 20,
    height: 20,
  },
  registerContainer: {
    flexDirection: "row",
  },
  registerText: {
    color: "#9272EF",
    fontWeight: "700",
  },
  loginButton: {
    marginVertical: "14%",
    borderRadius: "4%",
    paddingHorizontal: "18%",
    paddingVertical: 20,
    backgroundColor: "black",
  },
  loginText: {
    fontSize: 18,
    color: "#FAFAFA",
  },
});
