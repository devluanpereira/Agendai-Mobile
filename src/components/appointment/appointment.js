import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = {

    appointment: {
        flex: 1,
        backgroundColor: COLORS.white,
        padding: 12,
        borderWidth: 1,
        borderColor: COLORS.cinza2
    },

    name: {
        fontSize: FONT_SIZE.md,
        color: COLORS.cinza1,
        marginBottom: 3
    },

    specialty: {
        fontSize: FONT_SIZE.sm,
        color: COLORS.cinza2,
        marginBottom: 4
    },

    icon: {
        width: 26,
        height: 26,
        marginRight: 6
    },

    bookingDate: {
        fontSize: FONT_SIZE.sm,
        color: COLORS.cinza,
        marginTop: 3
    },

    bookingHour: {
        fontSize: FONT_SIZE.sm,
        color: COLORS.cinza,
        marginTop: 3
    },

    booking: {
        flexDirection: "row"
    },

    containerBooking: {
        flex: 1
    },

    containerButton: {
        marginTop: 6
    },

    container: {
        flexDirection: "row"
    }

}