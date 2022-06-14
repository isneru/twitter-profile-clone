import React from "react";

import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage, EditButton } from "./styles";

import { Feed } from "../Feed";

export const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Edit Profile</EditButton>

        <h1>Diogo Nogueira</h1>
        <h2>@isneru</h2>

        <p>
          Developer at{" "}
          <a href="https://github.com/isneru" target="_blank">
            @Home
          </a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Porto, Portugal
          </li>
          <li>
            <CakeIcon />
            Born January 19, 2003
          </li>
        </ul>

        <Followage>
          <span>
            <strong>650 </strong> Following
          </span>
          <span>
            <strong>71 </strong> Followers
          </span>
        </Followage>
      </ProfileData>
      <Feed />
    </Container>
  );
};
