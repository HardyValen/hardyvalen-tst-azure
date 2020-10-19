import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BodyContentView from '../components/__body-content-view';
import FooterContentView from '../components/__footer-content-view';
import HeaderContentView from '../components/__header-content-view';
import SidebarDefaultDesktop from '../components/__sidebar-default-desktop';
import SlidebarContentView from '../components/__slidebar-content-view';
import GetPostByIDFunction from '../functions/_getPostByID';

const ViewPostPage = ({pageSetter, width, navState, setNavState}) => {
  let {id} = useParams();
  const [postID, setPostID] = useState(useParams().id);
  const [postTitle, setPostTitle] = useState("Waiting for Data");
  const [postAuthor, setPostAuthor] = useState("-");
  const [postBody, setPostBody] = useState("-");
  const [postDate, setPostDate] = useState(null);
  const [loaded, setLoaded] = useState(null);
  
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
          setLoaded(true);
        }
      )
      .catch(
        (err) => {
          setLoaded(true);
        }
      )
  }, [])

  useEffect(() => {
    pageSetter({
      "sidebar": () => {return <SidebarDefaultDesktop/>},
      "slidingSidebar": () => {return <SlidebarContentView navState={navState} setNavState={setNavState}/>},
      "bodyHeader": () => {return <HeaderContentView data={{postID, postTitle, postAuthor, postDate}}/>},
      "bodyContent": () => {return <BodyContentView data={{postID, postBody}}/>},
      "bodyFooter": () => {return <FooterContentView navState={navState} setNavState={setNavState} data={{postID}}/>},
    });
  }, [loaded, navState])
  
  return null;
}

export default ViewPostPage