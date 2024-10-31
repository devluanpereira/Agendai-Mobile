import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = {

    doctor: {
        backgroundColor: COLORS.white,
        flex: 1,
        padding: 8,
        flexDirection: "row",
        borderWidth: 1,
        borderColor: COLORS.pink,
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
        width: 50,
        height: 50,
        marginRight: 8
    }

}