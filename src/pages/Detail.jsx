import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { __getPostDetailThunk } from "../redux/modules/detailSlice";
import { delPostThunk } from "../redux/modules/postSlice";
import { __doLikeThunk, __getLikeDetailThunk } from "../redux/modules/likeSlice";

const Detail = () => {
  const {id} = useParams();
  const post = useSelector((state) => state.posts.posts);
  const like = useSelector((state) => state.like.likes);
  // console.log(like)
  // console.log(post.id)
  // console.log(post)
  // console.log(id)
  
  // const [postLike, setPostLike] = useState()
  // const [commentLike, setCommentLike] = useState()

  const postLikehandler = () => {
    dispatch(__doLikeThunk(id))
  }
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(__getPostDetailThunk(id));
    dispatch(__getLikeDetailThunk(id));
  }, [dispatch, id]);

  
  return(
    <DetailContainer>
      <DetailWrap>
        <DetailBox >
          <h1>{post?.title}</h1>
          <img src={post?.imgUrl} alt="" />
          <p>{post?.descript}</p>
          <BtnGroup>
            <LikeBox onClick={postLikehandler} type="button">❤ {like}</LikeBox>

            <BtnBox>
              <button  
              type="button"
              onClick={() => {
                navigate(-1);
              }}>뒤로가기</button>
              <button onClick={() => dispatch(delPostThunk(id))}>삭제하기</button>
              <button>정비하기</button>
            </BtnBox>
          </BtnGroup>
        </DetailBox>
      </DetailWrap>
      
      <CommentWrap>
        <CommnentForm>
          <textarea/>
          <div>
            <span>댓글수</span>
            <button type="submit">댓글달기</button>
          </div>
        </CommnentForm>
      </CommentWrap>
      
      <CommentList>
        <CommentItem>
          <div>
            <span>댓글작성자</span>
            <span>작성날짜</span>
          </div>
          <p>댓글 내용입니다.</p>
          <div>
            <LikeBox onClick={postLikehandler} type="button">❤ {like}</LikeBox>
            <button>삭제하기</button>
          </div>
        </CommentItem>
        <CommentItem>
          <div>
            <span>댓글작성자</span>
            <span>작성날짜</span>
          </div>
          <p>댓글 내용입니다.</p>
          <div>
            <LikeBox onClick={postLikehandler} type="button">❤ {like}</LikeBox>
            <button>삭제하기</button>
          </div>
        </CommentItem>
      </CommentList>

    </DetailContainer>
  )

};

export default Detail;

const CommentList = styled.div`
  /* border: 1px solid red; */
  width: calc(100% + 30px);
  /* padding: 0px 15px; */
  margin-top: 1.5rem;
`

const CommentItem = styled.div`
  /* border: 1px solid blue; */
  padding: 20px 0;
  border-bottom: 1px solid #000;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

const DetailContainer = styled.div`
  max-width: 600px;
  width: 100%;
  margin: auto;
`

const CommentWrap = styled.div`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  margin-top: 2rem;
  padding: 20px 15px;
  border-radius: 5px;
  width: 100%;
`

const CommnentForm = styled.div`
  width: 100%;
  textarea {
    box-sizing: border-box;
    width: 100%;
    height: 55px;
    resize: none;
  }
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
  }
`

const DetailWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding:20px 15px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  max-width:600px;
  background-color:#fff;
  margin-top: 3rem;
  h1 {
    margin: 0;
  }
`

const DetailBox = styled.div`
  width:100%;
  height:100%;
  
  display: flex;
  flex-direction: column;
`

const BtnGroup = styled.div`
  display:flex;
  justify-content: space-between
`

const LikeBox = styled.button`
  border:0;
  outline:0;
  background-color:transparent;
  
`
const BtnBox = styled.div`

`