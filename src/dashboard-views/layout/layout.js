import React, { Fragment } from 'react'
import Header from '../layout-components/Header/Header';
import Content from '../layout-components/Content/Content';
import RigthSideBar from '../layout-components/RigthSideBar/RigthSideBar';
import LeftSideBar from '../layout-components/LeftSideBar/LeftSideBar';
import Footer from '../layout-components/Footer/Footer';

const LayoutDashboard = () => {
    return (
        <Fragment>
            <Header />
            <LeftSideBar />
            <Content />
            <RigthSideBar />
            <Footer />
        </Fragment>
    )
}

export default LayoutDashboard;
