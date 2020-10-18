import React from "react";

const BodyContent = (props) => {
  return (
    <div className="bodyContentComponent">
      {props.children}
    </div>
  )
}

export default BodyContent