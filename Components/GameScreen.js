import React, { useState, useEffect } from 'react'
import useInterval from 'react-useinterval';
import { View, TouchableOpacity, Text, Button } from 'react-native'
import { GameScreenStyle } from '../styles/GameScreenStyle.js'
import Board from './Board.js'
import { ButtonStyle } from '../styles/ButtonStyle.js'


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
        if (endGame) {
            clearTimeout(gameRunner)
        }
        if (!showButton) {
            checkHead()
            setReRender(!reRender)
        }
    }
    //create movement interval
    let gameRunner = useInterval(startMotion, 300)
    //start game or pause game
    const startPauseGame = () => {
        setShowButton(!showButton)
    }
    //check direction and move snake based on that, end game if is to hit edge of board
    function moveSnake(grow) {
        let newSnake = snake
        switch (direction) {
            case (0):
                if (snake[0][1] === 0) {
                    setEndGame(true)
                    break
                }
                newSnake.unshift([snake[0][0], snake[0][1] - 1])
                if (!grow) { newSnake.pop() }
                setSnake(newSnake)
                break
            case (1):
                if (snake[0][0] === 0) {
                    setEndGame(true)
                    break
                }
                newSnake.unshift([snake[0][0] - 1, snake[0][1]])
                if (!grow) { newSnake.pop() }
                setSnake(newSnake)
                break
            case (2):
                if (snake[0][1] === 19) {
                    setEndGame(true)
                    break
                }
                newSnake.unshift([snake[0][0], snake[0][1] + 1])
                if (!grow) { newSnake.pop() }
                setSnake(newSnake)
                break
            case (3):
                if (snake[0][0] === 19) {
                    setEndGame(true)
                    break
                }
                newSnake.unshift([snake[0][0] + 1, snake[0][1]])
                if (!grow) { newSnake.pop() }
                setSnake(newSnake)
                break
        }
    }
    //see if head and food are same square, if so, pass to check direction whether or not to grow snake. end game if to move into snake
    const checkHead = () => {
        if (snake[0][0] === food[0] && snake[0][1] === food[1]) {
            moveSnake(true)
            changeSquare()
        }
        else if (snake.filter(snakeBit => {
            return snakeBit[0] === snake[0][0] && snakeBit[1] === snake[0][1]
        }).length > 1) {
            setEndGame(true)
        }
        else {
            moveSnake(false)
        }
    }
    return (
        <View style={GameScreenStyle.container}>
            {!endGame ?
                <View style={GameScreenStyle.container}>
                    {
                        showButton ?
                            <TouchableOpacity onPress={startPauseGame}>
                                < Text style={GameScreenStyle.button}>Start Game</Text>
                            </TouchableOpacity >
                            :
                            <TouchableOpacity onPress={startPauseGame}>
                                <Text style={GameScreenStyle.button}>Pause</Text>
                            </TouchableOpacity>
                    }
                    <Board reRender={reRender} food={food} snake={snake} />
                    <View style={ButtonStyle.buttonContainer}>
                        <TouchableOpacity style={ButtonStyle.button}
                            onPress={() => {
                                //if snake is not going opposite direction, or snakes length === 1, change direction
                                if (direction !== 2 || snake.length === 1) { setDirection(0) }
                            }}>
                            <Text style= {ButtonStyle.buttonText}>^</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={ButtonStyle.button}
                            onPress={() => {
                                //if snake is not going opposite direction, or snakes length === 1, change direction
                                if (direction !== 1 || snake.length === 1) { setDirection(3) }
                            }}>
                            <Text style= {ButtonStyle.buttonText}>{">"}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={ButtonStyle.button}
                            onPress={() => {
                                //if snake is not going opposite direction, or snakes length === 1, change direction
                                if (direction !== 3 || snake.length === 1) { setDirection(1) }
                            }}>
                            <Text style= {ButtonStyle.buttonText}>{"<"}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={ButtonStyle.button}
                            onPress={() => {
                                //if snake is not going opposite direction, or snakes length === 1, change direction
                                if (direction !== 0 || snake.length === 1) { setDirection(2) }
                            }}>
                            <Text style= {ButtonStyle.buttonText}>{"v"}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                :
                <View style={GameScreenStyle.container}>
                    <Text style={GameScreenStyle.button}>You Lose!</Text>
                </View>
            }

        </View >
    )
}
