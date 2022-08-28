import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Title from "../../ui/Title/Title";
import Loader from "../../simple/Loader";

import Services from "../../../core/services";

import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { useAlert } from "react-alert";

import { color_blue } from "../../../core/constants";

type CardProps = {
  userID: string;
  initialInView?: boolean;
};

const Card = ({ userID, initialInView = false }: CardProps) => {
  // false, string
  const [firstName, setFirstName] = useState<any>(false);
  const [error, setError] = useState<boolean>(false);

  const navigate = useNavigate();
  const alert = useAlert();

  const { ref, inView } = useInView({
    threshold: 0,
    initialInView: initialInView,
  });

  useEffect(() => {
    if (inView) {
      Services.getUserByID(userID)
        .then((res) => res.data)
        .then(({ data }) => {
          if (data) setFirstName(data.firstName);
          else setError(true);
        })
        .catch((error) => {
          console.log(error, "card");
          setError(true);
        });
    }
  }, [inView]);

  let inner = (
    <div data-testid="firstname">
      <Title>{firstName}</Title>
    </div>
  );

  if (error) {
    inner = (
      <div data-testid="error">
        <Title>Error</Title>
      </div>
    );
  } else if (!firstName && !error) {
    inner = (
      <div data-testid="loader">
        <Loader color="#fff" />
      </div>
    );
  }

  const handlerCardClick = () => {
    if (error) {
      alert.error("Sorry, you can't use it. Error");
    } else if (!firstName && !error) {
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
      data-testid='card'
    >
      {inner}
    </CardWrapper>
  );
};

interface LinkWrapperProps {
  ref: (instance: HTMLDivElement | null) => void;
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
