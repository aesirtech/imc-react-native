import React, { useState } from "react"
import { View, 
        Text, 
        TextInput, 
        TouchableOpacity,
        Vibration } from "react-native"
import ResultImc from "./ResultImc/"
import styles from "./style";



export default function Form() {

const [height, setHeight] = useState(null);
const [weight, setWeight] = useState(null);
const [messageImc, setMessageImc] = useState("Preencha o peso e a altura");
const [imc, setImc] = useState(null);
const [textButton, setTextButton] = useState("Calcular IMC");
const [errorMessage, setErrorMessage] = useState(null);

// CÁLCULO DO IMC: ALTURA VEZES ALTURA DIVIDIDO PELO PESO
function imcCalculator() {
    return setImc((weight/(height * height)).toFixed(2));
}

// VERIFICA SE OS CAMPOS ESTÃO NULOS
function verificationImc() {
    if(imc == null) {
        Vibration.vibrate();
        setErrorMessage("Campo obrigatório*");
    }
}

// VALIDAÇÃO DO IMC
function validationImc() {
    if(weight != null && height != null) {
        imcCalculator();
        setHeight(null);
        setWeight(null);
        setMessageImc("Seu IMC é igual a: ");
        setTextButton("Calcular novamente");
        setErrorMessage(null);
        return;
    }
    else {
        verificationImc();
        setImc(null);
        setTextButton("Calcular");
        setMessageImc("Preencha o peso e a altura");
    }
}

    return(
        <View style={styles.formContext}>
            <View style={styles.form}>
        
                <Text style={styles.formLabel}>Altura</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>

                <TextInput
                style={styles.input}
                onChangeText={setHeight}
                value={height}
                placeholder="Ex: 1.75"
                keyboardType="numeric"
                />

                <Text style={styles.formLabel}>Peso</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>

                <TextInput
                style={styles.input}
                onChangeText={setWeight}
                value={weight}
                placeholder="Ex: 75.800"
                keyboardType="numeric"
                />

                <TouchableOpacity
                style={styles.buttonCalculator}
                onPress={() => {
                    validationImc();
                }}
                >
                    <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>

            </View>
            
            <ResultImc messageResultImc={messageImc} resultImc={imc}/>
        </View>
    );
}