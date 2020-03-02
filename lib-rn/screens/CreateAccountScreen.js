import * as React from 'react';
import {  Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { containerStyle } from '../constants/Styles/container'
import { textStyle } from '../constants/Styles/text'
import { inputStyle } from '../constants/Styles/input'
export default function LinksScreen() {
  return (
    <ScrollView style={containerStyle.container} contentContainerStyle={containerStyle.contentContainer}>
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
            <TouchableOpacity style={inputStyle.loginInput}><Text style={textStyle.hdrTxt}>Create Account</Text></TouchableOpacity>
          </View>
        </View>
    </ScrollView>
  );
}

