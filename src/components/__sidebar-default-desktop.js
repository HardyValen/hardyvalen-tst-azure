import React from "react";
import Logo from "../assets/logo-white.png";

const SidebarDefaultDesktop = () => {
  return (
    <div className="sidebarDefaultDesktop">
      <div></div>
      <div>
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

export default SidebarDefaultDesktop;