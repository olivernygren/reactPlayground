import React from "react";
import NavigationItem from "./NavigationItem";

function MasterView() {

  const sectionIds = ['forest', 'sky', 'desert'];

  return (
    <>
      {/* <NavigationItem image='../images/forest.jpg' title='Forest'/>
      <NavigationItem image='../images/sky.jpg' title='Sky'/>
      <NavigationItem image='../images/desert.jpg' title='Desert'/> */}
      {sectionIds.map((value) => <NavigationItem id={value} />)}
    </>
  ) 
}

export default MasterView;