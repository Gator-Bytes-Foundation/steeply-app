//import Image from '@material-tailwind/react/Image';
import H6 from '@material-tailwind/react/Heading6';
import Paragraph from '@material-tailwind/react/Paragraph';
//import Button from '@material-tailwind/react/Button';
import Icon from '@material-tailwind/react/Icon';
import React, { useState, useEffect } from "react";
import styled from 'styled-components/native'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView, Alert } from "react-native";
import { Box, Center, Container, Flex, Image, Button } from "native-base";

export default function LandingTeamCard({ img, name, position }) {
    return (
        <Center maxW="20%" mb="2">
            <Center className="px-6">
                <Image src={img} size="200" resizeMode={"contain"} borderRadius={100} alt={name} />
                <View className="pt-6 text-center">
                    <H6 color="gray">{name}</H6>
                    <Paragraph color="blueGray">{position}</Paragraph>
                    <View className="flex items-center justify-center">
                        <Button
                            color="lightBlue"
                            buttonType="link"
                            ripple="dark"
                            rounded
                            iconOnly
                        >
                            <Icon
                                family="font-awesome"
                                name="fab fa-twitter"
                                size="lg"
                            />
                        </Button>
                        <Button
                            color="blue"
                            buttonType="link"
                            ripple="dark"
                            rounded
                            iconOnly
                        >
                            <Icon
                                family="font-awesome"
                                name="fab fa-facebook-f"
                                size="lg"
                            />
                        </Button>
                        <Button
                            color="pink"
                            buttonType="link"
                            ripple="dark"
                            rounded
                            iconOnly
                        >
                            <Icon
                                family="font-awesome"
                                name="fab fa-dribbble"
                                size="lg"
                            />
                        </Button>
                    </View>
                </View>
            </Center>
        </Center>
    );
}
