// import Axios from 'axios';
import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Layout from './components/_layout';
import CreatePostPage from './pages/create-post';
import EditPostPage from './pages/edit-post';
import HomePage from './pages/home';
import ViewPostPage from './pages/view-post';
import FrontendRoutes from './routes/FrontendRoutes';
import * as Helpers from './functions/functions-common';
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  const [pageData, setPageData] = useState({
    "sidebar": () => {return ""},
    "slidingSidebar": () => {return ""},
    "bodyHeader": () => {return ""},
    "bodyContent": () => {return ""},
    "bodyFooter": () => {return ""},
  })

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [navState, setNavState] = useState(false);

  Helpers.GetWindowSize(setWidth, setHeight);

  return (
    <div>
      <BrowserRouter>
        <Layout
          sidebarChildren={pageData.sidebar()}
          slidingSidebarChildren={pageData.slidingSidebar()}
          bodyHeaderChildren={pageData.bodyHeader()}
          bodyContentChildren={pageData.bodyContent()}
          bodyFooterChildren={pageData.bodyFooter()}
          width={width}
          height={height}
          navState={navState}
        />
        <Switch>
          <Route exact path={FrontendRoutes.home}>
            <HomePage pageSetter={setPageData} width={width} navState={navState} setNavState={setNavState}/>
          </Route>
          <Route path={FrontendRoutes.viewPost + ":id/"}>
            <ViewPostPage pageSetter={setPageData} width={width} navState={navState} setNavState={setNavState}/>
          </Route>
          <Route path={FrontendRoutes.createPost}>
            <CreatePostPage pageSetter={setPageData} width={width} navState={navState} setNavState={setNavState}/>
          </Route>
          <Route path={FrontendRoutes.updatePost + ":id/"}>
            <EditPostPage pageSetter={setPageData} width={width} navState={navState} setNavState={setNavState}/>
          </Route>
          <Route>
            <Redirect to={FrontendRoutes.home}/>
          </Route>
        </Switch>

        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          transition={Slide}
          closeButton={<FontAwesomeIcon icon={['fas', "times"]} size="lg"/>}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
