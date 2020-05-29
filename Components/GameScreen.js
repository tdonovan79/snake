import React, {useState, useEffect} from 'react'
import { View, Button } from 'react-native'
import {GameScreenStyle} from '../styles/GameScreenStyle.js'
import Board from './Board.js'


export default function GameScreen() {
    const [snake, setSnake] = useState([])
    const [food, setFood] = useState([])

    useEffect(() => {
        snakeStart()
        changeSquare()
    }, [])

    //start snake in random location(not at edges)
    const snakeStart = () => {
        let row = Math.floor(Math.random() * 18) + 1, column = Math.floor(Math.random() * 18) + 1
        setSnake([[row, column]])
    }
    //change square to new location
    const changeSquare = () => {
        let row = Math.floor(Math.random() * 20), column = Math.floor(Math.random() * 20)
        while(snake.includes([row, column])){
            row = Math.floor(Math.random() * 20), column = Math.floor(Math.random() * 20)
        }
        setFood([row, column])
    }
    return (
        <View style={GameScreenStyle.container}>
            <Board food = {food} snake = {snake}/>
        </View>
    )
}
