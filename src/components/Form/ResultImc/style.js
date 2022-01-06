import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
    // RESULTADO DO CÁLCULO DE IMC
    resultImc: {
        flex: 1,
        marginTop: 15,
        paddingTop: 60,
        borderRadius: 50,
        alignItems: "center",
        width: "100%",
    },

    // NÚMERO DO IMC
    numberImc: {
        fontSize: 48,
        color: "#FF0045",
        fontWeight: "bold",
    },

    // INFORMAÇÃO "PREENCHA O PESO E A ALTURA"
    information: {
        fontSize: 18,
        color: "#FF0045",
        fontWeight: "bold",
    },
});

export default styles