import * as React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  View
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import * as WebBrowser from "expo-web-browser";
import { textStyle } from "../constants/Styles/text";
import { containerStyle } from "../constants/Styles/container";
import { imageStyle } from "../constants/Styles/image";
import { inputStyle } from "../constants/Styles/input";
import { MonoText } from "../components/StyledText";

export default function HomeScreen() {
  return (
    <View style={containerStyle.container}>
      <ScrollView
        style={containerStyle.container}
        contentContainerStyle={containerStyle.contentContainer}
      >
        <View style={containerStyle.hdrCont}>
          <Image
            source={
              __DEV__
                ? require("../assets/images/robot-dev.png")
                : require("../assets/images/robot-prod.png")
            }
            style={imageStyle.welcomeImage}
          />
        </View>

        <View style={containerStyle.hdrCont}>
          <Text style={textStyle.hdrTxt}>Blind Dating</Text>
          <View style={containerStyle.hdrCont}>
            <TextInput
              style={inputStyle.loginInput}
              placeholder="Username"
              autoCompleteType='username'
              textContentType='username'
            ></TextInput>
            <TextInput
              style={inputStyle.loginInput}
              placeholder="Password"
              autoCompleteType='password'
              textContentType='password'
              secureTextEntry={true}
            ></TextInput>
            <TouchableOpacity style={inputStyle.loginInput}><Text style={textStyle.hdrTxt}>Login</Text></TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null
};
