//import Title from './Title';
import React, { useState, useEffect } from "react";
import styled from 'styled-components/native'
import { Box, Center, Container, ScrollView, Flex, HStack, Column, Text } from "native-base";

const ReferenceView=styled.View`
    display:flex;
    background-color:white;
    width: 80%; 
    justify-content:center;
    max-width:600px;
    padding-top:20px; 
    padding-bottom:20px; 
    text-align:center;
`
//  className="max-w-7xl mx-auto px-4"
export default function References() {
    return (
        <ReferenceView>
            <Text>References go here</Text>
        </ReferenceView>
    );
}
