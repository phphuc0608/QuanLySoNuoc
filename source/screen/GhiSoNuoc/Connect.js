import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import TabNavigators from "../GhiSoNuoc/Elements/TabNavigators";
import { NavigationContainer } from "@react-navigation/native";
const Connect = () => {
  return (
    <>
      <View style={styles.container}>
        <TextInput placeholder="Tìm kiếm" style={styles.input} />
      </View>
      <TabNavigators />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    //marginTop: 12,
    height: 30,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: "#7EC0EE",
  },
  input: {
    width: "100%",
    margin: 2,
    fontSize: 17,
  },
});
export default Connect;
