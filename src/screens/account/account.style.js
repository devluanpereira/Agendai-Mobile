import { COLORS, FONT_SIZE } from "../../constants/theme";
import { Dimensions, StyleSheet } from 'react-native';

// Pegando a largura da tela
const { width: SCREEN_WIDTH } = Dimensions.get('window');

// Função para escalar tamanhos
const scale = size => (SCREEN_WIDTH / 375) * size;

export const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        flex: 1,
        paddingHorizontal: scale(20), // Ajustando o padding horizontalmente
        paddingVertical: scale(30),   // Ajustando o padding verticalmente
        justifyContent: "space-between"
    },

    containerLogo: {
        alignItems: "center",
        paddingTop: scale(50) // Adicionei um padding top para distanciar
    },

    containerInput: {
        marginBottom: scale(10)  // Escalando o espaçamento inferior entre inputs
    },
   
    logo: {
        width: scale(130),       // Escalando a largura da logo
        height: scale(30)        // Escalando a altura da logo
    },

    input: {
        backgroundColor: COLORS.branco1,
        padding: scale(10),      // Escalando o padding do input
        borderRadius: 6          // Deixando o borderRadius fixo
    },

    footer: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
    },

    footerLink: {
        color: COLORS.pink,
        fontSize: FONT_SIZE.md // Mantendo o tamanho da fonte sem escalas
    }
});
