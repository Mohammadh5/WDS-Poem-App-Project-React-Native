// app/angry/poems.tsx
import { router } from "expo-router";
import { ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default function Poems() {
  //List of poems can be added here in the future
  const music = [
    { title: "Song 1", path: "/sad/music/song1" },
    { title: "Song 2", path: "/sad/music/song2" },
    { title: "Song 3", path: "/sad/music/song3" },
  ] as const;

  return (
    <ImageBackground
    source={require('../images/rainy.gif')} 
    style={styles.background}
    resizeMode="cover" 
    >
    
    <View style={styles.overlay}>
      <Text style={styles.header}>Music</Text>
    
      <ScrollView contentContainerStyle={styles.listContainer}>
        {music.map((music, index) => ( 
          <TouchableOpacity
            key={index}
            style={styles.poemButton}
            onPress={() => router.push(music.path)}
          >

            <Text style={styles.buttonText}>{music.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { 
    flex: 1, 
    width: '100%',
    height: '100%',
  },

  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  header: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Courier',
    color: 'rgba(49, 160, 191, 1)',
    marginBottom: 20,
  },

  listContainer: { 
    paddingBottom : 20,
    alignItems: 'center',
  },
  
  poemButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingVertical: 15,
    paddingHorizontal: 70,
    borderRadius: 25,
    marginVertical: 10,
    alignItems: 'center',
    width: '80%',
  },

  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Courier',
  },
});
