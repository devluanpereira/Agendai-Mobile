import { Alert, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import icon from "../../constants/icon";
import { styles } from "./account.style";
import Button from "../../components/button/button";
import { useState } from "react";
import api from "../../constants/api";

function Account(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false); // Estado para carregamento

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

        // Inicia o carregamento
        setLoading(true);

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
        } finally {
            // Finaliza o carregamento
            setLoading(false);
        }
    }

    return (
        <View style={styles.container} >
            {/* Logo */}
            <View style={styles.containerLogo} >
                <Image source={icon.logo} style={styles.logo} />
            </View>

            {/* Formulário de Cadastro */}
            <View>
                {/* Campo de Nome */}
                <View style={styles.containerInput} >
                    <TextInput
                        placeholder="Nome"
                        style={styles.input}
                        onChangeText={(texto) => setName(texto)}
                    />
                </View>

                {/* Campo de E-mail */}
                <View style={styles.containerInput} >
                    <TextInput
                        placeholder="E-mail"
                        style={styles.input}
                        keyboardType="email-address"
                        onChangeText={(texto) => setEmail(texto)}
                    />
                </View>

                {/* Campo de Senha */}
                <View style={styles.containerInput} >
                    <TextInput
                        placeholder="Senha"
                        style={styles.input}
                        secureTextEntry={true}
                        onChangeText={(texto) => setPassword(texto)}
                    />
                </View>

                {/* Botão de Criar Conta */}
                <Button
                    text={loading ? "Carregando..." : "Criar Conta"}
                    onPress={ExecuteAccount}
                    disabled={loading}
                />
            </View>

            {/* Rodapé com link para fazer login */}
            <View style={styles.footer} >
                <Text>Já tenho conta. </Text>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <Text style={styles.footerLink}>Fazer login.</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Account;
