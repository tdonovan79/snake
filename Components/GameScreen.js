import React, { useState, useEffect } from 'react'
import useInterval from 'react-useinterval';
import { View, TouchableOpacity, Text, Button } from 'react-native'
import { GameScreenStyle } from '../styles/GameScreenStyle.js'
import Board from './Board.js'
import {ButtonStyle} from '../styles/ButtonStyle.js'


export default function GameScreen() {
    const [snake, setSnake] = useState([])
    const [food, setFood] = useState([])
    const [showButton, setShowButton] = useState(true)
    const [direction, setDirection] = useState(3) //0 - up 1 - left 2 - down 3 - right
    const [endGame, setEndGame] = useState(false)
    const [reRender, setReRender] = useState(false)

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
        while (snake.includes([row, column])) {
            row = Math.floor(Math.random() * 20), column = Math.floor(Math.random() * 20)
        }
        setFood([row, column])
    }
    //start motion
    const startMotion = () => {
        if (!showButton) {
            checkDirection()
            checkHead()
            setReRender(!reRender)
        }
    }
    //create movement interval
    useInterval(startMotion, 1000)
    //start game or pause game
    const startPauseGame = () => {
        setShowButton(!showButton)
    }
    //check direction and move snake based on that
    function checkDirection() {
        let newSnake = snake
        switch (direction) {
            case (0):
                newSnake.unshift([snake[0][0], snake[0][1] - 1])
                newSnake.pop()
                setSnake(newSnake)
                break
            case (1):
                newSnake.unshift([snake[0][0] - 1, snake[0][1]])
                newSnake.pop()
                setSnake(newSnake)
                break
            case (2):
                newSnake.unshift([snake[0][0], snake[0][1] + 1])
                newSnake.pop()
                setSnake(newSnake)
                break
            case (3):
                newSnake.unshift([snake[0][0] + 1, snake[0][1]])
                newSnake.pop()
                setSnake(newSnake)
                break
        }
    }
    //
    const checkHead = () => {

    }
    return (
        <View style={GameScreenStyle.container}>
            {showButton ?
                <TouchableOpacity onPress={startPauseGame}>
                    <Text style={GameScreenStyle.button}>Start Game</Text>
                </TouchableOpacity>
                :
                <TouchableOpacity onPress={startPauseGame}>
                    <Text style={GameScreenStyle.button}>Pause</Text>
                </TouchableOpacity>
            }
            <Board reRender = {reRender} food={food} snake={snake} />
            <View style={ButtonStyle.buttonContainer}>
                <Button color='green' style={ButtonStyle.button}
                    onPress={() => {
                        setDirection(0);
                    }}
                    title="^"
                />
                <Button color='green' style={ButtonStyle.button}
                    onPress={() => {
                        setDirection(3);
                    }}
                    title=">"
                />
                <Button color='green' style={ButtonStyle.button}
                    onPress={() => {
                        setDirection(1);
                    }}
                    title="<"
                />
                <Button color='green' style={ButtonStyle.button}
                    onPress={() => {
                        setDirection(2);
                    }}
                    title="V"
                />
            </View>
        </View >
    )
}
