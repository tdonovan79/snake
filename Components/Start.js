import React from 'react'
import { TouchableOpacity, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

const goToGameScreen = () => {
    Actions.GameScreen()
}

export default function Start() {
    return (
        <TouchableOpacity style={{ margin: 128 }} onPress={goToGameScreen}>
            <Text>Start</Text>
        </TouchableOpacity>
    )
}
