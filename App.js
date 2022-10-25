/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import { StyleSheet, Text, useColorScheme } from "react-native";
import MainNavigator from "./source/navigation/AppNavi";
import GlobalProvider from "./source/context/Provider";

const App = () => {
  return (
    <GlobalProvider>
      <MainNavigator />
    </GlobalProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
