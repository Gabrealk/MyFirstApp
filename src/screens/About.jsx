import React from 'react';
import { View, Text } from 'react-native';
import MainLayout from '../layouts/MainLayout';

function About({ }) {
    return (
        <MainLayout>
            <View>
                <Text>welcome to Gabreal's To Do List </Text>
                <Text>To access please go back and add to the todo list!</Text>
            </View>
        </MainLayout>
    );
}

export default About;