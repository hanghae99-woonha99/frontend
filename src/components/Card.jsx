import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { RESP } from "../response";

const Card = () => {

  const resp = RESP.POSTS.data;
  console.log(resp)
  return (
    <>
      {resp.map((el) => {
        return (
          <CardWrap key={el.postId}>
            <CardImg src={el.imgUrl} alt="card image" />
            <Title>{el.title}</Title>
            <Text>{el.descript.substring(0, 30) + "..."}</Text>
            <Date>{el.createdAt.substring(0, 10).split("-").join(".")}</Date>
            <BottomBox>
              <Author>{el.author}</Author>
              <RLWrap>
                <Riple>{`💬 ${el.commentCnt}`}</Riple>
                <Like>{`❤ ${el.postLikeCnt}`}</Like>
              </RLWrap>
            </BottomBox>
          </CardWrap>
        );
      })}
    </>
  );
};

export default Card;

const CardWrap = styled.article`
  width: 23%;
  height: 380px;
  border-radius: 5px;
  margin-bottom: 30px;
  cursor: pointer;

  // 그림자 효과
  transition: all 0.5s;
  box-shadow: #1688a792 0px 2px 8px;
  &:hover {
    box-shadow: #1687a726 0px 1px 4px, #1688a7 0px 0px 0px 3px;
  }
`;

const CardImg = styled.img`
  width: 97%;
  height: 45%;

  object-fit: cover;
  padding: 3px;
`;

const Title = styled.div`
  font-weight: bold;
  padding: 15px 15px 0 15px;
`;
const Text = styled.div`
  padding: 15px;
  position: relative;
`;
const Date = styled.div`
  padding: 5px 15px 0px 15px;
  font-size: 12px;
  color: gray;
`;
const BottomBox = styled.div`
  padding: 5px;
  display: flex;
  justify-content: space-between;
`;
const Author = styled.span`
  padding: 5px 10px;
`;

const RLWrap = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Riple = styled.span`
  padding: 5px;
`;
const Like = styled.span`
  padding: 5px;
`;
