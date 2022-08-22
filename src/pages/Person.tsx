import { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
import { useAlert } from "react-alert";

import Title from "../components/ui/Title";
import Subtitle from "../components/ui/Subtitle";
import Reference from "../components/ui/Reference";
import Loader from "../components/simple/Loader";
import Container from "../components/simple/Container";

import { colors } from "../core/constants";

import Services from "../core/services";

const Fade = require("react-reveal/Fade");

const Person = () => {
  const { id } = useParams();

  const [user, setUser] = useState<any>(false);

  useEffect(() => {
    Services.getUserByID(id)
      .then((res) => res.json())
      .then((res) => {
        if (res.data) setUser(res.data);
        else setUser(null);
      })
      .catch((error) => {
        console.log(error);
        setUser(null);
      });
  }, []);

  const alert = useAlert();

  useEffect(() => {
    if (user === null) alert.error("Sorry, we have an error");
  }, [user]);

  const getRandomColor = () =>
    colors[Math.floor(Math.random() * colors.length)];

  let inner;

  if (user === false)
    return (
      <WrapperLoader>
        <Loader styles={"width: 100px;"} />
      </WrapperLoader>
    );
  else if (user === null) {
    inner = <Title>Error</Title>;
  } else {
    const { firstName, lastName, age, gender, country } = user;

    inner = (
      <>
        <Title>{`${firstName} ${lastName}`}</Title>
        <Subtitle>{`${gender}, ${age}y.o.`}</Subtitle>

        <Reference source={`https://www.google.com/maps/search/${country}`}>
          <Subtitle styles={"display: inline-block;"}>{country}</Subtitle>
        </Reference>
      </>
    );
  }

  return (
    <Wrapper color={getRandomColor()}>
      <Container>
        <Inner>
          <Fade>
            <LinkStyled to={"../"}>
              <Subtitle>Home</Subtitle>
            </LinkStyled>
          </Fade>
          <Fade right>
            <PersonInfo>{inner}</PersonInfo>
          </Fade>
        </Inner>
      </Container>
    </Wrapper>
  );
};

const LinkStyled = styled(Link)`
  text-decoration: underline;
  color: #000;
`;

const WrapperLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Wrapper = styled.div`
  ${({ color }) => `background: ${color};`}
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const PersonInfo = styled.div`
  margin-top: 30px;
`;

export default Person;
