import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textNome}> Ana Clara Fernandes de Oliveira</Text>
      <Text style={styles.textNumero}> Número 02</Text>
      <Text style={styles.textSala}> Sala 07</Text>
      <Text style={styles.textElemento}> Recuperação</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  textNome: {
    fontWeight: "bold",
    fontSize: 30,
    color: "blue",
    textAlign: "right",
  },
  textNumero: {
    fontStyle: "italic",
    fontSize: 25,
    borderBottomWidth: 1,
  },
  textSala: {
    fontSize: 20,
    textAlign: "center",
    backgroundColor: "pink",
  },
  textElemento: {
    fontSize: 20,
    backgroundColor: "gray",
    borderBottomWidth: 1,
  },
});
