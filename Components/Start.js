import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {startStyle} from '../styles/StartStyle.js'

const goToGameScreen = () => {
    Actions.GameScreen()
}

export default function Start() {
    return (
        <View style={startStyle.start}>
            <Text style={startStyle.title}>Snake</Text>
            <TouchableOpacity onPress={goToGameScreen}>
                <Text style={startStyle.button}>Start</Text>
            </TouchableOpacity>
        </View>
    )
}
