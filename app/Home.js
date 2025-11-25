import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Home() {
    return (

    // Add Image Background of the app
    // <ImageBackground
    //     source={require('./images/rainPurple.gif')}
    //     style={styles.background}
    //     resizeMode="cover"
    //     >
        <View style={styles.container}>
            {/* App Title */}
            <Text style={styles.title}> Nevermore </Text>

         <View style={styles.windowContainer}>
            {/*Rain GIF behind the window*/}
            <Image
                source={require('./images/totoro.gif')}
                style={styles.rain} />

            {/* Open Window PNG */}
            <Image
                source={require('./images/window.png')}
                style={styles.window} />
        
            </View>

            {/* Button */}
            <Text style={styles.caption}> Stay with me </Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>I feel..</Text>
            </TouchableOpacity>
        </View>
    //</ImageBackground>    
        

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,                            // this means, the view is flexible and it grows horizontally and vertically to fill the screen
        backgroundColor: '#0b0105ff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 60,
    },

    // background: {
    //     flex: 1,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // },
    
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
        position: 'relative',   // makes the images stack on top of each other
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
        zIndex: 1,  // behind the window
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
});