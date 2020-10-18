import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BodyContentView from '../components/__body-content-view';
import HeaderContentView from '../components/__header-content-view';
import SidebarDefaultDesktop from '../components/__sidebar-default-desktop';
import BackendRoutes from '../routes/BackendRoutes';

const ViewPostPage = ({pageSetter, width}) => {
  let {id} = useParams();
  const [postID, setPostID] = useState(id);
  const [postTitle, setPostTitle] = useState("Waiting for Data");
  const [postAuthor, setPostAuthor] = useState("-");
  const [postBody, setPostBody] = useState("-");
  const [postDate, setPostDate] = useState(null);
  const [loading, setLoading] = useState(null);
  
  useEffect(() => {
    Axios.get(BackendRoutes.post.getByID + id)
      .then((res) => {
        let {post_id, post_title, post_body, post_author, post_created_at} = res.data;

        setPostID(post_id);
        setPostTitle(post_title);
        setPostAuthor(post_author);
        setPostBody(post_body);
        setPostDate(post_created_at);
        setLoading(true);
      })
      .catch((err) => {
        console.log(JSON.stringify(err, null, 2));
        setLoading(true);
      });
  }, [])

  useEffect(() => {
    pageSetter({
      "sidebar": () => {return <SidebarDefaultDesktop/>},
      "slidingSidebar": () => {return ""},
      "bodyHeader": () => {return <HeaderContentView data={{postID, postTitle, postAuthor, postDate}}/>},
      "bodyContent": () => {return <BodyContentView data={{postID, postBody}}/>},
      "bodyFooter": () => {return "BodyFooter"},
    });
  }, [loading])
  
  return null;
}

export default ViewPostPage