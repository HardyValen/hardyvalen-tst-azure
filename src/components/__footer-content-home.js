import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import FrontendRoutes from '../routes/FrontendRoutes';

import { toast } from 'react-toastify';

const FooterContentHome = ({navState, setNavState}) => {
  // const [navState, setNavState] = useState(false);
  
  const navOnClick = () => {
    setNavState(!navState);
  }

  const notify = () => {
    toast.info("Toast is running optimally!", {
      className: "toastReplaceContainer",
      bodyClassName: "toastReplaceBody",
      progressClassName: "toastReplaceProgress",
    })
  }

  return (
    <div className="footerContent">
      <div className="footerIcon" onClick={navOnClick}>
        <FontAwesomeIcon icon={['fas', 'bars']} size={"lg"}/>
      </div>
      <Link to={FrontendRoutes.createPost}>
        <div className="footerIcon mainButton">
          <FontAwesomeIcon icon={['fas', 'plus-square']} size={"lg"}/>
        </div>
      </Link>
      <div className="footerIcon" onClick={notify}>
        <FontAwesomeIcon icon={['fas', 'glass-cheers']} size={"lg"}/>
      </div>
    </div>
  )
}

export default FooterContentHome