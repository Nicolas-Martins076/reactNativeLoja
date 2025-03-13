import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Alert } from 'react-native';
import { useRouter } from 'expo-router';

const Login = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (!email || !password) {
            Alert.alert('Erro', 'Todos os campos são obrigatórios.');
            return;
        }

        if (password.length < 6) {
            Alert.alert('Erro', 'A senha deve ter pelo menos 6 caracteres.');
            return;
        }

        // Validação do e-mail
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailRegex.test(email)) {
            Alert.alert('Erro', 'E-mail inválido.');
            return;
        }

        // Se tudo estiver certo, avançar
        Alert.alert('Sucesso', 'Login realizado com sucesso!');
        router.replace('/(tabs)/home');
    };

    return (
        <LinearGradient
            colors={['#DBDBD3', '#C9C9C2', '#B8B8B1', '#A7A7A1', '#979792', '#8A8A85', '#646462']}
            style={styles.container}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
        >
            <View style={styles.formContainer}>
                {/* LOGO */}
                <View style={styles.logoContainer}>
                    <Image
                        source={require('../assets/images/logo2.png')}
                        style={styles.logo}
                    />
                </View>

                {/* TÍTULO */}
                <Text style={styles.title}>Login</Text>

                {/* CAMPOS DE ENTRADA */}
                <TextInput 
                    style={styles.input} 
                    placeholder="E-mail*" 
                    placeholderTextColor="#666" 
                    keyboardType="email-address" 
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput 
                    style={styles.input} 
                    placeholder="Senha*" 
                    placeholderTextColor="#666"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />

                {/* BOTÕES */}
                <TouchableOpacity 
                    onPress={handleLogin} 
                    style={styles.loginButton}
                >
                    <Text style={styles.loginButtonText}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    onPress={() => router.replace('/welcome')} 
                    style={styles.registerButton}
                >
                    <Text style={styles.registerButtonText}>Voltar</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    formContainer: {
        width: '80%',
        alignItems: 'center',
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 50, // Aumentando o espaço abaixo da logo
    },
    logo: {
        width: 250, // Ajustei para o mesmo tamanho da logo da página de welcome
        height: 250,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFF',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        backgroundColor: '#FFF',
        height: 50,
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 10,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#CCC',
    },
    loginButton: {
        width: '100%',
        height: 50,
        backgroundColor: '#FFFFFF', // Branco
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#000', // Borda preta para o botão branco
    },
    registerButton: {
        width: '100%',
        height: 50,
        backgroundColor: '#000', // Preto
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginButtonText: {
        color: '#000', // Preto (contraste com fundo branco)
        fontSize: 16,
        fontWeight: 'bold',
    },
    registerButtonText: {
        color: '#FFF', // Branco (contraste com fundo preto)
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Login;
