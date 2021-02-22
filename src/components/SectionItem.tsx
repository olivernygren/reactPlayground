import React, {CSSProperties} from "react";

function SectionItem() {
  return(
  <div className="sectionItem" style={sectionItemStyle}>
    <h2>Title</h2>
  </div>
  )
}

const sectionItemStyle: CSSProperties = {
  backgroundImage: 'url(../images/forest-1.jpg)',
  color: 'white',
  fontSize: '1.75rem',
  width: '96vw',
  margin: '.5rem 0',
  display: 'flex',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center'
}

export default SectionItem;