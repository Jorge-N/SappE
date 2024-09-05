import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'

type UserProps = {
    name: string,
}

const Profile = (userProps : UserProps) => {
    const [visible, setVisible] = useState(false)
    const [name, setName] = useState("Jorge")

    const makeVisible = () => {
      setVisible(prev => !prev)
    }

    return (
    <>
      <Text>Holis {name}</Text>
      <TextInput 
        style={visible ? {display: 'flex'} : {display: 'none'}} 
        placeholder= 'Cambiame! jeje' 
        onChangeText={name => setName(name)}
        />
      <Pressable onPress={makeVisible}>
        <Text>{!visible ? "Cambiar nombre": "Ocultar"}</Text>
      </Pressable>
    </>
  )
}

export default Profile

const styles = StyleSheet.create({})