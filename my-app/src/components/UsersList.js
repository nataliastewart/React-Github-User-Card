import React from "react";

//Things i want from the data to display on the browser: avatar_url, name, login

export default function UsersList(props) {
  return (
    <div>
      <h3>{props.profile.name}</h3>
      <p>Username: {props.profile.login}</p>
      <img src={props.profile.avatar_url} alt="profile" />
      <div>
        {props.followers.map((item) => (
          <div key={item.id} className="follower-div">
            <p>Username: {item.login}</p>
            <img src={item.avatar_url} alt="follower face" />
          </div>
        ))}
      </div>
    </div>
  );
}
