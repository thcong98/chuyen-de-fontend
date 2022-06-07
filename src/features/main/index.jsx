import React from "react";
import "./index.scss";
import { Route, Routes } from "react-router-dom";
import AppHeader from "./pages/header";
import AppFooter from "./pages/footer";
import RoomDetail from "./pages/room-detail";
import Home from "./pages/home";
import Login from "../../components/login";
import Regist from "../../components/regist";
import Profile from "./pages/profile";
import { Layout } from 'antd';
import RoomManagement from "./pages/room-management";
import RoomList from "./pages/room-list";
import RoomWait from "./pages/room-wait";
import RoomShare from "./pages/room-share";
import ShareDetail from "./pages/room-share-detail"
import { wait } from "@testing-library/user-event/dist/utils";
const { Header, Content, Footer } = Layout;

function HomePage() {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader />
      </Header>
      <Content>
        <Routes>
          <Route path="/detail/:id/*" element={<RoomDetail />} />
          <Route path="/login/*" element={<Login />} />
          <Route path="/regist/*" element={<Regist />} />
          <Route path="/profile/:id/*" element={<Profile />} />
          <Route path="/room-management/*" element={<RoomManagement />} />
          <Route path="/room-list/*" element={<RoomList />} />
          <Route path="/room-list/:id/*" element={<RoomList />} />
          <Route path="/room-wait/*" element={<RoomWait />} />
          <Route path="/room-share/*" element={<RoomShare />} />
          <Route path="/room-share-detail/*" element={<ShareDetail />} />
          
          <Route path="/" element={<Home />}>
          </Route>
        </Routes>
      </Content>
      <Footer>
        <AppFooter />
      </Footer>
    </Layout>
  );
}

export default HomePage;