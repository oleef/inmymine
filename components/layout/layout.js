import React, { Component, Fragment } from "react";
import Head from "next/head";
import Navbar from "./navbar";
import Footer from "./footer";
import ContentHeader from "./content-header";
import { MENU_LIST } from "../../configs/menu.config";

const Layout = ({ url, children }) => {
  const getPageTitle = () => {
    const item = MENU_LIST.menuList.filter(item => item.link === url.pathname);
    return item[0].contentHeader;
  };
  return (
    <Fragment>
      <Head>
        <title>{getPageTitle()} - in my mine</title>
      </Head>
      <Navbar />
      <div className="content-wrapper">
        <ContentHeader pageTitle={getPageTitle()} />
        <div className="content">
          <div className="container">{children}</div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Layout;
