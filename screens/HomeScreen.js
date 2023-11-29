import * as React from 'react';
import { Image, Text, View, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import {imageIndex} from "../constants/images.js"

// Import helper code
import Settings from '../constants/Settings';

// Import styling and components
import Styles from "../styles/MainStyle";
import { MyButton } from '../components/MyButton';
import { TextH1, TextParagraph } from "../components/StyledText";



export default function HomeScreen(props) {

  const [isLogoColor, setIsLogoColor] = React.useState(true);

  function toggleLogo() {
    setIsLogoColor(!isLogoColor);
  }
  
  function showViewPeople() {
    props.navigation.replace('Root', { screen: 'People' });
  }
  
  function showHelp() {
    props.navigation.replace('Root', { screen: 'Help' });
  }

  return (
    <SafeAreaView style={Styles.safeAreaView}>
      <ScrollView style={Styles.container} contentContainerStyle={Styles.contentContainer}>
        <View style={Styles.homeLogoContainer}>
          <Pressable onPress={toggleLogo}>
            <Image source={imageIndex[isLogoColor ? 'logo' : 'mono']} style={Styles.homeLogo} />
          </Pressable>
        </View>    

    <View style={Styles.homeHeadingContainer}>
      <Text style={Styles.homeHeading}>ROI HR Management System</Text>
    </View>

    <View style={Styles.homeButtonContainer}>
      <MyButton
        text="View people"
        type="major" // default*|major|minor
        size="large" // small|medium*|large
        onPress={showViewPeople}
        buttonStyle={Styles.homeButton}
      />
      <MyButton
        text="Show help screen"
        type="default" // default*|major|minor
        size="large" // small|medium*|large
        onPress={showHelp}
        buttonStyle={Styles.homeButton}
      />
    </View>

    <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
  <Text style={{ color: 'lightgray', fontSize: 14 }}>Developed by</Text>
  <Text style={{ fontSize: 18 }}>Thomas Bush</Text>
</View>

  </ScrollView>
</SafeAreaView>
  );
}