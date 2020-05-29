import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import {BoardStyle} from '../styles/BoardStyle.js'

export default function Board({food, snake}) {
    const colors = ['red', 'black', 'green']
    const [board, setBoard] = useState([])

    useEffect(() => {
        let newBoard = new Array(20)
        //generate board with food
        for (let i = 0; i < newBoard.length; i++) {
            newBoard[i] = new Array(20).fill(0)
            if(i === food[0]){
                newBoard[food[0]][food[1]] = 1
            }
        }
        // add snake
        for(let i = 0 ; i < snake.length ; i++){
            newBoard[snake[i][0]][snake[i][1]] = 2
        }
        setBoard(newBoard)
    }, [food, snake])
    return (
        <View style = {BoardStyle.board}>
            {board.map((row) => {
                return (
                    <View>
                        {row.map((square) => {
                            return <View 
                                style={{...BoardStyle.square, backgroundColor: colors[square]}}
                            />
                        })}
                    </View>
                )
            })}
        </View>
    )
}
