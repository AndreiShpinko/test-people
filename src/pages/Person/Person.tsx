import { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
import { useAlert } from "react-alert";

import Title from "../../components/ui/Title/Title";
import Subtitle from "../../components/ui/Subtitle/Subtitle";
import Reference from "../../components/ui/Reference/Reference";
import Loader from "../../components/simple/Loader";
import Container from "../../components/simple/Container";

import { colors } from "../../core/constants";

import Services from "../../core/services";

const Fade = require("react-reveal/Fade");

const Person = () => {
  const { id } = useParams();
  const alert = useAlert();

  // false(while dont receive object), object
  const [user, setUser] = useState<any>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    Services.getUserByID(id)
      .then((res) => res.data)
      .then(({ data }) => {
        if (data) {
          setUser(data);
          setError(false);
        } else setError(true);
      })
      .catch((error) => {
        console.log(error, "Person Component Error");
        setError(true);
      });
  }, []);

  useEffect(() => {
    if (error) alert.error("Sorry, we have an error");
  }, [error]);

  const getRandomColor = () =>
    colors[Math.floor(Math.random() * colors.length)];

  let inner;

  if (error) {
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
    <Wrapper data-testid="page-person">
      {!user && !error ? (
        <WrapperLoader>
          <Loader size="big" />
        </WrapperLoader>
      ) : (
        <WrapperPerson color={getRandomColor()}>
          <Container>
            <Inner>
              <Fade>
                <LinkStyled to={"../"} data-testid="link-home">
                  <Subtitle>Home</Subtitle>
                </LinkStyled>
              </Fade>
              <Fade right>
                <PersonInfo>{inner}</PersonInfo>
              </Fade>
            </Inner>
          </Container>
        </WrapperPerson>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  overflow: hidden;
`;

const WrapperPerson = styled.div`
  ${({ color }) => `background: ${color};`}
`;

const WrapperLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const PersonInfo = styled.div`
  margin-top: 30px;
`;

const LinkStyled = styled(Link)`
  text-decoration: underline;
  color: #000;
`;

export default Person;
