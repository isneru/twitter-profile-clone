import React from "react";

import { Container, Topside, Logo, MenuButton, HomeIcon, BellIcon, EmailIcon, FavoriteIcon, ProfileIcon, PencilIcon, Botside, Avatar, ProfileData, ExitIcon } from "./styles";

import Button from "../Button";

export const MenuBar: React.FC = () => {
  return (
    <Container>
      <Topside>
        <Logo />

        <MenuButton>
          <HomeIcon />
          <span>Home</span>
        </MenuButton>
        <MenuButton>
          <BellIcon />
          <span>Notifications</span>
        </MenuButton>
        <MenuButton>
          <EmailIcon />
          <span>Messages</span>
        </MenuButton>
        <MenuButton>
          <FavoriteIcon />
          <span>Favorites</span>
        </MenuButton>
        <MenuButton className="active">
          <ProfileIcon />
          <span>Profile</span>
        </MenuButton>

        <Button>
          <span>Tweet</span>
          <PencilIcon />
        </Button>
      </Topside>

      <Botside>
        <Avatar />
        <ProfileData>
          <strong>Diogo Nogueira</strong>
          <span>@isneru</span>
        </ProfileData>

        <ExitIcon />
      </Botside>
    </Container>
  );
};
