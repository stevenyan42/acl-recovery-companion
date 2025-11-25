import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
    return(
        <Tabs screenOptions={{ headerShown: false }}>
            <Tabs.Screen
            name='index'
            options={{
                title: 'Home',
                tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />
            }}
            />
            <Tabs.Screen
            name='log'
            options={{
                title: 'Log',
                tabBarIcon: ({ color }) => <FontAwesome size={28} name="edit" color={color} />
            }}
            />
            <Tabs.Screen
            name='history'
            options={{
                title: 'History',
                tabBarIcon: ({ color }) => <FontAwesome size={28} name="history" color={color} />
            }}
            />
            <Tabs.Screen
            name='settings'
            options={{
                title: 'settings',
                tabBarIcon: ({ color }) => <FontAwesome size={28} name="cogs" color={color} />
            }}
            />
        </Tabs>
    )
}