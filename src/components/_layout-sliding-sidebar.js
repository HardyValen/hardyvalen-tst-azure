import React from "react";

const SlidingSidebar = (props) => {
  return (
    <div 
      className="slidingSidebarComponent" 
      style={props.navState ? {"left": "0vw"} : {"left": "-100vw"}}
    >
      {props.children}
    </div>
  )
}

export default SlidingSidebar