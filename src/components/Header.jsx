import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import cookies from "react-cookies";

const Header = () => {
  const navigate = useNavigate();

  const nickname = sessionStorage.getItem("nickname");
  const logOut = () => {
    sessionStorage.clear();
    // cookies.remove("refresh-token");
    alert("로그아웃 되었습니다.")
    window.location.replace("/");
  };

  return (
    <HeaderWrap>
      <HeaderBox>
        <Logo onClick={() => navigate("/")}>운하99</Logo>
        

        <ButtonBox>
        {!nickname ? 
          (<button onClick={() => navigate("/login")}>로그인</button>) : 
          (<div>
            <span>{nickname}님 안녕하세요</span>
            <VoyageBtn onClick={()=> navigate("/write")}>출항하기</VoyageBtn>
            <button onClick={logOut}>로그아웃</button>
          </div>)}
        </ButtonBox>
      </HeaderBox>
    </HeaderWrap>
  );
};

export default Header;

const VoyageBtn = styled.button`
  background-color : #1363df;
  color : white;
  margin-right: 15px;
`  
const HeaderWrap = styled.div`
  width: 100%;
  height: 60px;
  background-color: #d3e0ea;
`;
const HeaderBox = styled.div`
  margin: 0 auto;
  width: 100%;
  /* min-width: 1000px; */
  height: 100%;
  max-width: 1200px;
  background-color: #d3e0ea;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.div`
  background-color: #d3e0ea;
  font-family: "Black Han Sans", sans-serif;
  font-size: 30px;
  color: #1363df;
  cursor: pointer;
`;
const ButtonBox = styled.div`
  button {
    height: 35px;
    border: none;
    border-radius: 10px;
    padding: 5px 15px;
    cursor: pointer;
  }

  span {
    margin-right: 10px;
    font-size: 13px;
  }
`;
