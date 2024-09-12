import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Profile from '@/components/Profile'

const Perfil = () => {
  return (
    <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', gap: 15}}>
      <Profile/>
    </View>
  )
}

export default Perfil