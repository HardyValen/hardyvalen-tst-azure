import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import BodyContentCreate from '../components/__body-content-create';
import HeaderContentCreate from '../components/__header-content-create';
import SidebarDefaultDesktop from '../components/__sidebar-default-desktop';
import BackendRoutes from '../routes/BackendRoutes';

const CreatePostPage = ({pageSetter, width}) => {
  const [postTitle, setPostTitle] = useState('');
  const [postAuthor, setPostAuthor] = useState('');
  const [postContent, setPostContent] = useState('');

  const publishPostData = (e) => {
    e.preventDefault();
    let data = {
      title: postTitle,
      body: postContent,
      author: postAuthor,
    }

    Axios.post(
      BackendRoutes.post.create,
      data
    ).then(res => {
      console.log(JSON.stringify(res))
    }).catch(error => {
      console.log(JSON.stringify(error))
    })
  }

  useEffect(() => {
    pageSetter({
      "sidebar": () => {return <SidebarDefaultDesktop/>},
      "slidingSidebar": () => {return ""},
      "bodyHeader": () => {return <HeaderContentCreate setPostTitle={setPostTitle} setPostAuthor={setPostAuthor}/>},
      "bodyContent": () => {return <BodyContentCreate setPostContent={setPostContent} publishPostData={publishPostData}/>},
      "bodyFooter": () => {return "BodyFooter"},
    });
  }, [width, postTitle, postAuthor, postContent])
  
  return null;
}

export default CreatePostPage