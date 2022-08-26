import React from "react";
import styled from "styled-components";

type SubtitleProps = {
  children: string | React.ReactNode;
  styles?: string;
};

const Subtitle = ({ children, styles }: SubtitleProps) => {
  return <SubtitleWrapper styles={styles}>{children}</SubtitleWrapper>;
};

interface SubtitleWrapperProps {
  styles?: string;
}

const SubtitleWrapper = styled.p<SubtitleWrapperProps>`
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  text-decoration: inherit;

  @media screen and (max-width: 991px) {
    font-size: 20px;
  }
  @media screen and (max-width: 767px) {
    font-size: 16px;
  }
  ${({ styles }) => styles}
`;

export default Subtitle;
