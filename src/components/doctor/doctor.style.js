import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = {

    safe: {
        flex: 1,
        backgroundColor: "#e8ecf4"
    },

    doctor: {
        backgroundColor: COLORS.white,
        flex: 1,
        padding: 8,
        flexDirection: "row",
        marginBottom: 3,
        marginTop: 3,
        borderRadius: 6
    },

    name: {
        fontSize: FONT_SIZE.md,
        color: COLORS.cinza1,
        marginTop: 5
    },

    specialty: {
        fontSize: FONT_SIZE.md,
        color: COLORS.cinza2
    },

    icon: {
        width: 40,
        height: 40,
        marginRight: 8
    }

}