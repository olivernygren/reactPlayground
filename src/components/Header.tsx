import React, {CSSProperties} from "react";

function Header() {
  return(
  <div className="header" style={header}>
    <h2 style={headerText}>React Playground</h2>
  </div>
  )
}

const header: CSSProperties = {
  height: '4em',
  background: 'rgb(10, 10, 10)',
  color: 'white',
  width: '100%',
  display: 'flex',
  alignItems: 'center'
}

const headerText: CSSProperties = {
  cursor: 'pointer',
  padding: '0 2rem',
  fontSize: '1.75rem'
}

export default Header;