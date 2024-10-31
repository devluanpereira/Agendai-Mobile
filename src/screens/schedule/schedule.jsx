const { View, Text, Alert } = require("react-native");
import { styles } from "./schedule.styles.js";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { ptBR } from "../../constants/calendar.js";
import Button from "../../components/button/button.jsx";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import api from "../../constants/api.js";

LocaleConfig.locales["pt-br"] = ptBR;
LocaleConfig.defaultLocale = "pt-br";

function Schedules(props) {

    const id_doctor = props.route.params.id_doctor;
    const id_service = props.route.params.id_service;
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedHour, setSelectedHoour] = useState("");

    async function ClickBooking() {
        try {
            const response = await api.post("/appointments", {
                id_doctor, 
                id_service, 
                booking_date: selectedDate, 
                booking_hour: selectedHour
            });

            if (response.data?.id_appointment)
                props.navigation.popToTop();

        } catch (error) {
            if (error.response.data.error)
                Alert.alert(error.response.data.error);
            else
                Alert.alert("Ocorreu um erro. Tente novamente mais tarde");
        }
    }

    return <View style={styles.container} >

        <View>
            <Calendar theme={styles.theme}
                onDayPress={(day) => {
                    setSelectedDate(day.dateString)
                }}
                markedDates={{
                    [selectedDate]: { selected: true }
                }}
                minDate={new Date().toDateString()}
            />

            <View>
                <Text style={styles.textHour} >Horário</Text>
            </View>

            <View>
                <Picker selectedValue={selectedHour}
                    onValueChange={(itemValue, itemIndex) => {
                        setSelectedHoour(itemValue)
                    }}>
                    <Picker.Item label="09:00" value="09:00" />
                    <Picker.Item label="09:30" value="09:30" />
                    <Picker.Item label="10:00" value="10:00" />
                </Picker>
            </View>
        </View>
        <View>
            <Button text="Confirma reserva" onPress={ClickBooking} />
        </View>

    </View>
}


export default Schedules;