import React from "react";
import styled from "styled-components";
import Card from "../components/Card";
import HeroImage from "../components/HeroImage";

const Main = () => {
  return (
      <CardList>
        <Card />
      </CardList>
  );
};

export default Main;

const CardList = styled.div`
  margin-top: 60px;
  display: flex;
  /* justify-content: space-between; */
  gap: 2.6%;
  flex-wrap: wrap;
  width: 100%;
`;

