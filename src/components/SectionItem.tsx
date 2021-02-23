import React, {CSSProperties} from "react";

interface Props {
  image: string;
  title: string;
}

function SectionItem(props: Props) {
  return(
  <div className="sectionItem" style={sectionItemStyle}>
    <h2 style={titleStyle}>{props.title}</h2>
    <img src={props.image} style={imageStyle}/>
  </div>
  )
}

const sectionItemStyle: CSSProperties = {
  color: 'white',
  fontSize: '1.75rem',
  width: '96vw',
  margin: '.5rem 0',
  display: 'flex',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  background: 'darkgrey'
}

const titleStyle: CSSProperties = {
  position: "absolute",
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 2
}

const imageStyle: CSSProperties = {
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  zIndex: 1
}

export default SectionItem;