import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { createUser } from "../redux/modules/userSlice";

const SignUp = () => {
  const initialState = {
    nickname: "",
    password: "",
    passwordConfirm: "",
    email: "",
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  let [idChk, setIdChk] = useState(false);
  let [pwChk, setPwChk] = useState(false);
  let [emChk, setEmChk] = useState(false);

  let [validate, setValidate] = useState(false);

  const [user, setUser] = useState(initialState);

  console.log(user);

  const onSignUpHandler = (event) => {
    // console.log(event.target.value);
    // console.log(event.target.name);
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  // // 아이디 유효성 검사
  const regId = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{3,12}$/;
  useEffect(() => {
    if (regId.test(user.nickname)) {
      setIdChk(true);
    } else {
      setIdChk(false);
    }
  }, [user.nickname]);

  // // 비밀번호 유효성 검사
  const regPw = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/;
  useEffect(() => {
    if (regPw.test(user.password)) {
      setPwChk(true);
    } else {
      setPwChk(false);
    }
  }, [user.password]);

  // 이메일 유효성 검사
  const regEmail = /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;
  useEffect(() => {
    if (regEmail.test(user.email)) {
      setEmChk(true);
    } else {
      setEmChk(false);
    }
  }, [user.email]);




  const submitUserInfo = () => {
    if (idChk === false || pwChk === false || emChk === false) {
      alert("아이디, 비밀번호, 이메일을 형식에 맞게 입력해주세요.");
    } else {
      dispatch(
        createUser({
          nickname: user.nickname,
          password: user.password,
          passwordConfirm: user.passwordConfirm,
          email: user.email,
        })
      );
    }
  };

  const onValidateHander = () => {
    console.log(idChk)
    console.log(user.nickname)
  };

  return (
    <AccountSection>
      <FormSection onSubmit={submitUserInfo}>
        <h1>회원 가입</h1>
        <label>
          <p>아이디</p>
          <div style={{ display: "flex" }}>
            <Input value={user.nickname} name="nickname" type="text" required placeholder="영문 / 숫자 조합, 3~12자" onChange={onSignUpHandler} />
            <ValidBtn type="button" onClick={onValidateHander}>
              중복 확인
            </ValidBtn>
          </div>
          <Warn>
            {!idChk ? (
              user.nickname === "" ? (
                <div style={{ color: "gray" }}>아이디 영문/숫자 반드시 포함(3~12자)</div>
              ) : (
                <div style={{ color: "red" }}>아이디가 형식에 맞지 않습니다.</div>
              )
            ) : (
              <div style={{ color: "blue" }}>올바른 아이디 입니다.</div>
            )}
          </Warn>
        </label>
        <label>
          <p>비밀번호</p>
          <Input value={user.password} name="password" required type="password" placeholder="비밀번호 영문/숫자 포함(8~20자)" onChange={onSignUpHandler} />
          <Warn>
            {!pwChk ? (
              user.password === "" ? (
                <div style={{ color: "gray" }}>비밀번호 영문/숫자 반드시 포함(8~20자)</div>
              ) : (
                <div style={{ color: "red" }}>비밀번호가 형식에 맞지 않습니다.</div>
              )
            ) : (
              <div style={{ color: "blue" }}>올바른 비밀번호 입니다.</div>
            )}
          </Warn>
        </label>
        <label>
          <p>비밀번호 확인</p>
          <Input
            value={user.passwordConfirm}
            name="passwordConfirm"
            type="password"
            required
            placeholder="비밀번호를 한 번 더 입력해 주세요"
            onChange={onSignUpHandler}
          />
          <Warn>{user.password !== user.passwordConfirm ? <div style={{ color: "red" }}>비밀번호가 일치 하지 않습니다.</div> : ""}</Warn>
        </label>
        <label>
          <p>이메일</p>
          <Input value={user.email} name="email" type="email" required placeholder="이메일을 형식에 맞게 입력해 주세요" onChange={onSignUpHandler} />
          <Warn>
            {!emChk ? (
              user.email === "" ? (
                ""
              ) : (
                <div style={{ color: "red" }}>잘못된 이메일 형식입니다.</div>
              )
            ) : (
              <div style={{ color: "blue" }}>올바른 이메일 형식입니다.</div>
            )}
          </Warn>
        </label>
        <Line />
        <BtnWrap>
          <UserBtn
            onClick={() => {
              navigate("/");
            }}
          >
            뒤로 가기
          </UserBtn>
          {
            validate ? (<UserBtn type="submit">회원가입</UserBtn>
              ) : (
                <GrayBtn onClick={()=>{ alert("아이디 중복 검사를 해주세요.") }} type="button">회원가입</GrayBtn>
            )
          }
          
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
  margin-bottom: 5px;
  border: 2px solid #e6e3e3;
  border-radius: 6px;
  box-shadow: inset 0 1px 4px 0 rgb(64 60 67 / 16%);
  &:focus {
    outline: none;
    border-color: #666666;
  }
`;

const Warn = styled.div`
  margin-bottom: 15px;
  font-size: 12px;
`;

const ValidBtn = styled.button`
  min-width: 60px;
  margin-left: 15px;
  margin-bottom: 5px;
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

const GrayBtn = styled.button`
  width: 35%;
  background-color: #788c91;
  color: white;
  border: none;
  cursor: pointer;
  height: 40px;
  border-radius: 6px;
  margin: 10px 0;
  transition: all 0.5s;
`;

const BtnWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const Line = styled.hr`
  width: 100%;
  border: solid gray 1px;
  margin-top: 15px;
  margin-bottom: 15px;
`;
