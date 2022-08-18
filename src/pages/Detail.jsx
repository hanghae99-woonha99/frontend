import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { __getPostDetailThunk } from "../redux/modules/detailSlice";
import { delPostThunk } from "../redux/modules/postSlice";
import { __doLikeThunk, __getLikeDetailThunk } from "../redux/modules/likeSlice";
import DetailPageModal from "../components/DetailPageModal";
import CommentBox from "../components/CommentBox";
import { addCommentList, __getCommentPostDetailThunk } from "../redux/modules/commentSlice";
import { FaHeart, FaCommentDots } from "react-icons/fa";

const Detail = () => {
  const { id } = useParams();
  const post = useSelector((state) => state.posts.posts);
  const like = useSelector((state) => state.like.likes);
  // console.log(like)
  console.log(post.author);

  const nickname = sessionStorage.getItem("nickname");

  const postLikehandler = () => {
    dispatch(__doLikeThunk(id));
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(__getPostDetailThunk(id));
    dispatch(__getLikeDetailThunk(id));
    dispatch(__getCommentPostDetailThunk(id));
  }, [dispatch, id]);

  const [modalOn, setModalOn] = useState(false);

  const [inputForm, setInputForm] = useState("");
  const comments = useSelector((state) => state.comments.comments);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputForm) {
      const newContents = { postId: { id }.id, descript: inputForm };
      //console.log('22222222222', newContents);
      dispatch(addCommentList(newContents));
      setInputForm("");
    } else {
      alert("내용을 입력해주세요");
    }
  };

  return (
    <DetailContainer>
      <DetailWrap>
        <DetailBox>
          <h1>{post?.title}</h1>
          <img src={post?.imgUrl} alt="" />
          <p>{post?.descript}</p>
          <BtnGroup>
            <LikeBox onClick={postLikehandler} type="button">
              <FaHeart style={{ color: "red" }} /> {like}
            </LikeBox>

            <BtnBox>
              <BtnBack
                type="button"
                onClick={() => {
                  navigate(-1);
                }}
              >
                뒤로가기
              </BtnBack>
              {post.author === nickname ? (
                <>
                  <BtnDel onClick={() => dispatch(delPostThunk(id))}>삭제하기</BtnDel>
                  <BtnEdit onClick={() => setModalOn(true)}>정비하기</BtnEdit>
                </>
              ) : (
                ""
              )}
            </BtnBox>
          </BtnGroup>
        </DetailBox>
      </DetailWrap>

      <CommentWrap>
        <CommnentForm>
<<<<<<< HEAD
          <textarea type="text" placeholder="댓글을 입력해주세요" value={inputForm} onChange={(e) => setInputForm(e.target.value)}/>
          <button type="submit" onClick={handleSubmit}>댓글달기</button>
=======
          <input type="text" placeholder="댓글을 입력해주세요" value={inputForm} onChange={(e) => setInputForm(e.target.value)} />
          <div>
            <div>
              <FaCommentDots style={{ marginRight: "5px" }} />
              {post.commentCnt}
            </div>
            <BtnAddComment type="submit" onClick={handleSubmit}>
              댓글달기
            </BtnAddComment>
          </div>
>>>>>>> 06c34e5bf446b47ca229a41c40a231b7b37b0d79
          {/* <textarea/>
          <div>
            <span>댓글수</span>
            <button type="submit">댓글달기</button>
          </div> */}
        </CommnentForm>
      </CommentWrap>

      <CommentBox id={id} comments={comments}></CommentBox>

      <DetailPageModal show={modalOn} id={id} setShow={setModalOn} onHide={() => setModalOn(false)}>
        {" "}
      </DetailPageModal>
    </DetailContainer>
  );
};

export default Detail;

const DetailContainer = styled.div`
  max-width: 600px;
  width: 100%;
  margin: auto;
`;

const CommentWrap = styled.div`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  margin-top: 2rem;
  padding: 20px 15px;
  border-radius: 5px;
  width: 100%;
`;

const CommnentForm = styled.div`
  width: 100%;
  input {
    box-sizing: border-box;
    width: 100%;
    height: 35px;
    resize: none;
  }
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
  }
<<<<<<< HEAD
  button {
    
  }
`
=======
`;
>>>>>>> 06c34e5bf446b47ca229a41c40a231b7b37b0d79
const DetailWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 20px 15px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  max-width: 600px;
  background-color: #fff;
  margin-top: 3rem;
  h1 {
    margin: 0;
  }
`;
const DetailBox = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
`;
const BtnGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;
const LikeBox = styled.button`
  border: 0;
  outline: 0;
  background-color: transparent;
`;
const BtnBox = styled.div`
  button {
    font-size: 17px;
    border-radius: 10px;
    border: 0;
    padding: 5px 15px;
    display: inline-block;
  }
`;
const BtnBack = styled.button`
  margin-right: 8px;
  background-color: #f0f0f0;
  cursor: pointer;
`;
const BtnDel = styled.button`
  margin-right: 8px;
  background-color: #d3e0ea;
  cursor: pointer;
`;
const BtnEdit = styled.button`
  color: #fff;
  background-color: #276678;
  cursor: pointer;
`;

const BtnAddComment = styled.button`
  background-color: #d3e0ea;
  border: none;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
`;
