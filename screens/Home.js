import React, { useState } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  ScrollView,
  Text,
  Switch,
  Dimensions,
  Platform,
} from "react-native";
function Home(props) {
  const [isDoorEnabled, setDoorEnabled] = useState(false);
  const DoorSwitch = () => setDoorEnabled((previousState) => !previousState);
  const [isFeedEnabled, setFeedEnabled] = useState(false);
  const FeedSwitch = () => setFeedEnabled((previousState) => !previousState);
  const [isLightEnabled, setLightEnabled] = useState(false);
  const LightSwitch = () => setLightEnabled((previousState) => !previousState);
  const [isCoolEnabled, setCoolEnabled] = useState(false);
  const CoolSwitch = () => setCoolEnabled((previousState) => !previousState);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.top}></View>
      <View style={styles.menu}>
        <View style={styles.row}>
          <View style={styles.name}>
            <Switch
              ios_backgroundColor="#3e3e3e"
              onValueChange={DoorSwitch}
              value={isDoorEnabled}
            />
          </View>
          <View style={styles.name}>
            <Text style={styles.txt}>باب المزرعة</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.name}>
            <Switch
              ios_backgroundColor="#3e3e3e"
              onValueChange={FeedSwitch}
              value={isFeedEnabled}
            />
          </View>
          <View style={styles.name}>
            <Text style={styles.txt}>نظام التعليف</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.name}>
            <Switch
              ios_backgroundColor="#3e3e3e"
              onValueChange={LightSwitch}
              value={isLightEnabled}
            />
          </View>
          <View style={styles.name}>
            <Text style={styles.txt}>الإضاءة</Text>
          </View>
        </View>
      </View>
      <View style={styles.rowWidget}>
        <View style={styles.weidget}>
          <Text style={styles.temp}>الرطوبة</Text>
          <Text style={styles.temp}>20%</Text>
        </View>
        <View style={styles.weidget}>
          <Text style={styles.temp}>درجة الحرارة</Text>
          <Text style={styles.temp}>20°</Text>
        </View>
      </View>
      <View style={styles.menu2}>
        <View style={styles.row}>
          <View style={styles.name}>
            <Switch
              ios_backgroundColor="#3e3e3e"
              onValueChange={CoolSwitch}
              value={isCoolEnabled}
            />
          </View>
          <View style={styles.name}>
            <Text style={styles.txt}>نظام التهوية</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#edf7f3",
  },
  top: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height / 10,
    backgroundColor: "#65a386",
  },
  menu: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    width: Dimensions.get("window").width,
    marginTop: Dimensions.get("window").height / 8,
  },
  menu2: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    width: Dimensions.get("window").width,
  },
  row: {
    flexDirection: "row",

    width: Dimensions.get("window").width,
    marginTop: 20,
  },
  txt: {
    fontSize: 20,
  },
  name: {
    width: Dimensions.get("window").width / 3,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    alignContent: "flex-end",
  },
  weidget: {
    height: Dimensions.get("window").width / 3,
    width: Dimensions.get("window").width / 3,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 20,
    fontWeight: "500",
  },
  rowWidget: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").width / 2,

    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
