import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = {

    container: {
        flex: 1,
        backgroundColor: COLORS.white
    },

    banner: {
        backgroundColor: COLORS.pink,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 65,
        paddingBottom: 25
    },

    text: {
        fontSize: FONT_SIZE.md,
        color: COLORS.white,
        fontWeight: "bold",
        marginTop: 10,
    },
   
    specialty: {
        fontSize: FONT_SIZE.sm,
        color: COLORS.white,
        /* fontWeight: "bold", */
        marginTop: 3,
    }

}