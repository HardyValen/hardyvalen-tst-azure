import React from 'react';
import TextareaAutosize from 'react-autosize-textarea/lib';
import { Link } from 'react-router-dom';
import FrontendRoutes from '../routes/FrontendRoutes';

const BodyContentUpdate = ({postBody, setPostBody, updatePostData, lock}) => {

  return (
    <div className="row">
      <div className="col-md-8 p-3 col-12 bodyContentEditable">
        <TextareaAutosize
          placeholder="Waiting for the post content..."
          onChange={(e) => {setPostBody(e.target.value)}}
          value={postBody}
        />
      </div>
      <div className="col-md-4 p-3 medium-only bodyActionsEditable">
        <div className="mb-5">
          <h3 className="mb-2">Actions</h3>
          <Link to={FrontendRoutes.home}>
            Back to Home
          </Link>
        </div>
        <button 
          className="color white primary-bg py-3 px-5 primary-2-bg-hover"
          onClick={(e) => {updatePostData(e)}}
          disabled={lock}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default BodyContentUpdate;