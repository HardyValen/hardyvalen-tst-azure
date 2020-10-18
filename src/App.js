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

function App() {
  const [pageData, setPageData] = useState({
    "sidebar": () => {return "Sidebar"},
    "slidingSidebar": () => {return "SlidingSidebar"},
    "bodyHeader": () => {return "BodyHeader"},
    "bodyContent": () => {return "BodyContent"},
    "bodyFooter": () => {return "BodyFooter"},
  })

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

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
        />
        <Switch>
          <Route exact path={FrontendRoutes.home}>
            <HomePage pageSetter={setPageData} width={width}/>
          </Route>
          <Route path={FrontendRoutes.viewPost + ":id/"}>
            <ViewPostPage pageSetter={setPageData} width={width}/>
          </Route>
          <Route path={FrontendRoutes.createPost}>
            <CreatePostPage pageSetter={setPageData} width={width}/>
          </Route>
          <Route path={FrontendRoutes.updatePost + ":id/"}>
            <EditPostPage pageSetter={setPageData} width={width}/>
          </Route>
          <Route>
            <Redirect to={FrontendRoutes.home}/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
