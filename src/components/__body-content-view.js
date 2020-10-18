import React from 'react';
import { Link } from 'react-router-dom';
import FrontendRoutes from '../routes/FrontendRoutes';

const BodyContentView = ({data}) => {

  const { postBody, postID } = data;

  return (
    <div className="row">
      <div className="col-md-8 p-3 col-12 bodyContentViewable">
        <p>
          {postBody}
        </p>
      </div>
      <div className="col-4 p-3 bodyActionsViewable">
        <div className="mb-5">
          <h3 className="mb-2">Actions</h3>
          <Link to={FrontendRoutes.home}>
            Back to Home
          </Link>
        </div>
        <Link 
          to={FrontendRoutes.updatePost + postID} 
          className="color white primary-bg py-3 px-5 primary-2-bg-hover"
        >
          Update This Post
        </Link>
      </div>
    </div>
  )
} 

export default BodyContentView;