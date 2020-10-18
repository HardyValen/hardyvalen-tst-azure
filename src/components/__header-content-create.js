import React from 'react';

const HeaderContentCreate = ({setPostTitle, setPostAuthor}) => {

  const inputTextListener = (e, setter) => {
    setter(e.target.value);
  }

  return (
    <div className="headerContent">
      <input 
        type="text" 
        onChange={(e) => {inputTextListener(e, setPostTitle)}} 
        placeholder="Insert Post Title"
        className="input-post-title"
      />
      <input 
        type="text" 
        onChange={(e) => {inputTextListener(e, setPostAuthor)}} 
        placeholder="Insert Author Name"
        className="input-post-author"
      />
    </div>
  )
}

export default HeaderContentCreate