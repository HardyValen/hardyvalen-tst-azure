import React, { useEffect, useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import BodyContentUpdate from '../components/__body-content-update';
import HeaderContentUpdate from '../components/__header-content-update';
import FooterContentUpdate from '../components/__footer-content-update';
import SlidebarContentUpdate from '../components/__slidebar-content-update';
import SidebarDefaultDesktop from '../components/__sidebar-default-desktop';
import GetPostByIDFunction from '../functions/_getPostByID';
import UpdatePostFunction from '../functions/_updatePost';
import FrontendRoutes from '../routes/FrontendRoutes';

const EditPostPage = ({pageSetter, navState, setNavState}) => {
  let {id} = useParams();
  const [postID, setPostID] = useState(id);
  const [postTitle, setPostTitle] = useState('');
  const [postAuthor, setPostAuthor] = useState('');
  const [postBody, setPostBody] = useState('');
  const [postDate, setPostDate] = useState('');
  const [lock, setLock] = useState(false);
  const [jobFinished, setJobFinished] = useState(false);

  const updatePostData = (e) => {
    setLock(true);

    e.preventDefault();
    let data = {
      id: postID,
      title: postTitle,
      body: postBody,
      author: postAuthor,
    }

    UpdatePostFunction(data)
      .then(
        (state) => {
          setLock(false)
          if (state) { setJobFinished(true) }
        }
      )
  }

  useEffect(() => {
    setLock(true);

    GetPostByIDFunction(id)
      .then(
        (data) => {
          let {post_id, post_title, post_body, post_author, post_created_at} = data;

          setPostID(post_id);
          setPostTitle(post_title);
          setPostAuthor(post_author);
          setPostBody(post_body);
          setPostDate(post_created_at);

          setLock(false);
        }
      )
  }, [])

  useEffect(() => {
    pageSetter({
      "sidebar": () => {return <SidebarDefaultDesktop/>},
      "slidingSidebar": () => {return <SlidebarContentUpdate navState={navState} setNavState={setNavState}/>},
      "bodyHeader": () => {
        return <HeaderContentUpdate
          postAuthor={postAuthor}
          setPostAuthor={setPostAuthor}
          postTitle={postTitle}
          setPostTitle={setPostTitle}
        />
      },
      "bodyContent": () => {
        return <BodyContentUpdate 
          postBody={postBody} 
          setPostBody={setPostBody} 
          updatePostData={updatePostData}
          lock={lock}
        />
      },
      "bodyFooter": () => {return <FooterContentUpdate navState={navState} setNavState={setNavState} data={{postID}} updatePostData={updatePostData} lock={lock}/>},
    });
  }, [postTitle, postAuthor, postBody, navState, lock])
  
  return (jobFinished ? <Redirect push to={FrontendRoutes.home}/> : null);
}

export default EditPostPage