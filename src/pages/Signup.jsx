import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialState = {
    nickname: "",
    password: "",
    passwordConfirm: "",
    email: "",
  };

  let [pwChk, setPwChk] = useState(false);
  let [idChk, setIdChk] = useState(false);

  const [user, setUser] = useState(initialState);

  const onSignUpHandler = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  useEffect(() => {}, []);

  const onSubmitHandler = (event) => {};

  const onValidateHander = (event) => {};

  useEffect(() => {
    if (user.password.length < 8) {
      setPwChk(false);
    } else if (user.password.search(/\s/) != -1) {
      setPwChk(false);
      // } else if (num < 0 || eng < 0 || spe < 0) {
      //   setPwChk(false);
    } else if (user.password === null) {
      setPwChk(false);
    } else {
      setPwChk(true);
    }
  }, [user.password]);

  return (
    <AccountSection>
      <FormSection onSubmit={onSubmitHandler}>
        <h1>회원 가입</h1>
        <label htmlFor="id">
          <p>아이디</p>
          <div style={{ display: "flex" }}>
            <Input name="nickname" type="text" required placeholder="영문 / 숫자 조합, 8~20자" onChange={onSignUpHandler} />
            <ValidBtn type="button" onClick={onValidateHander}>
              중복 확인
            </ValidBtn>
          </div>
        </label>
        <label htmlFor="pw">
          <p>비밀번호</p>
          <Input name="password" required type="password" placeholder="비밀번호 영문/숫자 포함(8_20자) 작성해 주세요" onChange={onSignUpHandler} />
        </label>
        <label htmlFor="pw2">
          <p>비밀번호 확인</p>
          <Input name="passwordConfirm" type="password" required placeholder="비밀번호 한 번 더 입력해 주세요" onChange={onSignUpHandler} />
        </label>
        <label htmlFor="email">
          <p>이메일</p>
          <Input name="email" type="email" required placeholder="이메일을 형식에 맞게 입력해 주세요" onChange={onSignUpHandler} />
        </label>
        <Line />
        <BtnWrap>
          <UserBtn>뒤로 가기</UserBtn>
          <UserBtn type="submit">회원가입</UserBtn>
        </BtnWrap>
      </FormSection>
    </AccountSection>
  );
};

export default SignUp;

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
    text-align: left;
    margin-bottom: 40px;
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
  border: 2px solid #e6e3e3;
  border-radius: 6px;
  box-shadow: inset 0 1px 4px 0 rgb(64 60 67 / 16%);
  &:focus {
    outline: none;
    border-color: #666666;
  }
`;

const ValidBtn = styled.button`
  min-width: 60px;
  margin-left: 15px;
  margin-bottom: 20px;
  font-size: 10px;
  border-radius: 6px;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  background-color: #1687a7;
  color: white;
  border: none;
  &:hover {
    background-color: #276678;
  }
`;

const UserBtn = styled.button`
  width: 35%;
  background-color: #276678;
  color: white;
  border: none;
  cursor: pointer;
  height: 40px;
  border-radius: 6px;
  margin: 10px 0;
  transition: all 0.5s;
  &:hover {
    background-color: #1687a7;
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
