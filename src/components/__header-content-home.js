import React from 'react';
import Breakpoints from '../functions/breakpoints';
import { Link } from 'react-router-dom';
import FrontendRoutes from '../routes/FrontendRoutes';
import { toast } from 'react-toastify';

const HeaderContentHome = ({width, search}) => {
  const searchListener = (e) => {
    search(e.target.value);
  }

  const notify = () => {
    toast.info("Toast is running optimally!", {
      className: "toastReplaceContainer",
      bodyClassName: "toastReplaceBody",
      progressClassName: "toastReplaceProgress",
    })
  }

  return (
    <div className="headerContent">
      <h1>Posts</h1>
      <div className="headerOptions mt-3">
        <input type="text" placeholder="Search" onChange={searchListener} className="input-post-search"/>
        {
          width >= Breakpoints.md
          ? 
          <>
            <Link to={FrontendRoutes.createPost}>
              <span className="button-transparent color primary-light-bg-hover">
                Create Post
              </span>
            </Link>
            <span className="button-transparent color primary-light-bg-hover" onClick={notify}>
              Toast!
            </span>
          </>
          : null
        }
      </div>
      
    </div>
  )
}

export default HeaderContentHome