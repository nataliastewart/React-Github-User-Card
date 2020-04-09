import React from "react";

export default function UserCard(props) {
  return (
    <div>
      {props.followers.map((item) => (
        <div>
          <p>{item.login}</p>
          <img src={item.avatar_url} alt="follower"></img>
        </div>
      ))}
    </div>
  );
}
