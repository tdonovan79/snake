
import {StyleSheet} from 'react-native'
const BoardStyle = StyleSheet.create({
    board: {
        height: 320,
        width: 320,
        display: 'flex',
        flexDirection: 'row',
        borderColor: 'rgb(94, 235, 52)',
        borderWidth: 10
    },
    square: {
        borderColor: 'black',
        borderWidth: 1, 
        height: 15, 
        width: 15
    }
});
export {BoardStyle}