
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
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  display: block;
  background-color: cyan;
`