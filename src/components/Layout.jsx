import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Layout = () => {
  return (
      <LayoutBox>
        <Outlet />
      </LayoutBox>
  )
};

export default Layout;

const LayoutBox = styled.div`
  margin: 0 auto 50px;
  width: 70%;
  max-width: 1920px;
  display: block;
`