import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0EFF4'
    },
    header: {
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#DA4167'
    },
    content: {
        padding: 20
    },
    txtHeader: {
        color: '#FFF',
        fontFamily: 'Raleway_800ExtraBold',
        fontSize: 20
    },
    txtHello: {
        color: '#3e3e3e',
        fontSize: 40,
        fontFamily: 'Raleway_800ExtraBold'
    },
})

export default styles