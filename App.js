import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import useCounterStore from "./src/store/useCounterStore";

export default function App() {
  const counterStore = useCounterStore();
  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Text>Optoro Counter: {counterStore.number}</Text>
        <View style={styles.btns}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => counterStore.increaseNumber()}
          >
            <Text>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => counterStore.decreaseNumber()}
          >
            <Text>-</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  btns: {
    flexDirection: "row",
    gap: 16,
    marginTop: 16,
  },
  btn: {
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "gray",
  },
});
