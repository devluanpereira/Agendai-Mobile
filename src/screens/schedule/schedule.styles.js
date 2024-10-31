import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = {

    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingTop: 25,
        paddingLeft: 25,
        paddingRight: 25,
        justifyContent: "space-between",
        marginBottom: 30
    },

    theme: {
        todayTextColor: COLORS.red,
        selectedDayBackgroundColor: COLORS.pink,
        selectedDayTextColor: COLORS.white,
        arrowColor: COLORS.pink
    },

    textHour: {
        fontSize: FONT_SIZE.lg,
        fontWeight: "bold",
        color: COLORS.cinza2,
        marginTop: 25
    }

}