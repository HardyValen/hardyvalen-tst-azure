import React from "react";
import NoPostAsset from "../assets/no-posts.svg";

const ErrorNoPosts = () => {
  return (
    <div className="errorNoPosts">
      <img src={NoPostAsset} alt="" className="my-5"/>
      <p className="error-text">No post found.</p>
    </div>
  )
}

export default ErrorNoPosts;