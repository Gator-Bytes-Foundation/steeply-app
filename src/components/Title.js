import React, { useState, useEffect } from "react";
import H3 from '@material-tailwind/react/Heading3';
import LeadText from '@material-tailwind/react/LeadText';
import { Box, Center, Container, Flex, HStack } from "native-base";
import styled from 'styled-components/native'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView, Alert } from "react-native";

//className="flex flex-wrap justify-center text-center mb-24"
// className="w-full lg:w-6/12 px-4"
export default function Title({ heading, children }) {
    return (
        <Flex >
            <View>
                <H3 color="gray">{heading}</H3>
                <LeadText color="blueGray">{children}</LeadText>
            </View>
        </Flex>
    );
}
