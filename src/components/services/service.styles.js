import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = {

    service: {
        flex: 1,
        backgroundColor: COLORS.white,
        flexDirection: "row",
        padding: 14,
        borderWidth: 1,
        borderColor: COLORS.cinza2
    },

    containerText: {
        flex: 1
    },

    containerButton: {
        marginTop: 10
    },

    description: {
        fontSize: FONT_SIZE.md,
        color: COLORS.cinza1,
        marginTop: 10
    },
   
    price: {
        fontSize: FONT_SIZE.sm,
        color: COLORS.pink,
        /* fontWeight: "bold", */
        marginTop: 3
    }

}