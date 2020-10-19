import React from 'react';
import moment from 'moment';

const HeaderContentView = ({data}) => {
  const {postTitle, postAuthor, postDate} = data;

  return (
    <div className="headerContent">
      <h1 className="mb-2">{postTitle}</h1>
      <p className="font annotation color gray-2">Author: {postAuthor}</p>
      <p className="font annotation color gray-2">Updated {moment(postDate).fromNow()}</p>
    </div>
  )
}

export default HeaderContentView