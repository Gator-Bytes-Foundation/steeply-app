import React, { useRef, useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import {  } from "native-base";
import sections from "./lessons/tutorials/stretch.tutorials";
import ModuleAccordion from "../components/ModuleAccordion";

const ExerciseList = (props) => {

    return(<>
      <ModuleAccordion sections={sections}/>
    </>);
};


const exerciseListStyles = (width, height) => StyleSheet.create({

    /*Containers */
    image: {
      resizeMode:'contain',
      maxWidth:"100%",
      minHeight: 400,
      marginTop: 25
  }
});

export default ExerciseList;