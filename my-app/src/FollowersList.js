import React from "react";
import UserCard from "./UserCard";

export default function FollowersList(props) {
  return (
    <div>
      <h4>{props.followers.login}</h4>
      <img src={props.followers.avatar_url} alt="follower"></img>
    </div>
  );
}

{
  /* // <UserCard key={item.id} item={item} /> */
}
