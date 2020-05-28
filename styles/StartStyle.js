import {StyleSheet} from 'react-native'
const startStyle = StyleSheet.create({
    start: {
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center', 
        backgroundColor: 'black'
    },
    button: {
        color: 'white',
        fontFamily: 'Futura',
        fontSize: 40,
        borderColor: 'rgb(94, 235, 52)',
        borderWidth: 10
    },
    title: {
        color: 'white',
        position: 'absolute',
        top: 0,
        fontFamily: 'Futura',
        fontSize: 70
    }
});
export {startStyle}