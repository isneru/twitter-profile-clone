import React from "react";

import StickyBox from "react-sticky-box";

import { Container, SearchWrapper, SearchInput, SearchIcon, Body } from "./styles";

import { List } from "../List";
import { FollowSuggestion } from "../FollowSuggestion";
import { News } from "../News";
import { RecentMedia } from "../RecentMedia";

export const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Search Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <RecentMedia />
          <List
            title="You might like"
            elements={[
              <FollowSuggestion name="Alexandre Gonçalves" nickname="AlexandreFPGoncalves" />,
              <FollowSuggestion name="Riot Games" nickname="riotgames" />,
              <FollowSuggestion name="Rocketseat" nickname="rocketseat" />,
            ]}
          />
          <List
            title="Trends for you"
            elements={[
              <News title="Trending in Portugal" text="Rocketseat Bootcamp" />,
              <News title="Gaming" text="League Of Legends" />,
              <News title="Business & finance" text="Amazon" />,
              <News title="Trending in Movies & TV" text="Squid Game" />,
              <News title="Trending in Television" text="#StrangerThings" />,
              <News title="Celebrities" text="#AmberHeardIsALiar" />,
              <News title="Sports" text="Max Verstappen" />,
            ]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};
