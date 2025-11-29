import { router } from "expo-router";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Happy() {
  return (
    <ImageBackground
        source={require("../images/rainbow.gif")}
        style={styles.background} 
        resizeMode="cover"
        >
            <View style={styles.overlay}>
                <Text style={styles.title}>Happy</Text>

               <View style={styles.buttonContainer}>
                                 <TouchableOpacity style={styles.moodButton} onPress={() => router.push("/happy/poems")}>
                                   <Text style={styles.buttonText}>Poems</Text>
                                 </TouchableOpacity>
               
                                 <TouchableOpacity style={styles.moodButton} onPress={() => router.push("/happy/music")}>
                                   <Text style={styles.buttonText}>Music</Text>
                                 </TouchableOpacity>
                                 </View>
                                 </View>
                                 </ImageBackground>
                     );
                 }
               
               
               const styles = StyleSheet.create({
                 background:  { flex: 1, width: "100%", height: "100%" },
                 overlay: { flex: 1, backgroundColor: "rgba(0,0,0,0.5)", padding: 20, justifyContent: "center" },
                 title: { color: "white", fontSize: 70, fontWeight: "bold", textAlign: "center", marginBottom: 20, fontFamily: 'Courier' },
                 buttonContainer: { flexDirection: "row", justifyContent: "center", marginTop: 20 }, 
               
               
               moodButton: {
                 backgroundColor: "#756f6fff", // grey bubble
                 paddingVertical: 10,
                 paddingHorizontal: 20,
                 borderRadius: 20,
                 marginHorizontal: 5,
                 alignItems: "center", // centers the text inside
               },
               
               buttonText: {
                 color: "white",
                 fontSize: 18,
                 fontWeight: "bold",
                 fontFamily: 'Courier',
               }
               
               
               
               
               });
               