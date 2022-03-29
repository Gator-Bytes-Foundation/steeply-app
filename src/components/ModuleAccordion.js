import React, { useRef, useState, useEffect } from "react";
import { useWindowDimensions, StyleSheet,View,Animated,TouchableOpacity,Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from '@expo/vector-icons';
import { Text, ScrollView } from "native-base";
import Accordion from 'react-native-collapsible/Accordion';
import styled from 'styled-components/native'
import { blue, orange } from '../helpers/colors';

const ModuleAccordion = (props) => {

    let dimenWidth = useWindowDimensions().width; // Unlike Dimensions, it updates as the window's dimensions update.
    let dimenHeight = useWindowDimensions().height; 
    let styles = accordionStyles(dimenWidth,dimenHeight);
    let [activeSections, setActiveSections] = useState([]);
    let dataArray = [
      {title:props.sections[0]?.title,content: props.sections[0]?.imgs,color:blue},
      {title:props.sections[1]?.title,content: props.sections[1]?.imgs,color:orange},
      {title:props.sections[2]?.title,content: props.sections[2]?.imgs,color:blue},
      {title:props.sections[3]?.title,content: props.sections[3]?.imgs,color:orange}
    ];

    const FixedAccordion=styled(View)`
      minHeight:80px;
      flexDirection: row;
      padding: 10px;
      justifyContent: space-between;
      alignItems: center;
    `

    const renderAccordionHeader = (item, expanded) => {
      return (
        <FixedAccordion style={[{backgroundColor:item.color}]}>
          <Text color="white">{item.title}</Text>
        </FixedAccordion>
      );
    }
    const renderAccordion = (item) => {
      return(<>
      <View >
      <ScrollView style={styles.innerAccordion} contentContainerStyle={{ flexGrow: 1 }}>
          {item.content.map((img,i) => {
            return <Image key={i} source={img} style={styles.image}/>
          })}
        </ScrollView>
      </View>

      </>)
    }

    return (<>
    <ScrollView>
    <Accordion activeSections={activeSections}
        sections={dataArray}
        renderHeader={renderAccordionHeader}
        renderContent={renderAccordion}
        onChange={(sections) => setActiveSections(sections)}
    />
    </ScrollView>

    </>);

};


const accordionStyles = (width, height) => StyleSheet.create({

    image: {
      resizeMode:'contain',
      width:"100%",
      height:height,
      minWidth:100,
  },
  innerAccordion: {
    height:height-150
  }
});

export default ModuleAccordion;