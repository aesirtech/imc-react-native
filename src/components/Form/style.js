import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    formContext: {
        width: "100%",
        height: "100%",
        bottom: 0,
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: 30,
    },

    // FORMULÁRIO
    form: {
        width: "100%",
        height: "auto",
        marginTop: 30,
        padding: 10,
    },

    // FORM LABEL
    formLabel: {
        color: "#000000",
        fontSize: 18,
        paddingLeft: 20,
    },

    // INPUT
    input: {
        width: "90%",
        borderRadius: 50,
        backgroundColor: "#F6F6F6",
        height: 40,
        margin: 12,
        paddingLeft: 10,
    },

    // BUTTON CALCULATOR
    buttonCalculator: {
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        backgroundColor: "#FF0043",
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        marginTop: 30,
    },
    // TEXT BUTTON CALCULATOR
    textButtonCalculator: {
        fontSize: 20,
        color: "#FFFFFF",
    },

    errorMessage: {
        fontSize: 12,
        color: "red",
        fontWeight: "bold",
        paddingLeft: 20,
    }
})

export default styles