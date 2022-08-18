import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { __getPostDetailThunk } from "../redux/modules/detailSlice";
import { delPostThunk} from "../redux/modules/postSlice";
import DetailPageModal from "../components/DetailPageModal";

const Detail = () => {
  const {id} = useParams();
  const post = useSelector((state) => state.posts.posts);
  const like = useSelector((state) => state.like)
  console.log(like)
  console.log(post.id)
  console.log(post)
  console.log(id)
  
  const [postLike, setPostLike] = useState()
  const [commentLike, setCommentLike] = useState()

  const likeInfo = useSelector((state) => state.like)
  console.log(likeInfo)

  const postLikehandler = async() => {
    // if (likeInfo)
  }

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(__getPostDetailThunk(id));
  }, [dispatch, id]);

  const [modalOn, setModalOn] = useState(false);
  
  return(
    <>
      <DetailWrap>
        <DetailBox >
          <h1>{post?.title}</h1>
          <img src={post?.imgUrl} alt="" />
          <p>{post?.descript}</p>
          <BtnGroup>
            <LikeBox onClick={postLikehandler} type="button">❤</LikeBox>

            <BtnBox>
              <button  
              type="button"
              onClick={() => {
                navigate(-1);
              }}>뒤로가기</button>
              <button onClick={() => dispatch(delPostThunk(id))}>삭제하기</button>
              <button onClick={() => setModalOn(true)}>정비하기</button>
            </BtnBox>
          </BtnGroup>
        </DetailBox>
      </DetailWrap>
      <DetailPageModal
        show={modalOn}
        id={id}
        setShow={setModalOn}
        onHide={() => setModalOn(false)}
      >
        {" "}
      </DetailPageModal>
    </>
  )

};

export default Detail;

const DetailWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const DetailBox = styled.div`
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