import { View, Text, Pressable, StyleSheet } from 'react-native'
import React, {useState} from 'react'

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
    <View style={styles.viewStyles}>
        <Pressable style={styles.pressableStyles} onPress={decrementar}><Text style={styles.textStyles}>-</Text></Pressable>
        <Text style={styles.textStyles}>{counter}</Text>
        <Pressable style={styles.pressableStyles} onPress={incrementar}><Text style={styles.textStyles}>+</Text></Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    viewStyles: {
        display: 'flex',
        flexDirection: 'row',
        width: 300,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textStyles: {
        fontSize: 75,
        fontFamily: 'sans-serif',
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        textShadowColor: 'grey',
        textShadowOffset: {width: 3, height: 3},
        textShadowRadius: 1
    },

    pressableStyles: {
        width: 90,
        height: 90,
        userSelect: 'none',
        borderWidth: 2,
        borderColor: 'grey',
        borderRadius: 90/2
    },
   
})

export default Counter