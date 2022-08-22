import React from "react";
import styled from "styled-components";

type ButtonProps = {
  children: string | React.ReactNode;
  click?: () => void;
  styles?: string;
};


const Button = ({ children, click, styles }: ButtonProps) => {
  return (
    <BtnWrapper onClick={click} styles={styles}>
      {children}
    </BtnWrapper>
  );
};

interface BtnWrapperProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  styles?: string;
}

const BtnWrapper = styled.button<BtnWrapperProps>`
  border-radius: 10px;
  padding: 8px 24px;
  border: 0;
  cursor: pointer;
  ${({ styles }) => styles}
`;

export default Button;
