import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { __getCommentPostDetailThunk, __doCommentLikeThunk, delCommemtThunk} from "../redux/modules/commentSlice";


const CommentBox = ({ comments }) => {
  
  const dispatch = useDispatch()

  const nickname = sessionStorage.getItem("nickname")
  console.log(comments)
  return (
    
      <CommentList>
      {comments?.map((el) => {
        return (
            <CommentItem key={el.commentId}>
              <div>
                <span>{el.author}</span>
                <span>{el.createdAt}</span>
              </div>
              <p>{el.descript}</p>
              <div>
                <LikeBox onClick={() => dispatch(__doCommentLikeThunk(el.commentId))} type="button">
                  ❤ {el.commentLikeCnt}
                </LikeBox>
                {nickname === el.author ? (<button onClick={() => dispatch(delCommemtThunk(el.commentId))}>삭제하기</button>):(
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
`;

const LikeBox = styled.button`
  border: 0;
  outline: 0;
  background-color: transparent;
`;
