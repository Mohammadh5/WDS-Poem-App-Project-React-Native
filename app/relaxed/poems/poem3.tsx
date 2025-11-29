// app/angry/poems/poem1.tsx
import { StyleSheet, Text, View } from "react-native";


export default function Poem1() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is Poem 3</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "black" },
  text: { fontSize: 24, color: "white", fontFamily: "Courier" },
});
