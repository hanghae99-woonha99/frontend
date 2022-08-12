import React from "react";
import './Layout.css'
import styled from "styled-components";

const Layout = () => {
  return <div>Layout</div>;
  return <LayoutBox>Layout</LayoutBox>;
};

export default Layout;

const LayoutBox = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1920px;
  display: block;
  background-color: cyan;
`