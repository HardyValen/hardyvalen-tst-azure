import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FrontendRoutes from '../routes/FrontendRoutes';

const FooterContentCreate = ({navState, setNavState, publishPostData}) => {
  
  const navOnClick = () => {
    setNavState(!navState);
  }

  return (
    <div className="footerContent">
      <div className="footerIcon" onClick={navOnClick}>
        <FontAwesomeIcon icon={['fas', 'bars']} size={"lg"}/>
      </div>
      <button
        className="color white primary-bg py-3 px-5 primary-2-bg-hover"
        onClick={publishPostData}
      >
        Publish Post
      </button>
    </div>
  )
}

export default FooterContentCreate