import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { FaTimesCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { editDetailThunk } from "../redux/modules/postSlice";
import styled from "styled-components";
new Blob([JSON.stringify()], { type: "application/json" });

const DetailPageModal = ({ show, onHide, setShow, id }) => {
  const dispatch = useDispatch();
  const initialState = {
    title: "",
    descript: "",
  };

  const [editDetail, setEditDetail] = useState(initialState);
  console.log(editDetail);

   // 파일 저장
   const [attachment, setAttachment] = useState("");
   const saveFileImage = (e) => {
    setAttachment(URL.createObjectURL(e.target.files[0]));
  };

  
  const inputBody = (e) => {
    const { name, value } = e.target;
    setEditDetail({ ...editDetail, [name]: value});
  };

  const onSubmitHandler = (event) => {
    if (editDetail.descript === "") {
      event.preventDefault();
      alert("내용을 모두 채워주세요");
    } else {
      event.preventDefault();
      let frm = new FormData();
      let editimage = document.getElementById("ex_file");
      frm.append(
        "data",
        new Blob([JSON.stringify(editDetail)], { type: "application/json" })
      );
      frm.append("image", editimage.files[0]);

        dispatch(editDetailThunk({id, frm}));
        console.log(editDetail);
        setEditDetail(initialState);
        alert("정상적으로 등록 되었습니다");
        setShow(false);
      }
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <ModalContainer>
        <ModalBox enctype="multipart/form-data" onSubmit={onSubmitHandler}>
          <FaTimesCircle className="faArrowLeft" onClick={onHide} />
          <input name="title" value={editDetail?.title}  type="text"  onChange={inputBody}></input>
          <div className="imgBox">
            <strong>수정 이미지</strong>
            <PrevImg src={attachment ? attachment : "image/upload.png"} alt="이미지 미리보기" />
            <ImageBox>
              <FileCustom placeholder="업로드 버튼을 클릭해주세요" />
              <FileLabel htmlFor="ex_file">업로드</FileLabel>
              <FileInput type="file" id="ex_file" accept="img/*" onChange={saveFileImage}/>
            </ImageBox>
          </div>
          <textarea
            name="descript"
            value={editDetail.descript}
            type="text"
            placeholder="내용을 입력해주세요"
            onChange={inputBody}
          />
          <button className="edit_done_btn">
            수정완료
          </button>
        </ModalBox>
      </ModalContainer>
    </Modal>
  );
};

export default DetailPageModal;

const ModalContainer = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
`;
const ModalBox = styled.form`
  display: flex;
  flex-direction: column;
  margin: 15% auto;
  width: 500px;
  height: 300px;
  border: 3px #004e66 solid;
  border-radius: 5px;
  background: white;
  padding: 20px;
  textarea[type="text"] {
    border: 3px #fcbe32 solid;
    border-radius: 5px;
    width: 450px;
    height: 150px;
    margin: auto;
    font-size: large;
    padding-left: 10px;
    padding-top: 10px;
  }
  button {
    background-color: #ff5f2e;
    border: none;
    border-radius: 10px;
    color: #e1eef6;
    font-size: small;
    width: 70px;
    height: 50px;
    cursor: pointer;
    margin: 10px auto;
  }
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
  background-color: #1687a7;
  cursor: pointer;
  height: 40px;
  line-height: 40px;
  margin-left: 10px;
  border-radius: 5px;
  margin-bottom: 15px;
`;