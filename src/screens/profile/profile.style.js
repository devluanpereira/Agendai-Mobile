import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = {

    container: {
        backgroundColor: COLORS.white,
        flex: 1,
        paddingTop: 25
    },

    item: {
        borderWidth: 1,
        borderColor: COLORS.cinza2,
        paddingLeft: 8,
        paddingTop: 15,
        paddingBottom: 15
    },

    title: {
        fontSize: FONT_SIZE.sm,
        color: COLORS.pretociano,
        marginBottom: 4
    },


    text: {
        fontSize: FONT_SIZE.md,
        color: COLORS.cinza1,
    }

}