import React from "react";
import styled from "styled-components";
// import { useRef, useState } from 'react';
// import { useNavigate } from "react-router-dom";

import { RESP } from "../response";

const Detail = () => {
  const resp = RESP.POSTS_POSTID.data;
  // const navigate = useNavigate();
  return(
    <>
      <DetailWrap>
        <DetailBox  key={resp.postId}>
          <h1>{resp.title}</h1>
          <img src={resp.imgUrl} alt="" />
          <p>{resp.descript}</p>
          <BtnGroup>
            <button>뒤로가기</button>
            <button>삭제하기</button>
            <button>정비하기</button>
          </BtnGroup>
        </DetailBox>
      </DetailWrap>
    </>
  )

};

export default Detail;

const DetailWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const DetailBox = styled.div`
  background-color:#fff;
  width:100%;
  height:100%;
  margin-top:3rem;
  max-width:600px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  padding:20px 15px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`

const BtnGroup = styled.div`
  display:flex;
  justify-content: flex-end
`