import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

// const cardImg = styled.img`
//   width: 30px;
//   border-radius: 30px;
// `;

export default function FollowersList(props) {
  return (
    <Container>
      <div>
        <h4>{props.person.login}</h4>
        <img src={props.person.avatar_url} alt="follower"></img>
      </div>
    </Container>
  );
}
