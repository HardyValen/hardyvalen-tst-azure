import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import FrontendRoutes from '../routes/FrontendRoutes';

const FooterContentView = ({navState, setNavState, data}) => {
  
  const { postID } = data;

  const navOnClick = () => {
    setNavState(!navState);
  }

  return (
    <div className="footerContent">
      <div className="footerIcon" onClick={navOnClick}>
        <FontAwesomeIcon icon={['fas', 'bars']} size={"lg"}/>
      </div>
      <Link className="footerIcon mainButton" to={FrontendRoutes.updatePost + postID} >
        <FontAwesomeIcon icon={['fas', 'pen']} size={"lg"}/>
      </Link>
      <Link className="footerIcon" to={FrontendRoutes.home}>
        <FontAwesomeIcon icon={['fas', 'home']} size={"lg"}/>
      </Link>
    </div>
  )
}

export default FooterContentView