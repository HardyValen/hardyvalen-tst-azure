import React, {Fragment} from "react";
import Body from "./_layout-body";
import BodyContent from "./_layout-body-content";
import Footer from "./_layout-body-footer";
import Header from "./_layout-body-header";
import Sidebar from "./_layout-sidebar";
import SlidingSidebar from "./_layout-sliding-sidebar";
import * as Helper from "../functions/functions-common";

const Layout = (props) => {
  return (
    <Fragment>
      {
        props.width <= Helper.Breakpoints.md 
        ? <SlidingSidebar>
            {props.slidingSidebarChildren}
          </SlidingSidebar> 
        : null
      }
      <div className="layoutComponent">
        {
          props.width > Helper.Breakpoints.md 
          ? <Sidebar>
              {props.sidebarChildren}
            </Sidebar> 
          : null
        }
        <Body>
          <Header>
            {props.bodyHeaderChildren}
          </Header>
          <BodyContent>
            {props.bodyContentChildren}
          </BodyContent>
        </Body>
      </div>
      {
        props.width <= Helper.Breakpoints.md 
        ? <Footer>
            {props.bodyFooterChildren}
          </Footer> 
        : null
      }
    </Fragment>
  )
}

export default Layout