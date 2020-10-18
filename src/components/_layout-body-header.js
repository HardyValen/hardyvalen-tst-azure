import React from "react";

const Header = (props) => {
  return (
    <div className="headerComponent">
      {props.children}
    </div>
  )
}

export default Header