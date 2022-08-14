import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
  <HeaderWrap>
    <HeaderBox>
      <Logo>
        운하99
      </Logo>
      <ButtonBox>
        <button>로그인</button>
      </ButtonBox>
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
  width: 70%;
  height: 100%;
  max-width: 1920px;
  background-color: #D3E0EA;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Logo = styled.div`
  background-color: #D3E0EA;
  font-family: 'Black Han Sans', sans-serif;
  font-size: 30px;
`

const ButtonBox = styled.div`
  button {
    height: 35px;
    border: none;
    border-radius: 10px;
    padding: 5px 15px;
    cursor: pointer;
  }
`