import { Alert, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import icon from "../../constants/icon";
import { styles } from "./login.style";
import Button from "../../components/button/button";
import api from "../../constants/api";
import { useContext, useState, useRef } from "react";
import { AuthContext } from "../../contexts/auth";
import AsyncStorage from '@react-native-async-storage/async-storage'; // Importa AsyncStorage

function Login(props) {

    const { setUser } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isPasswordVisible, setIsPasswordVisible] = useState(false); // Estado para controlar visibilidade da senha
    const [loading, setLoading] = useState(false); // Estado de carregamento
    const passwordInputRef = useRef(null); // Referência para campo de senha

    // Função para executar o login
    async function ExecuteLogin() {
        if (!email || !password) {
            Alert.alert("Por favor, preencha todos os campos.");
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            Alert.alert("Por favor, insira um e-mail válido.");
            return;
        }

        setLoading(true);

        try {
            const response = await api.post("/users/login", {
                email,
                password
            });

            console.log(response.data); // Verifique a estrutura da resposta aqui

            if (response.data) {
                const token = response.data.token;
                console.log("Token recebido:", token); // Veja se o token está correto

                // Verifique se o token não é undefined antes de salvar
                if (token) {
                    await AsyncStorage.setItem('authToken', token);
                    api.defaults.headers.common["Authorization"] = "Bearer " + token;
                    setUser(response.data);
                } else {
                    Alert.alert("Erro: Token não recebido.");
                }
            }

        } catch (error) {
            console.log(error); // Log do erro no console para debug

            if (error.response) {
                // Se a API retornar um erro específico, exiba a mensagem
                console.log(error.response.data); // Detalhe do erro da API
                Alert.alert(error.response.data.error || "Erro desconhecido");
            } else if (error.request) {
                // Erro na requisição (sem resposta da API)
                console.log(error.request); // Log do request para debug
                Alert.alert("Nenhuma resposta do servidor. Verifique sua conexão.");
            } else {
                // Outro erro durante a configuração da requisição
                console.log("Erro", error.message); // Log da mensagem do erro
                Alert.alert("Erro inesperado. Tente novamente.");
            }
        } finally {
            setLoading(false);
        }
    }

    return (
        <View style={styles.container}>
            {/* Logo */}
            <View style={styles.containerLogo}>
                <Image source={icon.logo} style={styles.logo} />
            </View>

            {/* Formulário de Login */}
            <View>
                {/* Campo de e-mail */}
                <View style={styles.containerInput}>
                    <TextInput
                        placeholder="E-mail"
                        style={styles.input}
                        keyboardType="email-address"
                        returnKeyType="next"
                        onSubmitEditing={() => passwordInputRef.current.focus()} // Move para o campo de senha
                        onChangeText={(texto) => setEmail(texto)}
                    />
                </View>

                {/* Campo de senha com opção de mostrar/ocultar */}
                <View style={styles.containerInput}>
                    <TextInput
                        ref={passwordInputRef} // Referência do campo de senha
                        placeholder="Senha"
                        style={styles.input}
                        secureTextEntry={!isPasswordVisible} // Controle de visibilidade da senha
                        returnKeyType="done"
                        onChangeText={(texto) => setPassword(texto)}
                    />
                    <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                        <Text>{isPasswordVisible ? "Ocultar" : "Mostrar"}</Text>
                    </TouchableOpacity>
                </View>

                {/* Botão de Acessar */}
                <Button text={loading ? "Carregando..." : "Acessar"} onPress={ExecuteLogin} disabled={loading} />
            </View>

            {/* Rodapé com link para criar conta */}
            <View style={styles.footer}>
                <Text>Não tenho conta. </Text>
                <TouchableOpacity onPress={() => props.navigation.navigate("account")}>
                    <Text style={styles.footerLink}>Criar conta agora!</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Login;
