import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Title from "../ui/Title";
import Loader from "../simple/Loader";

import Services from "../../core/services";

import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { useAlert } from "react-alert";

import { color_blue } from "../../core/constants";

type CardProps = {
  userID: string;
};

const Card = ({ userID }: CardProps) => {
  // false - while dont see card
  // null - error
  // string - success
  const [firstName, setFirstName] = useState<any>(false);

  const navigate = useNavigate();
  const alert = useAlert();

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (firstName === false && inView) {
      Services.getUserByID(userID)
        .then((res) => res.json())
        .then((res) => {
          if (res.data) setFirstName(res.data.firstName);
          else setFirstName(null);
        })
        .catch((error) => {
          console.log(error, "card");
          setFirstName(null);
        });
    }
  }, [inView]);

  let inner;
  if (firstName === null) {
    inner = <Title>Error</Title>;
  } else if (!firstName) {
    inner = <Loader color="#fff" />;
  } else {
    inner = <Title>{firstName}</Title>;
  }

  const handlerCardClick = () => {
    if (firstName === null) {
      alert.error("Sorry, you can't use it. Error");
    } else if (!firstName) {
      alert.error("Please wait for loading");
    } else {
      navigate(`../person/${userID}`);
    }
  };

  return (
    <CardWrapper
      ref={ref}
      onClick={handlerCardClick}
      opacity={firstName ? 1 : 0}
    >
      {inner}
    </CardWrapper>
  );
};

interface LinkWrapperProps {
  // ref: React.RefObject<HTMLInputElement>;
  ref: (instance: HTMLDivElement | null) => void;
  // ref: ;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  opacity: number;
}

const CardWrapper = styled.div<LinkWrapperProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
  padding: 5px;
  color: #fff;
  background: ${color_blue};
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;
  opacity: ${({ opacity }) => (opacity ? "1" : "0.6")};
`;

export default Card;
