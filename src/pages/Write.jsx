import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postPostThunk } from "../redux/modules/postSlice";
new Blob([JSON.stringify()], { type: "application/json" });

//확인용
const Write = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //state
  //const [attachment, setAttachment] = useState("");

  const initialState = {
    title: "",
    descript: "",
  };

  const [upLoad, setUpLoad] = useState(initialState);

  //미리보기
  const onUpLoadHandler = (e) => {
    const { name, value } = e.target;
    setUpLoad({ ...upLoad, [name]: value });
  };

  // 파일 저장
  const [attachment, setAttachment] = useState("");

  const saveFileImage = (e) => {
    setAttachment(URL.createObjectURL(e.target.files[0]));
  };

  //저장함수
  const onPostingHandler = async (e) => {
    if (
      upLoad.title === "" ||
      upLoad.descript === ""
    ) {
      alert("빈칸을 다 채워주세요.");
      return;
    }
    e.preventDefault();
    let frm = new FormData();
    let postimage = document.getElementById("ex_file");
    frm.append(
      "data",
      new Blob([JSON.stringify(upLoad)], { type: "application/json" })
    );
    console.log(postimage)
    frm.append("image", postimage.files[0]);
      try {
        const response = await dispatch(postPostThunk(frm))
        if(response){
          alert("글작성 성공");
          navigate(`/`)
        }
      }
      catch (error){
        console.log(error)
      }
  };
  
  return (
    <WriteWrap>
      <WriteBox enctype="multipart/form-data" onSubmit={onPostingHandler}>
        <WriteInput type="text" name="title" value={upLoad.title} onChange={onUpLoadHandler} />

        <div className="imgBox">
          <strong>업로드된 이미지</strong>
          <PrevImg src={attachment ? attachment : "image/upload.png"} alt="이미지 미리보기" />
          <ImageBox>
            <FileCustom placeholder="업로드 버튼을 클릭해주세요" />
            <FileLabel htmlFor="ex_file">업로드</FileLabel>
            <FileInput type="file" id="ex_file" accept="image/*" onChange={saveFileImage}/>
          </ImageBox>
        </div>

        <TextArea type="text" name="descript" value={upLoad.descript} onChange={onUpLoadHandler}/>

        <BtnGroup>
          <BtnBack
            type="button"
            onClick={() => {
              navigate(-1);
            }}
          >
            뒤로가기
          </BtnBack>
          <BtnUpload type="submit">출항하기</BtnUpload>
        </BtnGroup>
      </WriteBox>
    </WriteWrap>
  );
};

export default Write;

const WriteWrap = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WriteBox = styled.form`
  background-color: #fff;
  width: 100%;
  height: 100%;
  margin-top: 3rem;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  padding: 20px 15px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
const WriteInput = styled.input`
  width: 100%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border: none;
  display: block;
  border-radius: 5px;
  height: 35px;
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 15px;
`;

const PrevImg = styled.img`
  width: 100%;
  max-widht: 600px;
  height: 300px;
  margin-bottom: 15px;
`;

const ImageBox = styled.div``;

const FileCustom = styled.input`
  display: inline-block;
  height: 40px;
  padding: 0 10px;
  vertical-align: middle;
  border: 1px solid #dddddd;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border-radius: 5px;
  width: 80%;
  color: #999999;
  font-size: 16px;
  margin-bottom: 15px;
`;

const FileInput = styled.input`
  position: absolute;
  width: 0;
  height: 0;
  padding: 0;
  overflow: hidden;
  border: 0;
`;
const FileLabel = styled.label`
  display: inline-block;
  padding: 0 20px;
  color: #fff;
  vertical-align: middle;
  background-color: #1363df;
  cursor: pointer;
  height: 40px;
  line-height: 40px;
  margin-left: 10px;
  border-radius: 5px;
  margin-bottom: 15px;
  font-size:16px;
  font-weight:600;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  font-size: 16px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border: none;
  border-radius: 5px;
  margin-bottom: 15px;
  padding: 5px;
  box-sizing: border-box;
`;

const BtnGroup = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const BtnBack = styled.button`
  padding: 0 20px;
  color: #666;
  vertical-align: middle;
  background-color: #f6f5f5;
  cursor: pointer;
  height: 40px;
  line-height: 40px;
  border-radius: 5px;
  margin-right: 10px;
  border:0;
  font-size:16px;
  font-weight:600;
`;
const BtnUpload = styled.button`
  padding: 0 20px;
  color: #fff;
  vertical-align: middle;
  background-color: #1363df;
  cursor: pointer;
  height: 40px;
  line-height: 40px;
  border-radius: 5px;
  border:0;
  font-size:16px;
  font-weight:600;
`;
