import React from "react";
import styled from "styled-components";

type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return <Wrap>{children}</Wrap>;
};

const Wrap = styled.div`
  width: 100%;
  max-width: 1320px;
  padding: 16px;
  margin: 0 auto;

  @media screen and (max-width: 1399px) {
    max-width: 1140px;
  }
  @media screen and (max-width: 1199px) {
    max-width: 960px;
  }
  @media screen and (max-width: 991px) {
    max-width: 720p;
  }
  @media screen and (max-width: 767px) {
    max-width: 540px;
    padding: 8px;
  }
  @media screen and (max-width: 480px) {
    max-width: none;
  }
`;

export default Container;
