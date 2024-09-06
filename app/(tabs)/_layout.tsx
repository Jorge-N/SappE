import { Stack, Tabs } from 'expo-router';
import React from 'react';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="cards"
        options={{
          title: 'Tarjeticas',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons name={focused ? "cards-playing-diamond-multiple" : "cards-playing-diamond-multiple-outline"} size={24} color="black"/>
          ),
        }}
      />
      <Tabs.Screen
        name="contador"
        options={{
          title: 'Contador',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'skull' : 'skull-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="perfil"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'cafe' : 'cafe-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
