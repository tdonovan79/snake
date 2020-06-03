import {StyleSheet} from 'react-native'
const GameScreenStyle = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center', 
    },
    button: {
        color: 'white',
        fontFamily: 'Futura',
        fontSize: 20,
        marginBottom: 10,
        borderColor: 'rgb(94, 235, 52)',
        borderWidth: 10
    }
});
export {GameScreenStyle}