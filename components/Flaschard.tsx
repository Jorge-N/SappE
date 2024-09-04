import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

type CardProps = 
{
  title: string
}

const Card = (props : CardProps) => {
  const [flipped, setFlipped] = useState(false)

  const flip = () => {
    setFlipped((prev) => !prev)
  }

  return (
    <Pressable onPress={flip} style={flipped ? styles.pressedStyles : styles.notPressedStyles}>
        <Text style={{textAlign: 'center', color: 'white'}}>{props.title}</Text>
    </Pressable>
  )
}

export default Card

const styles = StyleSheet.create({
  pressedStyles:
  {
    width: '100%',
    margin: 10,
    padding: 40,
    backgroundColor: '#1D3D47'
  },

  notPressedStyles:
  {
    width: '100%',
    padding: 40,
    margin: 10,
    backgroundColor: '#808080'
  }
})