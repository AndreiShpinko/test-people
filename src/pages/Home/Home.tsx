import { useState, useEffect } from "react";
import styled from "styled-components";

import Title from "../../components/ui/Title/Title";
import Subtitle from "../../components/ui/Subtitle/Subtitle";
import Loader from "../../components/simple/Loader";
import Container from "../../components/simple/Container";
import Card from "../../components/ordinary/Card/Card";
import Button from "../../components/ui/Button/Button";

import { useAlert } from "react-alert";

import Services from "../../core/services";

const Fade = require("react-reveal/Fade");

const Home = () => {
  const alert = useAlert();

  // empty array, array with data
  const [userList, setUserList] = useState<any>([]);

  const [gettingRequest, setGettingRequest] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const getRandomUsersFunc = () => {
    Services.getRandomUsers()
      .then((res) => res.data)
      .then(({ data }) => {
        if (data) {
          setUserList(data);
          setError(false);
        } else setError(true);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      })
      .finally(() => {
        setGettingRequest(false);
      });
  };

  useEffect(() => {
    getRandomUsersFunc();
  }, []);

  const handlerBtnReload = () => {
    setGettingRequest(true);
    getRandomUsersFunc();
  };

  useEffect(() => {
    if (error) alert.error("Sorry, we have an error");
  }, [error]);

  return (
    <Wrapper data-testid="page-home">
      {!userList.length && !error ? (
        <WrapperLoader>
          <Loader size={"big"} />
        </WrapperLoader>
      ) : (
        <Container>
          <Panel>
            <Button click={handlerBtnReload}>
              <Subtitle>Reload</Subtitle>
            </Button>
            <Fade duration={300} when={gettingRequest}>
              <Loader />
            </Fade>
          </Panel>

          <Fade duration={300} when={error}>
            <Title>Error</Title>
          </Fade>

          <Fade left opposite when={!gettingRequest && !error}>
            <List>
              {userList.map((userID: string) => {
                return (
                  <Item key={userID}>
                    <Card userID={userID} />
                  </Item>
                );
              })}
            </List>
          </Fade>
        </Container>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  overflow: hidden;
`;

const Panel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
`;

const WrapperLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const List = styled.ul`
  display: grid;
  column-gap: 10px;
  row-gap: 10px;
  grid-template-columns: repeat(5, 1fr);

  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Item = styled.li`
  aspect-ratio: 3/2;
`;

export default Home;
