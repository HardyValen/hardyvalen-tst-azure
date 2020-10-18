import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import FrontendRoutes from '../routes/FrontendRoutes';

const FooterContentCreate = ({navState, setNavState, publishPostData, lock}) => {
  
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
        onClick={publishPostData}
        disabled={lock}
      >
        <FontAwesomeIcon icon={['fas', 'save']} size={"lg"}/>
      </button>
      <Link className="footerIcon" to={FrontendRoutes.home}>
        <FontAwesomeIcon icon={['fas', 'home']} size={"lg"}/>
      </Link>
      {/* <button
        className="color white primary-bg py-3 px-5 primary-2-bg-hover"
        onClick={publishPostData}
        disabled={lock}
      >
        Publish Post
      </button> */}
    </div>
  )
}

export default FooterContentCreate