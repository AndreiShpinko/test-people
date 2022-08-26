import styled from "styled-components";

type LoaderProps = {
  color?: string;
  size?: string;
};

const Loader = ({ color = "#000", size = "normal" }: LoaderProps) => {
  return (
    <LoaderWrapper color={color} size={size}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </LoaderWrapper>
  );
};

interface LinkWrapperProps {
  color: string;
  size: string;
}

const LoaderWrapper = styled.div<LinkWrapperProps>`
  display: inline-block;
  position: relative;
  aspect-ratio: 2;
  ${({ size }) => {
    if (size === "normal") return "width: 80px;";
    else if (size === "big") return "width: 100px;";
  }}

  div {
    position: absolute;
    top: 41%;
    width: 16%;
    height: 32%;
    border-radius: 50%;
    background: ${({ color }) => color};
    animation-timing-function: cubic-bezier(0, 1, 1, 0);

    &:nth-child(1) {
      left: 10%;
      animation: lds-ellipsis1 0.6s infinite;
    }
    &:nth-child(2) {
      left: 10%;
      animation: lds-ellipsis2 0.6s infinite;
    }
    &:nth-child(3) {
      left: 40%;
      animation: lds-ellipsis2 0.6s infinite;
    }
    &:nth-child(4) {
      left: 70%;
      animation: lds-ellipsis3 0.6s infinite;
    }
  }

  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(180%, 0);
    }
  }
`;

export default Loader;
