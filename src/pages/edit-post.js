import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BodyContentUpdate from '../components/__body-content-update';
import HeaderContentUpdate from '../components/__header-content-update';
import FooterContentUpdate from '../components/__footer-content-update';
import SlidebarContentUpdate from '../components/__slidebar-content-update';
import SidebarDefaultDesktop from '../components/__sidebar-default-desktop';
import GetPostByIDFunction from '../functions/_getPostByID';
import UpdatePostFunction from '../functions/_updatePost';

const EditPostPage = ({pageSetter, width, navState, setNavState}) => {
  let {id} = useParams();
  const [postID, setPostID] = useState(id);
  const [postTitle, setPostTitle] = useState('');
  const [postAuthor, setPostAuthor] = useState('');
  const [postBody, setPostBody] = useState('');
  const [postDate, setPostDate] = useState('');

  const updatePostData = (e) => {
    e.preventDefault();
    let data = {
      id: postID,
      title: postTitle,
      body: postBody,
      author: postAuthor,
    }

    UpdatePostFunction(data)
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
    GetPostByIDFunction(id)
      .then(
        (data) => {
          let {post_id, post_title, post_body, post_author, post_created_at} = data;

          setPostID(post_id);
          setPostTitle(post_title);
          setPostAuthor(post_author);
          setPostBody(post_body);
          setPostDate(post_created_at);
        }
      )
      .catch(
        (status) => {
          // To Do
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
        />
      },
      "bodyFooter": () => {return <FooterContentUpdate navState={navState} setNavState={setNavState} data={{postID}} updatePostData={updatePostData}/>},
    });
  }, [postTitle, postAuthor, postBody, navState])
  
  return null;
}

export default EditPostPage