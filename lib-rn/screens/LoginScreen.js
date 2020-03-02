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
import { buttonStyle } from '../constants/Styles/button'
import { MonoText } from "../components/StyledText";

export default function HomeScreen() {
  const [userNameValue, userNameOnChangeText] =React.useState('')
  console.log(userNameValue)
  const [passwordValue, passwordOnChangeText] =React.useState('')
  console.log(passwordValue)
  const onSubmit = () => {

   const values = JSON.stringify({userName : userNameValue, password: passwordValue})
        console.log(values)
  }
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
                ? require("../assets/images/bdLogo.png")
                : require("../assets/images/bdLogo.png")
            }
            style={imageStyle.welcomeImage}
          />
        </View>

        <View style={containerStyle.hdrCont}>
          <Text style={textStyle.hdrTxt}>Blind Dating</Text>
          <View style={containerStyle.hdrCont}>
            <TextInput
              style={inputStyle.loginInput}
              placeholder='Username'
              placeholderTextColor='#fff'
              autoCompleteType='username'
              textContentType='username'
              value={userNameValue}
              onChangeText={text => userNameOnChangeText(text)}
            ></TextInput>
            <TextInput
              style={inputStyle.loginInput}
              placeholder="Password"
              placeholderTextColor="#fff"
              autoCompleteType='password'
              textContentType='password'              
              value={passwordValue}
              onChangeText={text => passwordOnChangeText(text)}
              secureTextEntry={true}
            ></TextInput>
            <TouchableOpacity style={buttonStyle.regButton} onPress={onSubmit}
            ><Text style={textStyle.tOText}>Login</Text></TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null
};
