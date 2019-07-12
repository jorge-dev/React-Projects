import React, { Component } from "react";
import {
  Layout,
  Header,
  Textfield,
  Drawer,
  Navigation,
  Content
} from "react-mdl";
import Main from "./main";
import {Link} from 'react-router-dom'
export class Navbar extends Component {
  render() {
    return (
      <div style={{ height: "300px", position: "relative" }}>
        <Layout fixedHeader>
          <Header
            title={
              <span>
                <span style={{ color: "#ddd" }}>Area / </span>
                <strong>The Title</strong>
              </span>
            }
          >
            <Navigation>
              <Link href="">About Me</a>
              <Link href="">Resume</a>
              <Link href="">Projects</a>
              <Link href="">Contact</a>
            </Navigation>
          </Header>
          <Drawer title="Title">
            <Navigation>
              <Link href=""></a>
              <Link href=""></a>
              <Link href=""></a>
              <Link href=""></a>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content">
              <Main />
            </div>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default Navbar;
