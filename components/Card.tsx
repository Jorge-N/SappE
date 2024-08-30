import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

type CardProps = 
{
  title: string
  key: number
}

const Card = (props : CardProps) => {
  const [pressed, setPressed] = useState(false)

  const press = () => {
    setPressed((prev) => !prev)
  }

  return (
    <Pressable onPress={press} style={pressed ? styles.pressedStyles : styles.notPressedStyles}>
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