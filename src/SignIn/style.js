import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#F0EFF4',
        position: 'relative'
    },
    viewTop: {
        position: 'absolute',
        top: -125,
        left: -30,
        width: 400,
        height: 250,
        backgroundColor: '#DA4167',
        transform: [{rotate: "-20deg"}],
        borderBottomLeftRadius: 150,
        borderBottomRightRadius: 200
    },
    viewBottom: {
        position: 'absolute',
        top: 480,
        left: 100,
        width: 400,
        height: 300,
        backgroundColor: '#832161',
        transform: [{rotate: "-20deg"}],
        borderTopLeftRadius: 150,
        borderTopRightRadius: 250
    },
    txtTitle: {
        marginTop: 20,
        marginBottom: 30,
        fontFamily: 'Raleway_800ExtraBold',
        fontSize: 35,
        color: '#FFF'
    },
    input: {
        fontFamily: 'Raleway_400Regular',
        fontSize: 16,
        marginTop: 30,
        padding: 15,
        paddingLeft: 30,
        backgroundColor: 'rgba(62, 62, 62, 0.2)',
        borderRadius: 15
    },
    viewBtn: {
        flexDirection: 'column',
        alignItems: 'flex-end'
    },
    btnLogin: {
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 40,
        backgroundColor: '#DA4167',
        borderRadius: 10
    },
    txtLogin: {
        fontFamily: 'Raleway_800ExtraBold',
        color: '#FFF'
    },
})

export default styles