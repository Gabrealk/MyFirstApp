import React from 'react';
import { View, Text } from 'react-native';
import MainLayout from '../layouts/MainLayout';

function About({ }) {
    return (
        <MainLayout>
            <View>
                <Text>Gabreal's To Do List </Text>
                <Text>Created by: Gabreal Kalaf</Text>
            </View>
        </MainLayout>
    );
}

export default About;