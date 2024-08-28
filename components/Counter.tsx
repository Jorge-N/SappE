import { View, Text, Pressable, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import { red } from 'react-native-reanimated/lib/typescript/reanimated2/Colors'

function initial(){ //Esto lo hice para probar cómo funciona useState (con esta forma de setear el contador inicialmente, react no llama a useState cada vez que renderiza la app, solamente cuando refresca)
    console.log("hola")
    return 0
}

const Counter = () => {
    const [counter, setCounter] = useState(0)
    
    const incrementar = () => {
        setCounter(prev => prev + 1)
    }

    const decrementar = () => {
        setCounter(prev => prev -1)
    }

  return (
    <View style={styles.viewStyle}>
        <Pressable style={styles.pressableStyle} onPress={decrementar}><Text style={styles.text}>-</Text></Pressable>
        <Text style={styles.text}>{counter}</Text>
        <Pressable style={styles.pressableStyle} onPress={incrementar}><Text style={styles.text}>+</Text></Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    viewStyle: {
        display: 'flex',
        flexDirection: 'row',
        width: 300,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text: {
        fontSize: 75,
        fontFamily: 'sans-serif',
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        textShadowColor: 'grey',
        textShadowOffset: {width: 3, height: 3},
        textShadowRadius: 1
    },

    pressableStyle: {
        width: 90,
        height: 90,
        userSelect: 'none',
        borderWidth: 2,
        borderColor: 'grey',
        borderRadius: 90/2
    },
   
})

export default Counter