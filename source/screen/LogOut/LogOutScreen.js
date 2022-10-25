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
  TouchableOpacity,
} from "react-native";
import { Avatar } from "react-native-elements";
import IconUser from "../../../assets/images/user_no_image.png";
import MainImage from "../../../assets/images/background2.jpg";

const LogOut = ({ navigation }) => {
  const GoBack = () => {
    navigation.goBack();
  };
  const returnDangNhap = () => {
    navigation.navigate("SignIn");
  };
  const { height } = useWindowDimensions();
  return (
    <ImageBackground style={styles.background} source={MainImage}>
      <SafeAreaView style={styles.safe}>
        <ScrollView>
          <View style={styles.containerAva}>
            <Avatar
              containerStyle={{ margin: 40 }}
              size="large"
              rounded
              source={IconUser}
            />
          </View>
          {/**/}
          <View style={styles.container}>
            <View style={styles.squareText}>
              <Text style={styles.text}>Tên tài khoản</Text>
            </View>
            <View style={styles.squareText2}>
              <Text style={styles.text}>admin</Text>
            </View>
          </View>
          {/**/}
          <View style={styles.container}>
            <View style={styles.squareText}>
              <Text style={styles.text}>Họ và tên</Text>
            </View>
            <View style={styles.squareText2}>
              <Text style={styles.text}>Nguyễn Văn A</Text>
            </View>
          </View>
          {/**/}
          <View style={styles.container}>
            <View style={styles.squareText}>
              <Text style={styles.text}>Email</Text>
            </View>
            <View style={styles.squareText2}>
              <Text style={styles.text}>abc@gmail.com</Text>
            </View>
          </View>
          {/**/}
          <View style={styles.container}>
            <View style={styles.squareText}>
              <Text style={styles.text}>Ngày sinh</Text>
            </View>
            <View style={styles.squareText2}>
              <Text style={styles.text}>1/1/2002</Text>
            </View>
          </View>
          {/**/}
          <Pressable onPress={returnDangNhap} style={styles.press}>
            <Text style={styles.textLogOut}>Log out</Text>
          </Pressable>
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

  safe: { flex: 1, padding: 10 },
  containerAva: {
    height: 140,
    width: 360,
    padding: 2,
    alignItems: "center",
    //backgroundColor: "yellow",
  },
  press: {
    width: "50%",
    padding: 15,
    margin: 90,
    marginVertical: 15,
    alignItems: "center",
    borderRadius: 5,
    //type: "PRIMARY",
    backgroundColor: "#3B71F3",
  },
  textLogOut: {
    fontWeight: "bold",
    color: "white",
    fontSize: 16,
  },
  container: {
    height: 60,
    margin: 10,
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "#F8F8FF",
    alignContent: "space-around",
    borderRadius: 10,
  },
  // space: {
  //   height: 50,
  //   //backgroundColor: "red",
  // },

  text: {
    fontSize: 14,
  },
  squareText: {
    width: 50,
    height: 60,
    margin: 5,
    padding: 18,
    flex: 1,
  },
  squareText2: {
    width: 50,
    height: 60,
    margin: 4,
    padding: 20,
    alignItems: "flex-end",
    flex: 1,
  },
});

export default LogOut;
