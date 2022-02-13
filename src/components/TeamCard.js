import React, { useState, useEffect } from "react";
import styled from 'styled-components/native'
import { StyleSheet, View, TouchableOpacity, TextInput, KeyboardAvoidingView, Alert } from "react-native";
import { Box, Center, Container, Flex, Image, Button, Text } from "native-base";

export default function LandingTeamCard({ img, name, position }) {
    return (
        <Center maxW="20%" mb="2">
            <Center className="px-6">
                <Image source={img} size="200" resizeMode={"contain"} borderRadius={100} alt={name} />
                <View className="pt-6 text-center">
                    <Text >{""+name}</Text>
                    <Text>{""+position}</Text>
                </View>
            </Center>
        </Center>
    );
}
