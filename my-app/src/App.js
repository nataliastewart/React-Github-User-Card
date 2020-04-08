import React from "react";
import FollowersList from "./FollowersList";
import axios from "axios";
import UserCard from "./UserCard";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      followers: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/nataliastewart")
      .then((response) => {
        console.log("DATA", response.data);
        this.setState({
          followers: response.data.login,
        }).catch((error) => {
          console.log("Error componentDidMount", error);
        });
      });
  }

  render() {
    return (
      <div className="App">
        {/* <FollowersList followers={this.state.followers} /> */}
        <h3>
          {props.followers.map((item) => (
            <UserCard key={item.id} item={item} />
          ))}
        </h3>
      </div>
    );
  }
}
export default App;
