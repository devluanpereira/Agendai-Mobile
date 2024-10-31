import { COLORS, FONT_SIZE } from "../../constants/theme";
import { Dimensions, StyleSheet } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const scale = size => (SCREEN_WIDTH / 375) * size;

export const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        flex: 1,
        paddingHorizontal: scale(20),  
        paddingVertical: scale(30),  
        justifyContent: "space-between"
    },

    containerLogo: {
        alignItems: "center",
        paddingTop: scale(40)
    },

    containerInput: {
        marginBottom: scale(15) 
    },

    logo: {
        width: scale(130), 
        height: scale(30) 
    },

    input: {
        backgroundColor: COLORS.branco1,
        padding: scale(12), 
        borderRadius: 6     
    },

    footer: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
    },

    footerLink: {
        color: COLORS.pink,
        fontSize: FONT_SIZE.md
    }
});
