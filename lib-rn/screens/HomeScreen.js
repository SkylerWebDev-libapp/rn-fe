import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import { textStyle } from '../constants/Styles/text'
import { containerStyle } from '../constants/Styles/container'
import { MonoText } from '../components/StyledText';

export default function HomeScreen() {
  return (
    <View style={containerStyle.container}>
      <ScrollView style={containerStyle.container} contentContainerStyle={containerStyle.contentContainer}>
        <View style={containerStyle.welcomeContainer}>
          <Image
            source={
              __DEV__
                ? require('../assets/images/robot-dev.png')
                : require('../assets/images/robot-prod.png')
            }
            style={textStyle.welcomeImage}
          />
        </View>

        <View style={containerStyle.getStartedContainer}>
          <DevelopmentModeNotice />

          <Text style={textStyle.getStartedText}>Blind Dating</Text>

          <View style={[containerStyle.codeHighlightContainer, containerStyle.homeScreenFilename]}>
            <MonoText>screens/HomeScreen.js</MonoText>
          </View>

          <Text style={textStyle.getStartedText}>
            Change any of the text, save the file, and your app will automatically reload.
          </Text>
        </View>

        <View style={containerStyle.helpContainer}>
          <TouchableOpacity onPress={handleHelpPress} style={containerStyle.helpLink}>
            <Text style={textStyle.helpLinkText}>Help, it didn’t automatically reload!</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={containerStyle.tabBarInfoContainer}>
        <Text style={textStyle.tabBarInfoText}>This is a tab bar. You can edit it in:</Text>

        <View style={[containerStyle.codeHighlightContainer, containerStyle.navigationFilename]}>
          <MonoText style={textStyle.codeHighlightText}>navigation/BottomTabNavigator.js</MonoText>
        </View>
      </View>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={textStyle.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={textStyle.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use useful development
        tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={textStyle.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/workflow/development-mode/');
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/get-started/create-a-new-app/#making-your-first-change'
  );
}
