import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
  <HeaderWrap>
    <HeaderBox>
    Header
    </HeaderBox>
  </HeaderWrap>);
};

export default Header;


const HeaderWrap = styled.div`
  width: 100%;
  height: 60px;
  background-color: #D3E0EA;

`
const HeaderBox = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  max-width: 1920px;
  background-color: cyan;
`