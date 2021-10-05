import React, { useState, useEffect } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { useFonts, Raleway_400Regular, Raleway_800ExtraBold } from '@expo-google-fonts/raleway'
import { useNavigation, StackActions } from '@react-navigation/native'
import styles from './style'
import AppLoading from 'expo-app-loading'
import Icon from 'react-native-vector-icons/Feather'
import firebase from '../firebase'

console.disableYellowBox = true

export default function App({route}) {

    const [name, setName] = useState('')
    const [loading, setLoading] = useState(false)
    const navigation = useNavigation()

    useEffect(() => {
        async function data() {
            await firebase.database().ref(`usuarios/${route.params.user}/nome`).on('value', (snapshot) => {
                setName(snapshot.val())
                setLoading(true)
            })
        }
        data()
    })

    async function logout() {
        await firebase.auth().signOut()
        navigation.dispatch(StackActions.popToTop())
    }

    let [fontLoaded] = useFonts ({
        Raleway_400Regular,
        Raleway_800ExtraBold
    })

    if (!fontLoaded || !loading) {
        return <AppLoading/>
    }
    else {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.txtHeader}>Home</Text>
                    <Icon
                        name="log-out"
                        size={25}
                        color="#FFF"
                        onPress={logout}
                    />
                </View>
                <View style={styles.content}>
                    <Text style={styles.txtHello}>Olá, {name}</Text>
                </View>
                
            </View>
        )
    }

    
}