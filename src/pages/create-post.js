import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import BodyContentCreate from '../components/__body-content-create';
import FooterContentCreate from '../components/__footer-content-create';
import HeaderContentCreate from '../components/__header-content-create';
import SidebarDefaultDesktop from '../components/__sidebar-default-desktop';
import SlidebarContentCreate from '../components/__slidebar-content-create';
import CreatePostFunction from '../functions/_createPost';
import FrontendRoutes from '../routes/FrontendRoutes';

const CreatePostPage = ({pageSetter, width, navState, setNavState}) => {
  const [postTitle, setPostTitle] = useState('');
  const [postAuthor, setPostAuthor] = useState('');
  const [postContent, setPostContent] = useState('');
  const [lock, setLock] = useState(false);
  const [jobFinished, setJobFinished] = useState(false);

  const publishPostData = (e) => {
    setLock(true);

    e.preventDefault();
    let data = {
      title: postTitle,
      body: postContent,
      author: postAuthor,
    }
    
    CreatePostFunction(data)
    .then(
      (state) => {
        setLock(false)
        if (state) { setJobFinished(true) }
      }
    )
  }

  useEffect(() => {
    pageSetter({
      "sidebar": () => {return <SidebarDefaultDesktop/>},
      "slidingSidebar": () => {return <SlidebarContentCreate navState={navState} setNavState={setNavState}/>},
      "bodyHeader": () => {return <HeaderContentCreate setPostTitle={setPostTitle} setPostAuthor={setPostAuthor}/>},
      "bodyContent": () => {return <BodyContentCreate setPostContent={setPostContent} publishPostData={publishPostData} lock={lock}/>},
      "bodyFooter": () => {return <FooterContentCreate navState={navState} setNavState={setNavState} publishPostData={publishPostData} lock={lock}/>},
    });
  }, [width, postTitle, postAuthor, postContent, navState, lock])
  
  return (jobFinished ? <Redirect push to={FrontendRoutes.home}/> : null);
}

export default CreatePostPage