import React from 'react';

const HeaderContentUpdate = ({postTitle, postAuthor, setPostTitle, setPostAuthor}) => {

  const inputTextListener = (e, setter) => {
    setter(e.target.value);
  }

  return (
    <div className="headerContent">
      <p className="mb-4 color gray-2 font annotation">(Editing Mode)</p>
      <input 
        type="text" 
        onChange={(e) => {inputTextListener(e, setPostTitle)}} 
        value={postTitle}
        placeholder="Waiting for post title data.."
        className="input-post-title"
        autoFocus={true}
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