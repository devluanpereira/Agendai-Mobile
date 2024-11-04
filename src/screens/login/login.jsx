import { Alert, Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";
import icon from "../../constants/icon";
import { styles } from "./login.style";
import api from "../../constants/api";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

function Login(props) {
    const { setUser } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const showAlert = (message) => Alert.alert(message);

    const handleLogin = async () => {
        if (!email || !password) {
            return showAlert("Por favor, preencha todos os campos.");
        }
        if (!isValidEmail(email)) {
            return showAlert("Por favor, insira um e-mail válido.");
        }
        try {
            const response = await api.post("/users/login", { email, password });
            if (response.data?.token) {
                await AsyncStorage.setItem('authToken', response.data.token);
                api.defaults.headers.common["Authorization"] = `Bearer ${response.data.token}`;
                setUser(response.data);
            } else {
                showAlert("Erro: Token não recebido.");
            }
        } catch (error) {
            handleError(error);
        }
    };

    const handleError = (error) => {
        if (error.response) {
            showAlert(error.response.data.error || "Erro desconhecido");
        } else if (error.request) {
            showAlert("Nenhuma resposta do servidor. Verifique sua conexão.");
        } else {
            showAlert("Erro inesperado. Tente novamente.");
        }
    };

    return (
        <SafeAreaView style={styles.safe}>
            <KeyboardAwareScrollView style={styles.container}>
                <View style={styles.header}>
                    <Image
                        source={icon.logologin}
                        style={styles.headerLogo}
                        alt="Logo" />

                    <Text style={styles.title}>Faça login na Agendai</Text>
                    <Text style={styles.subtitle}>Agende suas consultas onde estiver e na palma da sua mão!</Text>
                </View>

                <View style={styles.form}>
                    <View style={styles.input}>
                        <Text style={styles.inputLabel}>E-mail:</Text>

                        <TextInput
                            style={styles.inputControl}
                            autoCapitalize="none"
                            autoCorrect={false}
                            placeholder="jhon@example.com"
                            keyboardType="email-address"
                            onChangeText={setEmail}
                        />
                    </View>

                    <View style={styles.input}>
                        <Text style={styles.inputLabel}>Senha:</Text>

                        <View style={styles.passwordContainer}>
                            <TextInput
                                style={styles.inputControl}
                                clearButtonMode="while-editing"
                                secureTextEntry={true}
                                placeholder="*******"
                                onChangeText={setPassword}
                            />
                        </View>
                    </View>

                    <View style={styles.formAction} >
                        <TouchableOpacity onPress={handleLogin}>
                            <View style={styles.btn} >
                                <Text style={styles.btnText}>
                                    Entrar
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAwareScrollView>

            <TouchableOpacity onPress={() => props.navigation.navigate("account")}>
                <Text style={styles.formFooter}>
                    Não tenho conta! {''}
                    <Text style={{ textDecorationLine: 'underline' }}>Criar conta.</Text>
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default Login;
