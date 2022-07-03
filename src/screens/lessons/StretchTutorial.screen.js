import React from "react";
import sections from "./tutorials/stretch.tutorials";
import ModuleAccordion from "../../components/ModuleAccordion";

const StretchTutorials = (props) => {

    return(<>
      <ModuleAccordion sections={sections}/>
    </>);
};

export default StretchTutorials;