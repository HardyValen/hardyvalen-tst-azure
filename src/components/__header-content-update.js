import React from 'react';

const HeaderContentUpdate = ({postTitle, postAuthor, setPostTitle, setPostAuthor}) => {

  const inputTextListener = (e, setter) => {
    setter(e.target.value);
  }

  return (
    <div className="headerContent">
      <input 
        type="text" 
        onChange={(e) => {inputTextListener(e, setPostTitle)}} 
        value={postTitle}
        placeholder="Waiting for post title data.."
        className="input-post-title"
      />
      <input 
        type="text" 
        onChange={(e) => {inputTextListener(e, setPostAuthor)}} 
        value={postAuthor}
        placeholder="Waiting for author data.."
        className="input-post-author"
      />

    </div>
  )
}

export default HeaderContentUpdate