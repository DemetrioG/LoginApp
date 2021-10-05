import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { useFonts, Raleway_400Regular, Raleway_800ExtraBold } from '@expo-google-fonts/raleway'
import { useNavigation } from '@react-navigation/native'
import styles from './style'
import AppLoading from 'expo-app-loading'
import firebase from '../firebase'


export default function Login() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigation = useNavigation()

    let [fontLoaded] = useFonts ({
        Raleway_400Regular,
        Raleway_800ExtraBold
    })

    async function signin() {

        await firebase.auth().createUserWithEmailAndPassword(email,password)
        .then((v) => {
            
            //Cadastra o nome na database conforme o UID criado, para ser relacionado
            firebase.database().ref('usuarios').child(v.user.uid).set({
                nome: name
            })
            alert('Usuário criado com sucesso.')
            navigation.navigate('Login')
        })
        .catch((error) => {
            if (error.code === 'auth/weak-password') {
                alert('Sua senha deve ter pelo menos 6 caracteres.')
            }
            else if (error.code === 'auth/invalid-email') {
                alert('E-mail inválido.')
            }
            else if (error.code === 'auth/email-already-in-use') {
                alert('Usuário já cadastrado.')
            }
            else {
                alert('Verifique os campos informados.')
            }
        })    
    }

    if (!fontLoaded) {
        return <AppLoading/>
    }
    else {
        return (
            <View style={styles.container}>
                <View style={styles.viewTop}/>
                <View style={styles.viewBottom}/>
                <Text style={styles.txtTitle}>Cadastre-se</Text>
                <TextInput
                    placeholderTextColor="#3e3e3e"
                    placeholder="Seu nome"
                    style={styles.input}
                    onChangeText={(v) => setName(v)}
                    value={name}
                />
                <TextInput
                    placeholderTextColor="#3e3e3e"
                    placeholder="Seu melhor e-mail"
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
                    <TouchableOpacity style={styles.btnLogin} onPress={signin}>
                        <Text style={styles.txtLogin}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>   
            </View>
        )
    }  
}