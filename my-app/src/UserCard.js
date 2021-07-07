import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export default function UserCard(props) {
  return (
    <Container>
      <div>
        {props.followers.map((item) => (
          <div>
            <p>{item.login}</p>
            <img src={item.avatar_url} alt="follower"></img>
          </div>
        ))}
      </div>
    </Container>
  );
}
