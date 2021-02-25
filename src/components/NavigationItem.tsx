import React, {CSSProperties} from "react";
import { Link } from "react-router-dom";

interface Props {
  id: string;
}

function NavigationItem(props: Props) {
  const imageSrc = `../images/${props.id}.jpg`;
  const toUrl = `/${props.id}`;
    return(
      <Link to={toUrl} style={navigationItemStyle}>
        <h2 style={titleStyle}>{props.id}</h2>
        <img src={imageSrc} style={imageStyle}/>
      </Link>
    )
}

const navigationItemStyle: CSSProperties = {
  color: 'white',
  fontSize: '1.75rem',
  width: '96vw',
  margin: '.5rem 0',
  display: 'flex',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative'
}

const titleStyle: CSSProperties = {
  position: "absolute",
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 2,
  textShadow: '2px 2px 6px rgba(0, 0, 0, 0.25)'
}

const imageStyle: CSSProperties = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
  top: 0,
  zIndex: 1,
  borderRadius: '6px'
}

export default NavigationItem;