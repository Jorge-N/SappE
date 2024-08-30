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
    <Pressable onPress={press} style={pressed ? styles.pressedStyle : styles.notPressedStyle}>
        <Text style={pressed ? styles.pressedText : {color: 'black'}}>{props.title}</Text>
    </Pressable>
  )
}

export default Card

const styles = StyleSheet.create({
  pressedStyle:
  {
    backgroundColor: 'blue'
  },

  notPressedStyle:
  {
    backgroundColor: 'grey'
  },

  pressedText:
  {
    color: 'white'
  }
})