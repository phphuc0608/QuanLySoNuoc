import React from "react";
import {
  StyleSheet,
  View,
  Text,
  useWindowDimensions,
  Pressable,
  ScrollView,
  SafeAreaView,
  Image,
  ImageBackground,
} from "react-native";
import IconXacNhanThanhToan from "../../../assets/images/XacNhanThanhToanIcon.png";
import IconGhiSoNuoc from "../../../assets/images/GhiSoNuoc.png";
import MainImage from "../../../assets/images/background2.jpg";
import IconUser from "../../../assets/images/user_no_image.png";

const MainScreen = ({ navigation }) => {
  const callLogOut = () => {
    navigation.push("LogOut");
  };
  const callGhiSoNuoc = () => {
    navigation.push("GhiSoNuoc");
  };

  const { height } = useWindowDimensions();
  return (
    <ImageBackground style={styles.background} source={MainImage}>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={{ alignItems: "flex-end" }}>
            <Pressable onPress={callLogOut} style={styles.squareIconUser}>
              <Image style={styles.iconuser} source={IconUser} />
            </Pressable>
          </View>
          <View style={styles.container2}>
            <View style={styles.square} backgroundColor={"#0000FF"}>
              <Text style={styles.text}>Số khách hàng quản lý</Text>
              <Text style={styles.number}>88</Text>
            </View>
            <View style={styles.square} backgroundColor={"#A020F0"}>
              <Text style={styles.text}>Số tuyến quản lý</Text>
              <Text style={styles.number}>88</Text>
            </View>
            <View style={styles.square} backgroundColor={"#FA4616"}>
              <Text style={styles.text}>Số khách hàng chưa thanh toán</Text>
              <Text style={styles.number}>88</Text>
            </View>
          </View>
          <View style={styles.squareLabel}>
            <Text style={styles.label}>Chức năng</Text>
          </View>
          <View style={styles.squareButton}>
            <Pressable
              onPress={callGhiSoNuoc}
              style={styles.button}
              backgroundColor={"#FA4616"}
            >
              <View style={styles.squareIcon}>
                <Image
                  style={styles.iconGhiSoNuoc}
                  source={IconGhiSoNuoc}
                ></Image>
              </View>
              <Text style={styles.textButton}>Ghi số nước</Text>
            </Pressable>
            <Pressable style={styles.button} backgroundColor={"#A020F0"}>
              <View style={styles.squareIcon}>
                <Image
                  style={styles.iconXacNhanThanhToan}
                  source={IconXacNhanThanhToan}
                ></Image>
              </View>
              <Text style={styles.textButton}>Xác nhận thanh toán</Text>
            </Pressable>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 10,
  },
  container2: {
    //backgroundColor: "#7CA1B4",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    padding: 50,
  },
  square: {
    width: 100,
    height: 100,
    margin: 4,
    borderRadius: 10,
  },
  text: {
    flex: 1,
    textAlign: "center",
    fontSize: 13,
    fontWeight: "bold",
    margin: 8,
    color: "white",
  },
  number: {
    fontSize: 17,
    fontWeight: "bold",
    margin: 8,
    color: "white",
  },
  squareLabel: {
    padding: 20,
    justifyContent: "flex-start",
  },
  label: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
  },
  squareButton: {
    padding: 20,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  button: {
    width: 150,
    height: 200,
    borderRadius: 10,
  },
  textButton: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
    margin: 7,
    color: "white",
  },
  iconXacNhanThanhToan: {
    // backgroundColor: "#7CA1B4",
    width: 40,
    height: 40,
    // margin: 7,
  },
  squareIcon: {
    width: 40,
    height: 40,
    margin: 7,
    //backgroundColor: "#7CA1B4",
    justifyContent: "center",
  },
  iconGhiSoNuoc: {
    width: 20,
    height: 20,
  },
  iconuser: {
    width: 50,
    height: 50,
  },
  squareIconUser: {
    width: 60,
    height: 60,
    margin: 7,
    justifyContent: "center",
  },
});

export default MainScreen;
