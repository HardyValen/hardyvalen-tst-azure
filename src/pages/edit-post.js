import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BodyContentUpdate from '../components/__body-content-update';
import HeaderContentUpdate from '../components/__header-content-update';
import SidebarDefaultDesktop from '../components/__sidebar-default-desktop';
import Axios from 'axios';
import BackendRoutes from '../routes/BackendRoutes';

const EditPostPage = ({pageSetter, width}) => {
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

    Axios.post(
      BackendRoutes.post.update,
      data
    ).then(res => {
      console.log(JSON.stringify(res))
    }).catch(error => {
      console.log(JSON.stringify(error))
    })
  }

  useEffect(() => {
    Axios.get(BackendRoutes.post.getByID + id)
      .then((res) => {
        let {post_id, post_title, post_body, post_author, post_created_at} = res.data;

        setPostID(post_id);
        setPostTitle(post_title);
        setPostAuthor(post_author);
        setPostBody(post_body);
        setPostDate(post_created_at);
      })
      .catch((err) => {
        console.log(JSON.stringify(err, null, 2));
      });
  }, [])

  useEffect(() => {
    pageSetter({
      "sidebar": () => {return <SidebarDefaultDesktop/>},
      "slidingSidebar": () => {return ""},
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
      "bodyFooter": () => {return "BodyFooter"},
    });
  }, [postTitle, postAuthor, postBody])
  
  return null;
}

export default EditPostPage