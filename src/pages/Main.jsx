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
  margin: 60px auto 0;
  display: flex;
  /* justify-content: space-between; */
  max-width: 1200px;
  gap: 2.6%;
  flex-wrap: wrap;
  width: 100%;
`;

