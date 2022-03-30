import React, { useState, useEffect } from "react";
//import styledTypes from '@types/styled-components'
import styled from 'styled-components/native'
import { StyleSheet, View, TouchableOpacity, Image, useWindowDimensions, Alert, FlatList } from "react-native";
import {
    Heading,
    Center,
    VStack,
    Divider,
    Icon,
    Stack,
  } from "native-base";
import Svg, { G, Text, TextPath, TSpan, Circle, Path,Defs } from 'react-native-svg';


const BigText=styled(Text)`
    font-size: 30px;
    fontWeight:bold;
`

function CurvedText(props) {
    let dimenWidth = useWindowDimensions().width; // Unlike Dimensions, it updates as the window's dimensions update.
    let dimenHeight = useWindowDimensions().height; 
    const circleHeight = dimenHeight * 0.4;
    const circleWidth = dimenWidth * 0.7; 

    return (<>
<Svg position="absolute" height="150" width="600">
  <Defs>
    <Path id="path" d={"M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"} />
  </Defs>
  <G x="60" y="50">
    <Text fill={props.color} style={{fontSize:30}}>
      <TextPath href="#path"  startOffset={props.offset} >
        {props.title}
      </TextPath>
    </Text>
    <Path d={"M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"} fill="none" stroke="none" strokeWidth="4">
    <Text fill={props.color}>
    {props.title}
    </Text>
    </Path>
  </G>
</Svg>      
    </>);
}
export default CurvedText