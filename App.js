import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";

import resultAndColor from "./helpers/resultado";

export default function App() {
  const [form, setForm] = useState({ altura: 0, peso: 0 });
  const [dynamicBackgroundStyle, setDynamicBackgroundStyle] = useState({
    backgroundColor: "white",
  });
  const [resultado, setResultado] = useState({ imc: "", classificacao: "" });

  function calculaResultado() {
    const imc = (form.peso / (form.altura * form.altura)).toFixed(2);
    const { classificacao, backgroundColor } = resultAndColor(imc);

    setResultado({ imc, classificacao });
    setDynamicBackgroundStyle({
      backgroundColor,
    });
  }

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: dynamicBackgroundStyle.backgroundColor,
      }}
    >
      <Text style={styles.textStyle}>Altura:</Text>
      <TextInput
        style={styles.inputStyle}
        value={form.altura}
        onChangeText={e => setForm({ peso: form.peso, altura: e })}
        keyboardType="numeric"
      ></TextInput>

      <Text style={styles.textStyle}>Peso</Text>
      <TextInput
        style={styles.inputStyle}
        value={form.peso}
        onChangeText={e => setForm({ peso: e, altura: form.altura })}
        keyboardType="numeric"
      ></TextInput>

      <View>
        <TouchableOpacity style={styles.buttonStyle} onPress={calculaResultado}>
          <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>
        <Text style={styles.textStyle}>Seu imc é: {resultado.imc}</Text>
        <Text style={styles.textStyle}>Classificação: {resultado.classificacao}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  inputStyle: {
    borderBottomWidth: 1,
    width: 80,
  },
  textStyle: {
    marginTop: 10,
  },
  buttonStyle: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "#3e95ff",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
  buttonText: {
    color: "white",
    textDecorationStyle: "solid",
  },
});
