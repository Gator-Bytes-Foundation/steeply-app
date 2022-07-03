import React, { useState, useEffect } from "react";
import styled from 'styled-components/native'
import { StyleSheet } from "react-native";
import { Box, Center,View, Circle, Column, Flex, Image, Avatar, Text,VStack } from "native-base";
import { blue } from '../helpers/colors';

const BlueBubble=styled.View`
    background-color:${blue};
    padding:20px;
    border-radius:25px;
    text-align:center;
`

export default function LandingTeamCard({ img, name, position }) {
    return (
        <Center maxW={{base:"100%",md:"40%"}} mb="4" mx={10}>
            <Circle m="4">
                <Avatar source={img} size="200" resizeMode={"contain"} alt={name} />
            </Circle>
            <BlueBubble alignItems="center">
                <Text color='white' mb='2' bold>{name}</Text>
                <Text color='white' m='2'>{position}</Text>
            </BlueBubble>
            
        </Center>
    );
}

const styles = StyleSheet.create({
    description: {
        fontFamily: "TrendaLight"
    }
});