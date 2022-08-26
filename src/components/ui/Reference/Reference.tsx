import React from "react";
import styled from "styled-components";

type ReferenceProps = {
  children: React.ReactNode;
  source?: string;
  styles?: string;
};

const Reference = ({ children, source = "#", styles }: ReferenceProps) => {
  return (
    <LinkWrapper href={source} styles={styles}>
      {children}
    </LinkWrapper>
  );
};

interface LinkWrapperProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  styles?: string;
}

const LinkWrapper = styled.a<LinkWrapperProps>`
  text-decoration: underline;
  cursor: pointer;
  color: inherit;
  ${({ styles }) => styles}
`;

export default Reference;
