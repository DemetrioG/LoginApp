import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { useFonts, Raleway_400Regular, Raleway_800ExtraBold } from '@expo-google-fonts/raleway'
import { useNavigation } from '@react-navigation/native'
import styles from './style'
import AppLoading from 'expo-app-loading'
import firebase from '../firebase'


export default function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState('')
    const navigation = useNavigation()

    let [fontLoaded] = useFonts ({
        Raleway_400Regular,
        Raleway_800ExtraBold
    })

    async function login() {

        console.log(email)
        console.log(password)

        await firebase.auth().signInWithEmailAndPassword(email, password)
        .then((v) => {
            
            let userId = v.user.uid
            navigation.navigate('Home', { user: userId })
        })
        .catch((error) => {
            alert('Verifique os campos informados.')
            return
        })

        setEmail('')
        setPassword('') 
    }

    if (!fontLoaded) {
        return <AppLoading/>
    }
    else {
        return (
            <View style={styles.container}>
                <View style={styles.viewTop}/>
                <View style={styles.viewBottom}/>
                <Text style={styles.txtTitle}>Bem vindo!</Text>
                <TextInput
                    placeholderTextColor="#3e3e3e"
                    placeholder="Seu e-mail cadastrado"
                    style={styles.input}
                    onChangeText={(v) => setEmail(v)}
                    value={email}
                />
                <TextInput
                   placeholderTextColor="#3e3e3e"
                   placeholder="Sua senha"
                   style={styles.input}
                   onChangeText={(v) => setPassword(v)}
                   value={password}
                   secureTextEntry={true}
                />
                <View style={styles.viewBtn}>
                    <TouchableOpacity style={styles.btnLogin} onPress={login}>
                        <Text style={styles.txtLogin}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnSignIn} onPress={() => navigation.navigate('SignIn')}>
                        <Text style={styles.txtSignIn}>Cadastre-se</Text>
                    </TouchableOpacity>
                </View>   
            </View>
        )
    }  
}