import { StyleSheet, Text, View, Pressable, Modal } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native'

const Profile = () => {
    const [visible, setVisible] = useState(false)
    const [nameOnChange, setNameOnChange] = useState('')
    const [name, setName] = useState("Jorge")

    return (
    <>
      <Text style={{textAlign: 'center', fontSize: 24}}>
        Holis, {name}
      </Text>

      <Modal 
        animationType='slide'
        visible={visible}
        transparent={true}
      >
        <View style={styles.modalCenter}>
          <View style={styles.modalView}>
            
            <Text style={{fontSize: 30,}}>Cambiar Nombre</Text>

            <TextInput 
              style={styles.textInputStyle} 
              maxLength={20}
              placeholder= 'Escribe aquí...'
              placeholderTextColor= 'grey'
              onChangeText={(text) => setNameOnChange(text)}
              value = {nameOnChange}
            />
            
            <Pressable 
              onPress={() => {
                setVisible(!visible)
                nameOnChange == '' ? setName(name) : setName(nameOnChange)
                setNameOnChange('')
              }}>
              <Text style={styles.pressableTextStyle}>Guardar Cambios</Text>
            </Pressable>
          </View>
        </View> 
      </Modal>
      
      <Pressable onPress={() => setVisible(!visible)}>
        <Text style={styles.pressableTextStyle}>Cambiar Nombre</Text>
      </Pressable>
    </>
  )
}

export default Profile

const styles = StyleSheet.create({
  modalCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },

  modalView: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    width: 500,
    height: 500,
    borderRadius: 20,
    shadowColor: 'grey',
    shadowOffset: {width: 1, height: 1},
    shadowRadius: 10,
    shadowOpacity: 0.5,
    backgroundColor: 'white',
  },

  textInputStyle: {
    display: 'flex',
    padding: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'grey',
  },

  pressableTextStyle: {
    display: 'flex', 
    padding: 10, 
    backgroundColor: '#1D3D47', 
    borderRadius: 20, 
    color: 'white'
  }

})