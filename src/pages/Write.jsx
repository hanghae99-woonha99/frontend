import React from "react";
import styled from "styled-components";
import { useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

//확인용
import { RESP } from "../response";

const Write = () => {
  const fileInput = useRef(null);
  const navigate = useNavigate();

  //state
  const [files, setFiles] = useState('');
  const [attachment, setAttachment] = useState("");

  //미리보기
  const onLoadFile = (e) => {
    const reader = new FileReader();
    const theFile = fileInput.current.files[0];
    reader.readAsDataURL(theFile);
    reader.onloadend = (finishiedEvent) => {
      const {
        currentTarget: { result },
      } = finishiedEvent;
      setAttachment(result);
    };
  }

  return (
    <Layout>
    <WriteWrap>
      <WriteBox>
          <WriteInput type="text" placeholder="제목을 입력해주세요"/>
          <div className="imgBox">
            <strong>업로드된 이미지</strong>
            <PrevImg
            src={
              attachment
              ? attachment
              : "image/upload.png"
            }
            alt="이미지 미리보기"
            />
            <ImageBox>
              {/* <FileLabel for="file-input">업로드</FileLabel>
              <FileInput id="file-input" type="file" accept="img/*" onChange={onLoadFile} ref={fileInput} /> */}

              <FileCustom value="업로드 버튼을 클릭해주세요" placeholder="업로드 버튼을 클릭해주세요" />
              <FileLabel for="file-input">업로드</FileLabel> 
              <FileInput type="file" id="file-input" accept="img/*" onChange={onLoadFile}  ref={fileInput}/>
            </ImageBox>
          </div>

          <TextArea type="text" placeholder="내용을 입력해주세요"/>

          <BtnGroup>
            <BtnBack onClick={() => {navigate(-1);}}>뒤로가기</BtnBack>
            <BtnUpload>출항하기</BtnUpload>
          </BtnGroup>
      </WriteBox>
    </WriteWrap>
    </Layout>
  )
}

export default Write;

const WriteWrap = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const WriteBox = styled.div`
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
const WriteInput = styled.input`
  width:100%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px; 
  border:none;
  display:block;
  border-radius:5px;
  height:35px;
  font-size: 16px;
  line-height:20px;
  margin-bottom:15px;
`

const PrevImg = styled.img`
  width:100%;
  max-widht:600px;
  height:300px;
  margin-bottom:15px;
`

const ImageBox = styled.div`

`

const FileCustom =styled.input`
  display: inline-block;
  height: 40px;
  padding: 0 10px;
  vertical-align: middle;
  border: 1px solid #dddddd;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px; 
  border-radius:5px;
  width: 80%;
  color: #999999;
  font-size:16px;
  margin-bottom:15px;
`

const FileInput = styled.input`
  position: absolute;
  width: 0;
  height: 0;
  padding: 0;
  overflow: hidden;
  border: 0;
`
const FileLabel = styled.label`
  display: inline-block;
  padding: 0 20px;
  color: #fff;
  vertical-align: middle;
  background-color: #1687a7;
  cursor: pointer;
  height: 40px;
  line-height:40px;
  margin-left: 10px;
  border-radius:5px;
  margin-bottom:15px;
`

const TextArea = styled.textarea`
  width:100%;
  height:150px;
  font-size:16px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border:none;
  border-radius:5px;
  margin-bottom:15px;
  padding: 5px; 
  box-sizing:border-box;
`

const BtnGroup = styled.div`
  display:flex;
  justify-content: flex-end
`

const BtnBack = styled.div`
  padding: 0 20px;
  color: #666;
  vertical-align: middle;
  background-color: #F6F5F5;
  cursor: pointer;
  height: 40px;
  line-height:40px;
  border-radius:5px;
  margin-right:10px;
`
const BtnUpload = styled.div`
  padding: 0 20px;
  color: #fff;
  vertical-align: middle;
  background-color: #1687a7;
  cursor: pointer;
  height: 40px;
  line-height:40px;
  border-radius:5px;
`