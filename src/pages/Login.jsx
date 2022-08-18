import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/modules/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const initialState = {
    nickname: "",
    password: "",
  };
  const [member, setMember] = useState(initialState);

  // console.log(member)

  const onChangeHandler = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);
    const { name, value } = event.target;
    setMember({ ...member, [name]: value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(loginUser({
      nickname: member.nickname,
      password: member.password,
    }));
  };

  return (
    <AccountSection>
      <FormSection onSubmit={onSubmitHandler}>
        <h1 style={{color:'#1363df'}}>운하99</h1>
        <label >
          <p>아이디</p>
          <Input value={member.nickname} name="nickname" type="text" placeholder="아이디를 입력해주세요" onChange={onChangeHandler} />
        </label>
        <label >
          <p>비밀번호</p>
          <Input value={member.password} name="password" type="password" placeholder="비밀번호를 입력해 주세요" onChange={onChangeHandler} />
        </label>
        <Line />
        <BtnWrap>
          <UserBtn type="button" onClick={() => navigate("/signup")}>회원가입</UserBtn>
          <UserBtn>로그인</UserBtn>
        </BtnWrap>
      </FormSection>
    </AccountSection>
  );
};

export default Login;

const AccountSection = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormSection = styled.form`
  box-shadow: 0 2px 5px 1px rgb(64 60 67 / 16%);
  max-width: 450px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  padding: 15px 0;
  h1 {
    font-family: "Black Han Sans", sans-serif;
    margin-bottom: 40px;
    font-weight: normal;
  }
  label {
    width: 80%;
  }

  label > p {
    margin: 5px 0;
    text-align: left;
  }
`;

const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  margin-bottom: 20px;
  box-shadow: inset 0 1px 4px 0 rgb(64 60 67 / 16%);
  border: 2px solid #e6e3e3;
  border-radius: 6px;
  &:focus {
    outline: none;
    border-color: #666666;
  }
`;

const UserBtn = styled.button`
  width: 35%;
  background-color: #1363df;
  color: white;
  border: none;
  cursor: pointer;
  height: 40px;
  border-radius: 6px;
  margin: 10px 0;
  transition: all 0.5s;
  &:hover {
    background-color: #193f7d;
  }
`;

const BtnWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const Line = styled.hr`
  width: 100%;
  border: solid gray 1px;
  margin-bottom: 15px;
`;
