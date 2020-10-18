import React, { useEffect, useState } from 'react';
import SidebarDefaultDesktop from '../components/__sidebar-default-desktop';
import Axios from 'axios';
import moment from 'moment';
import _ from "lodash";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import FrontendRoutes from '../routes/FrontendRoutes';
import BackendRoutes from '../routes/BackendRoutes';
import HeaderContentHome from '../components/__header-content-home';
import DeletePostFunction from '../functions/_deletePost';
import GetAllPostFunction from '../functions/_getAllPosts';
import FooterContentHome from '../components/__footer-content-home';
import SlidebarContentHome from '../components/__slidebar-content-home';

const HomePage = ({pageSetter, width, navState, setNavState}) => {
  const [searchString, setSearchString] = useState('');
  const [posts, setPosts] = useState([]);
  const [refreshFlag, setRefreshFlag] = useState(true);

  const PageBody = () => {
    let filteredPosts = posts?.filter(
      (data) => {
        return (
          data?.post_title?.toUpperCase().indexOf(searchString?.toUpperCase()) > -1 || 
          data?.post_author?.toUpperCase().indexOf(searchString?.toUpperCase()) > -1
        )
      }
    );

    return (
      <div className="postsFeedContainer row">
        {filteredPosts.slice().sort((a, b) => new Date(b.post_created_at) - new Date(a.post_created_at)).map((data, index) => {
          return (
            <div className="col-12 col-md-4 p-3" key={index}>
              <div className="postFeed">
                <Link to={FrontendRoutes.viewPost + data.post_id + "/"}>
                  <div className="postFeedBody">
                    <h3>{data.post_title}</h3>
                    <div className="row mt-2">
                      <div className="col-12">
                        <p className="font annotation color gray-3">Author: {data.post_author}</p>
                      </div>
                      <div className="col-12">
                        <p className="font annotation color gray-3">Updated {moment(data.post_created_at).fromNow()}</p>
                      </div>
                    </div>
                    <div className="row mt-2">
                      <p className="color gray-1"><small>
                        {_.truncate(data.post_body, {length: 200})}
                      </small></p>
                    </div>
                  </div>
                </Link>
                <div className="postFeedFooter">
                  <a className="icons" onClick={
                    () => {
                      DeletePostFunction(data.post_id)
                      .then(() => {
                        setRefreshFlag(!refreshFlag);
                      })
                    }
                  }>
                    <FontAwesomeIcon icon={['fas', 'trash-alt']} title="Delete Post"/>
                  </a>
                  &emsp;
                  <Link to={FrontendRoutes.updatePost + data.post_id} className="icons">
                    <FontAwesomeIcon icon={['fas', 'edit']} title="Update Post"/>
                  </Link>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  useEffect(() => {
    pageSetter({
      "sidebar": () => {return <SidebarDefaultDesktop/>},
      "slidingSidebar": () => {return <SlidebarContentHome navState={navState} setNavState={setNavState}/>},
      "bodyHeader": () => {return <HeaderContentHome width={width} search={setSearchString}/>},
      "bodyContent": () => {return <PageBody/>},
      "bodyFooter": () => {return <FooterContentHome navState={navState} setNavState={setNavState}/>},
    });
  }, [width, searchString, posts, navState])

  useEffect(() => {
    GetAllPostFunction()
      .then(data => {
        setPosts(data);
      })
      .catch(err => JSON.stringify(err, null, 2))
  }, [refreshFlag]);

  return null;
}

export default HomePage