// app/angry/poems.tsx
import { router } from "expo-router";
import { ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default function Poems() {
  //List of poems can be added here in the future
  const poems = [
    { title: "Poem 1", path: "/angry/poems/poem1" },
    { title: "Poem 2", path: "/angry/poems/poem2" },
    { title: "Poem 3", path: "/angry/poems/poem3" },
  ] as const;

  return (
    <ImageBackground
    source={require('../images/hellish.gif')} 
    style={styles.background}
    resizeMode="cover" 
    >
    
    <View style={styles.overlay}>
      <Text style={styles.header}>Poems</Text>
    
      <ScrollView contentContainerStyle={styles.listContainer}>
        {poems.map((poem, index) => ( 
          <TouchableOpacity
            key={index}
            style={styles.poemButton}
            onPress={() => router.push(poem.path)}
          >

            <Text style={styles.buttonText}>{poem.title}</Text>
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
    color: 'orange',
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
