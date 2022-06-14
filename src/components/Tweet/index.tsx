import React from "react";

import { Container, Retweeted, RetweetedIcon, Body, Avatar, Content, Header, Dot, Description, ImageContent, Icons, Status, CommentIcon, RetweetIcon, LikeIcon } from "./styles";

export const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RetweetedIcon />
        You Retweeted
      </Retweeted>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>Diogo Nogueira</strong>
            <span>@isneru</span>
            <Dot />
            <time>Jun 14</time>
          </Header>

          <Description>Coding is fun!</Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              41
            </Status>
            <Status>
              <RetweetIcon />
              17
            </Status>
            <Status>
              <LikeIcon />
              999
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};
