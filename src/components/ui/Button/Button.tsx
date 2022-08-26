import React from "react";
import styled from "styled-components";

type ButtonProps = {
  children: string | React.ReactNode;
  click?: () => void;
};

const Button = ({ children, click }: ButtonProps) => {
  return <BtnWrapper onClick={click}>{children}</BtnWrapper>;
};

interface BtnWrapperProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const BtnWrapper = styled.button<BtnWrapperProps>`
  border-radius: 10px;
  padding: 8px 24px;
  border: 0;
  cursor: pointer;
  color: #000;
`;

export default Button;
