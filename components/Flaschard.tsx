import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useFonts } from 'expo-font'

type FlashcardProps = 
{
  question: string
  answer: string
}

const Flashcard = (props : FlashcardProps) => {
  const [flipped, setFlipped] = useState(false)

  const flip = () => {
    setFlipped((prev) => !prev)
  }

  return (
    <Pressable onPress={flip} style={flipped ? styles.pressedStyles : styles.notPressedStyles}>
        <Text style={{textAlign: 'center', color: 'white', fontSize: 24,}}>{flipped ? props.answer : props.question}</Text>
    </Pressable> 
  )
}

export default Flashcard

const styles = StyleSheet.create({
  pressedStyles:
  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 500,
    height: 250,
    borderWidth: 5,
    margin: 10,
    padding: 40,
    backgroundColor: '#1D3D47',
    userSelect: 'none'
  },

  notPressedStyles:
  {
    padding: 40,
    margin: 10,
    backgroundColor: '#808080',
    userSelect: 'none'
  }
})