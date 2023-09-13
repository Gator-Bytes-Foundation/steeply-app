import React from "react";
import styled from 'styled-components/native'
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Image, useWindowDimensions, FlatList } from "react-native";
import { Button, Flex, Link, Circle, Text, Center } from "native-base";
import CurvedText from "./CurvedText";

const CircleText=styled(Text)`
    font-size: 20px;
    margin-top:10px;
    text-align:center !important;
    width:75%;
    fontWeight:bold;
`
function Banner(props) {
    const navigation = useNavigation();
    let dimenWidth = useWindowDimensions().width; // Unlike Dimensions, it updates as the window's dimensions update.
    let dimenHeight = useWindowDimensions().height; 
    const circleHeight = dimenHeight * 0.4;
    const circleWidth = dimenWidth * 0.8; 
    
    const BackButton=styled(Button)`
      position:absolute;
      left:15px; 
      top:16px; 
      backgroundColor: white;
      paddingRight: 15px;
      paddingLeft: 15px;
      border: solid 2px ${props.fontColor};
      z-index:1;
    `

    const ReferenceLink=styled(Link)`
      position:absolute;
      top:16px; 
      right:15px; 
      backgroundColor: white;
      padding: 10px;
      borderRadius: 5px;
      border: solid 2px ${props.fontColor};
      z-index:1;
    `

    const BigOleCircle=styled(Circle)`
        margin:0px; 
        display:flex;
        max-width:500px; 
        max-height:500px; 
        flex-direction:column;
        margin-top:-80px;
        border: solid 4px ${props.fontColor};
    ` 
    const HeadTitle=styled(Center)`
        position:relative;
        color: ${props.fontColor} !important;
        margin-bottom:0px;
        font-size:80px !important;
        padding-top:12px; 
        width:100%;
    `
    const BannerIcon=styled(Image)`
        position:absolute;
        bottom:0px; 
        minHeight:75px;
        width:115px;
        resizeMode:contain;
    `
    const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'First Item',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Second Item',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Third Item',
        },
      ];
    console.log(props.type)
    return (<>
        <Center style={{position:"relative"}}>
          <BackButton onPress={() => navigation.navigate("Menu")} _text={{color: props.fontColor, fontWeight: "bold"}}>Back</BackButton>
          <ReferenceLink href={`https://steeply.org/${props.type}_references.html`} _text={{textDecoration:"none", fontWeight: "bold", color: props.fontColor}}>
            Content References
          </ReferenceLink>
          <HeadTitle>
              <CurvedText title={props.header} color={'white'} offset={props.titleOffset}/>
          </HeadTitle>
          <Flex>
            <BigOleCircle w={circleWidth} h={circleWidth} bg={props.circleBg} >
              <CircleText color={"black"}>{props.banners[0].info}</CircleText>
              {props.headerIcon ? <BannerIcon style={{marginBottom:-220 }} source={props.headerIcon}/> : ''}
            </BigOleCircle>
          </Flex>
          {/*<FlatList
              data={DATA}
              renderItem={({item}) => (
                  <></>
              )}
              keyExtractor={item => item.id}
            />
            */}
        </Center>                          
    </>);
}
export default Banner