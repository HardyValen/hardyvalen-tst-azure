import React, { useEffect, useState } from 'react';
import BodyContentCreate from '../components/__body-content-create';
import FooterContentCreate from '../components/__footer-content-create';
import HeaderContentCreate from '../components/__header-content-create';
import SidebarDefaultDesktop from '../components/__sidebar-default-desktop';
import SlidebarContentCreate from '../components/__slidebar-content-create';
import CreatePostFunction from '../functions/_createPost';

const CreatePostPage = ({pageSetter, width, navState, setNavState}) => {
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

    CreatePostFunction(data)
    .then(
      () => {
        // To Do
      }
    )
    .catch(
      () => {
        // To Do
      }
    )
  }

  useEffect(() => {
    pageSetter({
      "sidebar": () => {return <SidebarDefaultDesktop/>},
      "slidingSidebar": () => {return <SlidebarContentCreate navState={navState} setNavState={setNavState}/>},
      "bodyHeader": () => {return <HeaderContentCreate setPostTitle={setPostTitle} setPostAuthor={setPostAuthor}/>},
      "bodyContent": () => {return <BodyContentCreate setPostContent={setPostContent} publishPostData={publishPostData}/>},
      "bodyFooter": () => {return <FooterContentCreate navState={navState} setNavState={setNavState} publishPostData={publishPostData}/>},
    });
  }, [width, postTitle, postAuthor, postContent, navState])
  
  return null;
}

export default CreatePostPage