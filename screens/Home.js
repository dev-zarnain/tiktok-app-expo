import { StyleSheet, View, SafeAreaView, Text } from "react-native";
import React from "react";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text>d</Text>
        <Text>d</Text>
        <Text>d</Text>
        <Text>d</Text>
        <Text>d</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
  },
});
