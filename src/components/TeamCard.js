import React, { useState, useEffect } from "react";
import styled from 'styled-components/native'
import { StyleSheet, View, TouchableOpacity, TextInput, KeyboardAvoidingView, Alert } from "react-native";
import { Box, Center, Circle, Container, Flex, Image, Avatar, Text,VStack } from "native-base";

const CroppedImg=styled(Avatar)`
`

export default function LandingTeamCard({ img, name, position }) {
    return (
        <Center maxW={{base:"100%",md:"20%"}} mb="2" mx={10}>
            <Circle>
                <Avatar source={img} size="200" resizeMode={"contain"} alt={name} />
            </Circle>
            <VStack alignItems="center">
                <Text bold>{name}</Text>
                <Text>{position}</Text>
            </VStack>
            
        </Center>
    );
}
