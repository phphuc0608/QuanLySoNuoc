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
import HouseIcon from "../../../../assets/images/house.png";
import BackGround from "../../../../assets/images/background2.jpg";

const GhiChiSo = () => {
  const { height } = useWindowDimensions();
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.containerSquare}>
            <View style={styles.square}>
              <TouchableOpacity style={styles.squareHouse}>
                <Text numberOfLines={2} style={styles.text}>
                  Nguyễn Văn A
                </Text>
              </TouchableOpacity>
              <View>
                <Text style={styles.textJr}>Nhà số 1</Text>
              </View>
            </View>
            <View style={styles.square}>
              <TouchableOpacity style={styles.squareHouse}>
                <Text numberOfLines={2} style={styles.text}>
                  Trần Thị AVBDasdfasdfasdfasf
                </Text>
              </TouchableOpacity>
              <View>
                <Text style={styles.textJr}>Nhà số 1</Text>
              </View>
            </View>
            <View style={styles.square}>
              <TouchableOpacity style={styles.squareHouse}>
                <Text numberOfLines={2} style={styles.text}>
                  Nguyễn Văn A
                </Text>
              </TouchableOpacity>
              <View>
                <Text style={styles.textJr}>Nhà số 1</Text>
              </View>
            </View>
          </View>
          <View style={styles.containerSquare}>
            <View style={styles.square}>
              <TouchableOpacity style={styles.squareHouse}>
                <Text numberOfLines={2} style={styles.text}>
                  Nguyễn Văn A
                </Text>
              </TouchableOpacity>
              <View>
                <Text style={styles.textJr}>Nhà số 1</Text>
              </View>
            </View>

            <View style={styles.square}>
              <TouchableOpacity style={styles.squareHouse}>
                <Text numberOfLines={2} style={styles.text}>
                  Nguyễn Văn A
                </Text>
              </TouchableOpacity>
              <View>
                <Text style={styles.textJr}>Nhà số 1</Text>
              </View>
            </View>
            <View style={styles.square}>
              <TouchableOpacity style={styles.squareHouse}>
                <Text numberOfLines={2} style={styles.text}>
                  Nguyễn Văn A
                </Text>
              </TouchableOpacity>
              <View>
                <Text style={styles.textJr}>Nhà số 1</Text>
              </View>
            </View>
          </View>
          <View style={styles.containerSquare}>
            <View style={styles.square}>
              <TouchableOpacity style={styles.squareHouse}>
                <Text numberOfLines={2} style={styles.text}>
                  Nguyễn Văn A
                </Text>
              </TouchableOpacity>
              <View>
                <Text style={styles.textJr}>Nhà số 1</Text>
              </View>
            </View>
            <View style={styles.square}>
              <TouchableOpacity style={styles.squareHouse}>
                <Text numberOfLines={2} style={styles.text}>
                  Nguyễn Văn A
                </Text>
              </TouchableOpacity>
              <View>
                <Text style={styles.textJr}>Nhà số 1</Text>
              </View>
            </View>
            <View style={styles.square}>
              <TouchableOpacity style={styles.squareHouse}>
                <Text numberOfLines={2} style={styles.text}>
                  Nguyễn Văn A
                </Text>
              </TouchableOpacity>
              <View>
                <Text style={styles.textJr}>Nhà số 1</Text>
              </View>
            </View>
          </View>
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity style={styles.containerButton}>
              <Text style={styles.textLuu}>Đồng bộ</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#DDDDDD",
    flex: 1,
  },
  header: {
    height: 80,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containerSquare: {
    height: 150,
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
  },
  square: {
    alignItems: "center",
    flexDirection: "column",
  },
  squareHouse: {
    backgroundColor: "white",
    alignItems: "center",
    width: 80,
    height: 80,
    margin: 4,
    borderRadius: 10,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    alignItems: "center",
  },
  textJr: {
    margin: 4,
    fontSize: 15,
  },
  textGoBack: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  text: {
    fontSize: 15,
    marginTop: 20,
  },
  containerButton: {
    width: "50%",
    padding: 15,
    marginVertical: 15,
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "#7EC0EE",
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  textLuu: {
    fontWeight: "bold",
    color: "white",
  },
});
export default GhiChiSo;
