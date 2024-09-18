import { View, Text, Pressable, StyleSheet, Modal } from 'react-native'
import React, {useState} from 'react'
import { useTheme } from '@react-navigation/native'

function initial(){ //Esto lo hice para probar cómo funciona useState (con esta forma de setear el contador inicialmente, react no llama a useState cada vez que renderiza la app, solamente cuando refresca)
    console.log("hola")
    return 0
}

const Counter = () => {
    const [counter, setCounter] = useState(0)
    const [visible, setVisible] = useState(false)
    const [first, setFirst] = useState(true)

    const showModal = () => {
        setFirst(prev => prev = false)
        setVisible(prev => !prev) 
    }

    const incrementar = () => {
        setCounter(prev => prev + 1)
        counter == 999 && first ? showModal() : undefined
    }

    const decrementar = () => {
        setCounter(prev => prev -1)
    }
    
  return (
    <View style={styles.viewStyles}>
        <Modal visible={visible} transparent={true}>
            <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%',}}>
                <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: 500, height: 200, backgroundColor: 'white', borderRadius: 10}}>
                    <Text style={{fontSize: 24, margin: 20}}>¡Felicitaciones, tenés mucho tiempo libre!</Text>
                    <Pressable onPress={showModal}><Text>Cerrar</Text></Pressable>
                </View>
            </View>
        </Modal>
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