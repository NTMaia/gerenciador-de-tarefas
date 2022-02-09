import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';


import Principal from './paginas/Principal';
import NovaTarefa from './paginas/NovaTarefa';


const Troca = createBottomTabNavigator();

export default function Rotas() {
    return (
        <Troca.Navigator screenOptions={{
            headerShown: false,
            tabBarStyle: {
                backgroundColor: '#121212',
                borderTopColor: 'transparent',
            },
            tabBarActiveTintColor: '#fff',
            tabBarStyle: {
                paddingBottom: 5,
                paddingTop: 5,
            }
        }}>
            <Troca.Screen
                name="Tela Principal"
                component={Principal}
                options={{
                    tabBarIcon: ({size, color}) => (
                        <FontAwesome5 name="clipboard-list" size={size} color={color} />
                    )
                }}
            />
            <Troca.Screen
                name="Nova Tarefa"
                component={NovaTarefa}
                options={{
                    tabBarIcon: ({size, color}) => (
                        <FontAwesome name="calendar-plus-o" size={size} color={color} />
                    )
                }}
            />
        </Troca.Navigator>
    );
}
