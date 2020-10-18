import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import FrontendRoutes from '../routes/FrontendRoutes';

const SlidebarContentView = ({navState, setNavState}) => {
  
  const navOnClick = () => {
    setNavState(!navState)
  }

  return (
    <div className="slidebarContent">
      <div className="slidebarHeader">
        <div className="headerIcon">
          <FontAwesomeIcon icon={['fas', 'times']} size={"lg"} onClick={navOnClick}/>
        </div>
      </div>
      <div className="slidebarBody">
        <h1 className="mb-2">Actions</h1>
        <Link to={FrontendRoutes.home} onClick={navOnClick}>
          <p>Back to Home</p>
        </Link>
      </div>
      <p>
        Aplikasi web ini ditunjukkan untuk memenuhi tugas kuliah II3160 Teknologi Sistem Terintegrasi
      </p>
    </div>
  )
}

export default SlidebarContentView