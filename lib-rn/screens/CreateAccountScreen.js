import * as React from 'react';
import {  Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { containerStyle } from '../constants/Styles/container'
import { textStyle } from '../constants/Styles/text'
import { inputStyle } from '../constants/Styles/input'
import { buttonStyle } from '../constants/Styles/button'
import { imageStyle } from "../constants/Styles/image";

export default function LinksScreen() {
  return (
    <ScrollView style={containerStyle.container} contentContainerStyle={containerStyle.contentContainer}>
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
              placeholder="Username"
              placeholderTextColor="#fff"
              autoCompleteType='username'
              textContentType='username'
            ></TextInput>
            <TextInput
              style={inputStyle.loginInput}
              placeholder="Password"
              placeholderTextColor="#fff"
              autoCompleteType='password'
              textContentType='password'
              secureTextEntry={true}
            ></TextInput>
            <TouchableOpacity style={buttonStyle.regButton}><Text style={textStyle.tOText}>Create Account</Text></TouchableOpacity>
          </View>
        </View>
    </ScrollView>
  );
}

