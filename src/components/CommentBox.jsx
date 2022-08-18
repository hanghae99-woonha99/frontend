import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { __getCommentPostDetailThunk, __doCommentLikeThunk, delCommemtThunk} from "../redux/modules/commentSlice";
import { FaHeart } from 'react-icons/fa';

const CommentBox = ({ comments }) => {
  
  const dispatch = useDispatch()

  const nickname = sessionStorage.getItem("nickname")
  return (
    
      <CommentList>
      {comments?.map((el) => {
        return (
            <CommentItem key={el.commentId}>
              <div>
                <span>{el.author}</span>
                <span>{`${el.createdAt.split("T")[0].split('-').join('.')} ${el.createdAt.split("T")[1].split(".")[0]}`}</span>
              </div>
              <p>{el.descript}</p>
              <div>
                <LikeBox onClick={() => dispatch(__doCommentLikeThunk(el.commentId))} type="button">
                  <FaHeart style={{color:'red', fontSize:'12px'}} />
                  <span>{el.commentLikeCnt}</span>
                </LikeBox>
                {nickname === el.author ? (<BtnDel onClick={() => dispatch(delCommemtThunk(el.commentId))}>삭제하기</BtnDel>):(
                  ''
                )}
              </div>
            </CommentItem>
        );
      })}
      </CommentList>
    
  );
};

export default CommentBox;

const CommentList = styled.div`
  /* border: 1px solid red; */
  width: calc(100% + 30px);
  /* padding: 0px 15px; */
  margin-top: 1.5rem;
`;

const CommentItem = styled.div`
  /* border: 1px solid blue; */
  padding: 20px 0;
  border-bottom: 1px solid #000;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  div span:nth-child(1) {
    font-weight: bold;

  }
  div span:nth-child(2) {
    color: gray;
    font-size: 12px;
  }

  p {
    font-size: 13px;
  }
`;

const LikeBox = styled.button`
  border: 0;
  outline: 0;
  background-color: transparent;
  justify-content: space-between;
  align-items: baseline;

  span {
    margin-left: 10px;

    
  }
`;

const BtnDel = styled.button`
  background-color:#D3E0EA;
  border: none;
  padding: 5px;
  border-radius: 5px;
`

