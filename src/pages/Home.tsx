import { useEffect } from "react";
import styled from "styled-components";

import Title from "../components/ui/Title";
import Subtitle from "../components/ui/Subtitle";
import Loader from "../components/simple/Loader";
import Container from "../components/simple/Container";
import Card from "../components/ordinary/Card";
import Button from "../components/ui/Button";

import { useAlert } from "react-alert";

const Fade = require("react-reveal/Fade");

type HomeProps = {
  userList: any;
  showList: any;
  handlerBtnReload: () => void;
};

const Home = ({ userList, showList, handlerBtnReload }: HomeProps) => {
  const alert = useAlert();

  useEffect(() => {
    if (userList === null) alert.error("Sorry, we have an error");
  }, [userList]);

  if (userList === false) {
    return (
      <WrapperLoader>
        <Loader styles={"width: 100px;"} />
      </WrapperLoader>
    );
  }

  return (
    <Wrapper>
      <Container>
        <Panel>
          <Button click={handlerBtnReload}>
            <Subtitle>Reload</Subtitle>
          </Button>
          <Fade duration={300} when={!showList && userList}>
            <Loader />
          </Fade>
        </Panel>

        <Fade duration={300} when={userList === null}>
          <Title>Error</Title>
        </Fade>

        {userList && (
          <Fade left opposite when={showList}>
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
        )}
      </Container>
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
