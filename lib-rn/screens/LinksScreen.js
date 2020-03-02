import * as React from 'react';
import {  Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { containerStyle } from '../constants/Styles/container'
import { textStyle } from '../constants/Styles/text'
export default function LinksScreen() {
  return (
    <ScrollView style={containerStyle.container} contentContainerStyle={containerStyle.contentContainer}>
      <OptionButton
        icon="md-school"
        label="Read the Expo documentation"
        onPress={() => WebBrowser.openBrowserAsync('https://docs.expo.io')}
      />

      <OptionButton
        icon="md-compass"
        label="Read the React Navigation documentation"
        onPress={() => WebBrowser.openBrowserAsync('https://reactnavigation.org')}
      />

      <OptionButton
        icon="ios-chatboxes"
        label="Ask a question on the forums"
        onPress={() => WebBrowser.openBrowserAsync('https://forums.expo.io')}
        isLastOption
      />
    </ScrollView>
  );
}

function OptionButton({ icon, label, onPress, isLastOption }) {
  return (
    <RectButton style={[containerStyle.option, isLastOption && containerStyle.lastOption]} onPress={onPress}>
      <View style={{ flexDirection: 'row' }}>
        <View style={containerStyle.optionIconContainer}>
          <Ionicons name={icon} size={22} color="rgba(0,0,0,0.35)" />
        </View>
        <View style={containerStyle.optionTextContainer}>
          <Text style={textStyle.optionText}>{label}</Text>
        </View>
      </View>
    </RectButton>
  );
}

