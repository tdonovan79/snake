import React from 'react'
import { View, Text } from 'react-native'
import {GameScreenStyle} from '../styles/GameScreenStyle.js'
import Board from './Board.js'



export default function GameScreen() {
    return (
        <View style={GameScreenStyle.container}>
            <Board/>
        </View>
    )
}
