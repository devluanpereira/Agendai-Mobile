import { Alert, Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";
import icon from "../../constants/icon";
import { styles } from "./account.style";
import { useState } from "react";
import api from "../../constants/api";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

function Account(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Função para executar o registro
    async function ExecuteAccount() {
        // Validação dos campos
        if (!name || !email || !password) {
            Alert.alert("Por favor, preencha todos os campos.");
            return;
        }

        // Validação de formato de email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            Alert.alert("Por favor, insira um e-mail válido.");
            return;
        }

        try {
            // Chamada à API para registrar o usuário
            const response = await api.post("/users/register", {
                name,
                email,
                password
            });

            if (response.data) {
                Alert.alert("Conta criada com sucesso!", "Agora faça o login com suas credenciais.");
                props.navigation.goBack(); // Redireciona para a página de login
            }

        } catch (error) {
            // Tratamento de erros da API
            if (error.response?.data?.error)
                Alert.alert(error.response.data.error);
            else
                Alert.alert("Ocorreu um erro. Tente novamente mais tarde");
        }
    }

    return (
        <SafeAreaView style={styles.safe}>
            <KeyboardAwareScrollView style={styles.container}>
                <View style={styles.header}>
                    <Image
                        source={icon.logologin}
                        style={styles.headerLogo}
                        alt="Logo" />

                    <Text style={styles.title}>Criar conta na Agendai</Text>
                    <Text style={styles.subtitle}>Gerencie suas consultas e reserve quando e onde estiver!</Text>
                </View>

                <View style={styles.form}>
                    <View style={styles.input}>
                        <Text style={styles.inputLabel}>Nome:</Text>

                        <TextInput
                            style={styles.inputControl}
                            placeholder="jhon"
                            onChangeText={(texto) => setName(texto)}
                        />
                    </View>

                    <View style={styles.input}>
                        <Text style={styles.inputLabel}>E-mail:</Text>

                        <TextInput
                            style={styles.inputControl}
                            autoCapitalize="none"
                            autoCorrect={false}
                            placeholder="jhon@example.com"
                            keyboardType="email-address"
                            onChangeText={(texto) => setEmail(texto)} 
                        />
                    </View>

                    <View style={styles.input}>
                        <Text style={styles.inputLabel}>Senha:</Text>

                        <View style={styles.passwordContainer}>
                            <TextInput
                                style={styles.inputControl}
                                secureTextEntry={true}
                                placeholder="*******"
                                onChangeText={(texto) => setPassword(texto)}
                            />
                        </View>
                    </View>

                    <View style={styles.formAction} >
                        <TouchableOpacity onPress={ExecuteAccount}>
                            <View style={styles.btn} >
                                <Text style={styles.btnText}>
                                    Criar
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAwareScrollView>

            <TouchableOpacity onPress={() => props.navigation.navigate("login")}>
                <Text style={styles.formFooter}>
                    Já tenho conta! {''}
                    <Text style={{ textDecorationLine: 'underline' }}>Fazer login.</Text>
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default Account;
