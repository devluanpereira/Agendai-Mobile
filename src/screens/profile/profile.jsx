import { Alert, Text, View } from "react-native";
import { styles } from "./profile.style";
import api from "../../constants/api"
import { useEffect, useState } from "react";

function Profile() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");


    async function LoadProfile() {
        try {
            const response = await api.get("/users/profile");


            if (response.data?.name)
                setName(response.data.name);
                setEmail(response.data.email);

        } catch (error) {
            if (error.response?.data.error)
                Alert.alert(error.response.data.error);
            else
                Alert.alert("Ocorreu um erro. Tente novamente mais tarde");
        }
    }

    useEffect(() => {
        LoadProfile();
    })

    return <View style={styles.container}>
        <View style={styles.item}>
            <Text style={styles.title}>Nome</Text>
            <Text style={styles.text}>{name}</Text>
        </View>

        <View style={styles.item}>
            <Text style={styles.title}>E-mail</Text>
            <Text style={styles.text}>{email}</Text>
        </View>
    </View>
}

export default Profile;