import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import {BoardStyle} from '../styles/BoardStyle.js'

export default function Board() {
    const colors = ['red', 'green']
    const [board, setBoard] = useState([])

    useEffect(() => {
        let newBoard = new Array(20)
        for (let i = 0; i < newBoard.length; i++) {
            newBoard[i] = new Array(20).fill(0)
        }
        setBoard(newBoard)
    }, [])
    return (
        <View style = {BoardStyle.board}>
            {board.map((row) => {
                return (
                    <View>
                        {row.map((square) => {
                            return <View style={{...BoardStyle.square, backgroundColor: colors[square]}}/>
                        })}
                    </View>
                )
            })}
        </View>
    )
}
