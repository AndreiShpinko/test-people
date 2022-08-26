import React from "react";
import styled from "styled-components";

type TitleProps = {
  children: string | React.ReactNode;
  styles?: string;
};

const Title = ({ children, styles }: TitleProps) => {
  return <TitleWrapper styles={styles}>{children}</TitleWrapper>;
};

interface TitleWrapperProps {
  styles?: string;
}

const TitleWrapper = styled.p<TitleWrapperProps>`
  font-family: "Poppins", sans-serif;
  display: inline-block;
  font-size: 36px;

  @media screen and (max-width: 991px) {
    font-size: 30px;
  }
  @media screen and (max-width: 767px) {
    font-size: 24px;
  }
  ${(props) => props.styles}
`;

export default Title;
