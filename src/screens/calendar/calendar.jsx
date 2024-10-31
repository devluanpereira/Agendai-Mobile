import { Alert, FlatList, Text, View } from "react-native";
import { styles } from "./calendar.style";
import Appointment from "../../components/appointment/appointment.jsx";
import { useEffect, useState } from "react";
import api from "../../constants/api.js";

function Calendar() {

    const [appointments, setAppointments] = useState([]);

    async function LoadAppoint() {
        try {
            const response = await api.get("/appointments");

            if (response.data)
                setAppointments(response.data);

        } catch (error) {
            if (error.response?.data?.error) {
                Alert.alert(error.response.data.error);
            } else {
                // Comentado para não exibir alerta em caso de erro genérico
                // Alert.alert("Ocorreu um erro. Tente novamente mais tarde");
                console.log("Erro ao carregar agendamentos:", error); // Apenas log do erro
            }
        }
    }

    function ConfirmDelete(id_appointment) {
        Alert.alert(
            "Confirmar Cancelamento",
            "Você tem certeza que deseja cancelar essa reserva?",
            [
                {
                    text: "Não",
                    onPress: () => console.log("Cancelado"),
                    style: "cancel"
                },
                {
                    text: "Sim",
                    onPress: () => DeleteAppoint(id_appointment)
                }
            ]
        );
    }

    async function DeleteAppoint(id_appointment) {
        try {
            const response = await api.delete("/appointments/" + id_appointment);

            if (response.status === 200 || response.status === 204)
                LoadAppoint();

        } catch (error) {
            if (error.response?.data?.error) {
                Alert.alert(error.response.data.error);
            } else {
                // Comentado para não exibir alerta em caso de erro genérico
                // Alert.alert("Ocorreu um erro. Tente novamente mais tarde");
                console.log("Erro ao excluir agendamento:", error); // Apenas log do erro
            }
        }
    }

    useEffect(() => {
        LoadAppoint();
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={appointments}
                keyExtractor={(appoint) => appoint.id_appointment?.toString()}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <Appointment
                        id_appointment={item.id_appointment}
                        service={item.service}
                        doctor={item.doctor}
                        specialty={item.specialty}
                        bookingDate={item.booking_date}
                        bookingHour={item.booking_hour}
                        onPress={() => ConfirmDelete(item.id_appointment)}
                    />
                )}
            />
        </View>
    );
}

export default Calendar;
