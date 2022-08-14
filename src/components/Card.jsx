import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { RESP } from "../response";

const Card = () => {
  console.log(RESP.API_POSTS.at(0).data.imgUrl);
  const resp = RESP.API_POSTS;
  return (
    <>
      {resp.map((el, index) => {
        return (
          <CardWrap key={index}>
            <CardImg src={el.data.imgUrl} alt="card image" />
            <Title>{el.data.title}</Title>
            <Text>{el.data.descript.substring(0, 30) + "..."}</Text>
            <Date>{el.data.createdAt.substring(0, 10).split("-").join(".")}</Date>
            <BottomBox>
              <Author>{el.data.author}</Author>
              <RLWrap>
                <Riple>{`💬 ${el.data.commentCnt}`}</Riple>
                <Like>{`❤ ${el.data.postLikeCnt}`}</Like>
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
  box-shadow: #1687a726 0px 2px 8px;
  &:hover {
    box-shadow: #1687a726 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;
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
