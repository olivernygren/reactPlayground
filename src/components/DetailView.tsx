import React, { CSSProperties } from "react";
import { RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps<{ id: string }> {

}

function DetailView(props: Props) {
  const name = props.location.pathname; // name -> { id: name }, props.location.pathname -> props.match.params
  const imageSrc = `../images/${name}.jpg`;
  return (
    <div style={rootStyle}>
      <img style={imageStyle} src={imageSrc} alt=""/>
    </div>
  );
}

const rootStyle: CSSProperties = {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  height: '100%',
  width: '100%',
}

const imageStyle: CSSProperties = {
  position: 'absolute',
  // left: 0, top: 0, right: 0, bottom: 0,
  height: '100%',
  width: '100%',
  objectFit: 'cover',
}

export default DetailView;