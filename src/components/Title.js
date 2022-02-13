import React, { useState, useEffect } from "react";
import { Box, Center, Container, Flex, HStack } from "native-base";
import styled from 'styled-components/native'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView, Alert } from "react-native";

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
