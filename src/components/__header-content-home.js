import React from 'react';
import { Link } from 'react-router-dom';
import Breakpoints from '../functions/breakpoints';
import FrontendRoutes from '../routes/FrontendRoutes';

const HeaderContentHome = ({width, search}) => {
  const searchListener = (e) => {
    search(e.target.value);
  }

  return (
    <div className="headerContent">
      <h1>Posts</h1>
      <div className="headerOptions mt-3">
        <input type="text" placeholder="Search" onChange={searchListener} className="input-post-search"/>
        {
          width >= Breakpoints.md
          ? 
          <Link to={FrontendRoutes.createPost}>
            <span className="button-transparent color primary-light-bg-hover">
              Create Post
            </span>
          </Link>
          : null
        }
      </div>
      
    </div>
  )
}

export default HeaderContentHome