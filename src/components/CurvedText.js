import React, { useState, useEffect } from "react";
import styled from 'styled-components/native';
import { StyleSheet, useWindowDimensions } from "react-native";
import Svg, { G, Text, TextPath, TSpan, Circle, Path,Defs } from 'react-native-svg';


const BigText=styled(Text)`
    font-size: 30px;
    fontWeight:bold;
`

function CurvedText(props) {
    let dimenWidth = useWindowDimensions().width; // Unlike Dimensions, it updates as the window's dimensions update.
    let dimenHeight = useWindowDimensions().height; 
    let FONT_SIZE = 32;
    let offset = props.offset
    if(dimenWidth < 500) {
      FONT_SIZE = 26
      offset += 35
    }


    return (<>
<Svg position="absolute" height="200" width="500">
  <Defs>
    <Path id="path" d={"M70.2,148.6c4-6.1,65.5-96.8,177.6-95.6c121.3,1.2,170.8,85.3,177.1,93"} />
  </Defs>
  <G x="0" y="50">
    <Text fill={props.color} style={{fontSize:FONT_SIZE,fontFamily:"TrendaSemibold", fontWeight:900}}>
      <TextPath href="#path"  startOffset={offset} >
        {props.title}
      </TextPath>
    </Text>
  </G>
</Svg>      
    </>);
}
export default CurvedText