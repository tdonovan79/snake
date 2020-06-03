import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {StartStyle} from '../styles/StartStyle.js'

const goToGameScreen = () => {
    Actions.GameScreen()
}

export default function Start() {
    return (
        <View style={StartStyle.start}>
            <Text style={StartStyle.title}>Snake</Text>
            <TouchableOpacity onPress={goToGameScreen}>
                <Text style={StartStyle.button}>Play</Text>
            </TouchableOpacity>
        </View>
    )
}
