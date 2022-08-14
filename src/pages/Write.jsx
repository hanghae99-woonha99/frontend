import React from "react";
import styled from "styled-components";

const Write = () => {
  return (
    <WriteWrap>
      <WriteBox>
        <div>
          <p>제목</p>
          <input type="text"/>
          <p>내용</p>
          <input type="text" />
        </div>
      </WriteBox>
    </WriteWrap>
  )
}

export default Write;

const WriteWrap = styled.section`
  width:100%;
  heigth:100%;
  display:flex;
`

const WriteBox = styled.div`
  width:100%;
  max-width:600px;
  
`