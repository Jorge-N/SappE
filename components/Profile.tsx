import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'

const Profile = () => {
    const [visible, setVisible] = useState(false)
    const [nameOnChange, setNameOnChange] = useState('')
    const [name, setName] = useState("Jorge")

    const toggleVisible = () => {
      setVisible(prev => !prev)
    }

    return (
    <>
      <Text style={{
          textAlign: 'center',
          fontSize: 24
        }}
      >
        Holis {name}
      </Text>

      <TextInput 
        textAlign='center'
        style={visible ?{
          display: 'flex',
          padding: 10,
          backgroundColor: '#fff',
          borderWidth: 1,
          borderColor: 'grey',
        } 
        : {
          display: 'none'
        }} 
        placeholder= 'Cambiame! jeje' 
        placeholderTextColor= 'grey'
        onChangeText={(text) => setNameOnChange(text)}
        value = {nameOnChange}
      />
      
      <Pressable 
        style={visible ? {display: 'flex'} : {display: 'none'}} 
        onPress={() => {
          nameOnChange == '' ? setName(name) : setName(nameOnChange)
        }}>
        <Text
          style={{
            padding: 10,
            backgroundColor: '#1D3D47',
            color: 'white',
            borderRadius: 20
          }}
        >
          Guardar Cambios
        </Text>
      </Pressable>
      
      <Pressable onPress={toggleVisible}>
        <Text style={{padding: 10, backgroundColor: 'darkred', borderRadius: 20, color: 'white'}}>
          {!visible ? "Cambiar nombre": "Ocultar"}
        </Text>
      </Pressable>
    </>
  )
}

export default Profile