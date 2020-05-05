import React from "react";

//Things i want from the data to display on the browser: avatar_url, name, login

export default function UsersList(props) {
  return (
    <div>
      <h3>{props.profile.name}</h3>
      <p>Username: {props.profile.login}</p>
      <img src={props.profile.avatar_url} alt="profile" />
    </div>
  );
}
