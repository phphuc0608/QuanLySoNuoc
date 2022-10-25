import React, { useState, Component, useEffect } from "react";
import {
  Pressable,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Button,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import SignInScreen from "../screen/SignIn/SignInScreen";
import MainScreen from "../screen/MainScreen/MainScreen";
import LogOut from "../screen/LogOut/LogOutScreen";
import Details from "../screen/GhiSoNuoc/Elements/Details";
import GhiSoNuoc from "../screen/GhiSoNuoc/Connect";
import DuLieuNgoaiTuyen from "../screen/GhiSoNuoc/Elements/DuLieuNgoaiTuyen";
import GhiChiSo from "../screen/GhiSoNuoc/Elements/GhiChiSo";

const Stack = createStackNavigator();
//screenOptions={{ headerShown: false }} giau header
//initialRouteName="SignIn" trang dau tien hien thi la SignIn
const MainNavigator = () => {
  const [headerRight, setHeaderRight] = useState(true);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SignIn"
        screenOptions={{ headerStyle: { backgroundColor: "#7EC0EE" } }}
      >
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{ headerShown: false, title: "Trang chủ" }}
        />
        <Stack.Screen
          name="LogOut"
          component={LogOut}
          options={{
            title: "Thông tin chi tiết",
            headerRight: () => (
              <Button onPress={() => alert("This is a button!")} title="Sửa" />
            ),
          }}
        />
        <Stack.Screen
          name="GhiSoNuoc"
          component={GhiSoNuoc}
          options={{
            // headerShown: false,
            title: "Ghi số nước",
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            title: "Chi tiết",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  textPress: {
    fontSize: 13,
    fontWeight: "bold",
    color: "white",
  },
});
export default MainNavigator;

// import React from "react";
// import { ActivityIndicator, Button, View, Text } from "react-native";
// import { createStackNavigator } from "@react-navigation/stack";
// import { NavigationContainer } from "@react-navigation/native";
// import SignInScreen from "../screen/SignIn/SignInScreen";
// import MainScreen from "../screen/MainScreen/MainScreen";

// const Stack = createStackNavigator();
// //screenOptions={{ headerShown: false }} giau header
// //initialRouteName="SignIn" trang dau tien hien thi la SignIn
// const MainNavigator = () => {
//   const [loading, setLoading] = useState(false);
//   const [isAuth, setAuth] = useState(false);

//   useEffect(() => {
//     setLoading(true);
//     // Thuc hien buoc kiem tra nguoi dung da dang nhap hay chua
//     setLoading(false);
//   })

//   return (
//     {loading ? <ActivityIndicator /> : (<NavigationContainer>
//       {isAuth ? <AuthNavigator />}
//     </NavigationContainer>)}
//   );
// };
