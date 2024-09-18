import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Flashcard from '@/components/Flaschard'

const cardsInfo = [
    {
        question: '¿De qué color es el caballo blanco de San Martín',
        answer: 'Blanco'
    }, 
    {
        question: '¿Cómo te llamás?',
        answer: 'Jorge'
    },
    {
        question: '¿Sí?',
        answer: 'Sí'
    }
]

const flashcards = () => {
  return (
    <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', margin: 20}}>
        {cardsInfo.map((flashcard, index) => <Flashcard question={flashcard.question} answer={flashcard.answer} key={index}/>)}
    </View>
  )
}

export default flashcards

const styles = StyleSheet.create({})