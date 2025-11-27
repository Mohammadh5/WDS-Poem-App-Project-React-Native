import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';

export default function Home() {

  // State: stores the generated poem
  const [poem, setPoem] = useState("");

  // Calls backend to fetch poem based on mood, basically we send a request to the server to get the poem based on the selected mood
  const getPoem = async (mood) => {
    try {
      const response = await fetch("http://localhost:5000/generate-poem", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mood })
      });

      const data = await response.json();
      setPoem(data.poem);

    } catch (error) {
      console.log("Error:", error);
    }
  };

  const clearPoem = () => {
    setPoem("");
  }

  return (
    <View style={styles.container}>

      {/* Title */}
      <Text style={styles.title}> Nevermore </Text>

      {/* Window & GIF */}
      <View style={styles.windowContainer}>
        <Image
          source={require('./images/totoro.gif')}
          style={styles.rain}
        />
        <Image
          source={require('./images/window.png')}
          style={styles.window}
        />
      </View>

      {/* Subtitle */}
      <Text style={styles.caption}> Stay with me </Text>

      {/* "I feel.." button */}
      <TouchableOpacity style={styles.button} onPress={clearPoem}>
        <Text style={styles.buttonText}>I feel..</Text>
      </TouchableOpacity>

      {/* Mood Buttons */}
      <View style={styles.moodContainer}>

        <TouchableOpacity
          style={styles.moodButton}
          onPress={() => getPoem("happy")}
        >
          <Text style={styles.buttonText}>Happy</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.moodButton}
          onPress={() => getPoem("sad")}
        >
          <Text style={styles.buttonText}>Sad</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.moodButton}
          onPress={() => getPoem("angry")}
        >
          <Text style={styles.buttonText}>Angry</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.moodButton}
          onPress={() => getPoem("relaxed")}
        >
          <Text style={styles.buttonText}>Relaxed</Text>
        </TouchableOpacity>

      </View>

      {/* Display poem */}
      <Text style={styles.poemText}>
        {poem}
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#0b0105ff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 60,
  },

  title: {
    fontSize: 40,
    color: '#ffffffff',
    fontWeight: 'bold',
    fontFamily: 'Georgia',
    marginBottom: 30,
  },

  windowContainer: {
    width: 250,
    height: 250,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },

  window: {
    width: 350,
    height: 300,
    marginTop: 15,
    position: 'absolute',
    zIndex: 2,
  },

  rain: {
    width: 250,
    height: 250,
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
  },

  caption: {
    fontSize: 20,
    fontFamily: 'Courier',
    color: '#ffffff',
    marginBottom: 15,
  },

  button: {
    backgroundColor: '#756f6fff',
    paddingVertical: 12,
    paddingHorizontal: 100,
    borderRadius: 25,
  },

  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Courier',
  },

  moodContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },

  moodButton: {
    backgroundColor: '#756f6fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginHorizontal: 5,
  },

  poemText: {
    fontSize: 18,
    fontFamily: 'Courier',
    color: '#ffffff',
    marginTop: 20,
    textAlign: 'center',
  }

});
