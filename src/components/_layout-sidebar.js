import React from "react";

const Sidebar = (props) => {
  return (
    <div className="sidebarComponent">
      {props.children}
    </div>
  )
}

export default Sidebar