import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FrontendRoutes from '../routes/FrontendRoutes';

const FooterContentUpdate = ({navState, setNavState, data, updatePostData, lock}) => {
  
  // const { postID } = data;

  const navOnClick = () => {
    setNavState(!navState);
  }

  return (
    <div className="footerContent">
      <div className="footerIcon" onClick={navOnClick}>
        <FontAwesomeIcon icon={['fas', 'bars']} size={"lg"}/>
      </div>
      <button 
        className="footerIcon mainButton" 
        to={FrontendRoutes.home}
        onClick={updatePostData}
        disabled={lock}
      >
        <FontAwesomeIcon icon={['fas', 'save']} size={"lg"}/>
      </button>
      <Link className="footerIcon" to={FrontendRoutes.home}>
        <FontAwesomeIcon icon={['fas', 'home']} size={"lg"}/>
      </Link>
    </div>
  )
}

export default FooterContentUpdate