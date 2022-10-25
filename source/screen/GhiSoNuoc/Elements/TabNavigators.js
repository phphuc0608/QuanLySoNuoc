import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import DuLieuNgoaiTuyen from "../Elements/DuLieuNgoaiTuyen";
import GhiChiSo from "../Elements/GhiChiSo";
import BackGround from "../../../../assets/images/background2.jpg";
const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: "#7EC0EE" },
      }}
    >
      <Tab.Screen name="Dữ liệu ngoại tuyến" component={DuLieuNgoaiTuyen} />
      <Tab.Screen name="Ghi chỉ số" component={GhiChiSo} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});
export default TabNavigator;
