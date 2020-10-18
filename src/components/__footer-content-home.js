import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FrontendRoutes from '../routes/FrontendRoutes';

const FooterContentHome = ({navState, setNavState}) => {
  // const [navState, setNavState] = useState(false);
  
  const navOnClick = () => {
    setNavState(!navState);
  }

  return (
    <div className="footerContent">
      <div className="footerIcon" onClick={navOnClick}>
        <FontAwesomeIcon icon={['fas', 'bars']} size={"lg"}/>
      </div>
      <Link to={FrontendRoutes.createPost}>
        <div className="footerIcon">
          <FontAwesomeIcon icon={['fas', 'plus-square']} size={"lg"}/>
        </div>
      </Link>
    </div>
  )
}

export default FooterContentHome