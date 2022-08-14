import React from "react";
import styled from "styled-components";
import Card from "../components/Card";


const Main = () => {
  return (
    <CardList>
      <Card/>
    </CardList>
  );
};

export default Main;

const CardList = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
`
