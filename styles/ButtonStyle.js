import {StyleSheet} from 'react-native'
const ButtonStyle = StyleSheet.create({
    buttonContainer: {
        flexWrap: 'wrap', 
        alignItems: 'flex-start',
        flexDirection:'row',
    },
    button: {
        flexDirection:'row',
        height: 70,
        width: 50,
        borderColor: 'rgb(94, 235, 52)',
        borderWidth: 10,
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center',
        margin: 15
    },
    buttonText: {
        color: 'white',
        fontFamily: 'Futura',
        fontSize: 40,
    }
});
export {ButtonStyle}