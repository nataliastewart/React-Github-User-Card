import React from "react";
import FollowersList from "./FollowersList";
import axios from "axios";
import UserCard from "./UserCard";

class App extends React.Component {
  constructor() {
    //first phase
    super();
    this.state = {
      username: "",
      person: {},
      followers: [],
    };
    console.log("constructor is running");
  }

  componentDidMount() {
    //fetching my data
    axios
      .get("https://api.github.com/users/nataliastewart")
      .then((response) => {
        console.log("DATA", response.data);
        this.setState({
          person: response.data,
        });
      })
      .catch((error) => {
        console.log("Error componentDidMount", error);
      });
    axios
      .get("https://api.github.com/users/nataliastewart/followers")
      .then((response) => {
        console.log("DATA", response.data);
        this.setState({
          followers: response.data,
        });
      })
      .catch((error) => {
        console.log("Error componentDidMount", error);
      });
  }

  render() {
    //Second phase
    console.log("rendering");
    console.log(this.state.followers);
    return (
      <div className="App">
        <FollowersList person={this.state.person} />

        <UserCard followers={this.state.followers} />
      </div>
    );
  }
}
export default App;
