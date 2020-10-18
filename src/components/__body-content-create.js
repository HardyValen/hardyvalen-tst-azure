import React from 'react';
import TextareaAutosize from 'react-autosize-textarea/lib';
import { Link } from 'react-router-dom';
import FrontendRoutes from '../routes/FrontendRoutes';

const BodyContentCreate = ({setPostContent, publishPostData, lock}) => {

  return (
    <div className="row">
      <div className="col-md-8 p-3 col-12 bodyContentEditable">
        <TextareaAutosize
          placeholder="Write your post content here"
          onChange={(e) => {setPostContent(e.target.value)}}
          required
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
          onClick={(e) => {publishPostData(e)}}
          disabled={lock}
        >
          Publish Post
        </button>
      </div>
    </div>
  )
} 

export default BodyContentCreate;