import React from "react";
import {View} from "react-native";
import { WebView } from "react-native-webview"

export default function Profile({navigation}){
    return <WebView style={{flex:1}} source={{uri:`https://github.com/${navigation.getParam("github_userName")}`}}/>
}