import React from "react";
import NavigationItem from "./NavigationItem";

function MasterView() {
  return (
    <>
      <NavigationItem image='../images/forest.jpg' title='Forest'/>
      <NavigationItem image='../images/sky.jpg' title='Sky'/>
      <NavigationItem image='../images/desert.jpg' title='Desert'/>
    </>
  ) 
}

export default MasterView;