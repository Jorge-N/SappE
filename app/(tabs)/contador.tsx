import { View, Text } from 'react-native'
import React from 'react'
import Counter from '@/components/Counter'

const Contador = () => {
  return (
    <View style = {{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
      <Counter>
      </Counter>
    </View>
  )
}

export default Contador