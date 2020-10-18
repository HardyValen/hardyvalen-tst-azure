import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Logo from '../assets/logo-white.png';

const SlidebarContentHome = ({navState, setNavState}) => {
  return (
    <div className="slidebarContent">
      <div className="slidebarHeader">
        <div className="headerIcon" onClick={() => {setNavState(!navState)}}>
          <FontAwesomeIcon icon={['fas', 'times']} size={"lg"}/>
        </div>
      </div>
      <div className="slidebarBody">
        <img src={Logo} alt=""/>
        <p><b>
          Hardy Valenthio Amansyah
        </b></p>
        <p><small>
          18218004
        </small></p>
      </div>
      <p>
        Aplikasi web ini ditunjukkan untuk memenuhi tugas kuliah II3160 Teknologi Sistem Terintegrasi
      </p>
    </div>
  )
}

export default SlidebarContentHome