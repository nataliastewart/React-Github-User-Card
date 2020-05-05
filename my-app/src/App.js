import React from "react";
import "./App.css";
import UsersList from "./components/UsersList";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor() {
    //first phase
    super();
    this.state = {
      profile: {},
      followers: [],
    };
    console.log("Constructor is running");
  }

  componentDidMount() {
    //fetching data here
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://api.github.com/users/nataliastewart"
      )
      .then((res) =>
        // console.log("response: ", res)
        this.setState({
          profile: res.data,
        })
      )
      .catch((err) =>
        console.log("(componentDidMount)Could not fetch the data:", err)
      );
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://api.github.com/users/nataliastewart/followers"
      )
      .then((res) => {
        // console.log("Followers data:", res);
        this.setState({
          followers: res.data,
        });
      })
      .catch((err) => {
        console.log("Followers api error:", err);
      });
  }

  render() {
    return (
      <div className="App">
        <UsersList
          profile={this.state.profile}
          followers={this.state.followers}
        />
      </div>
    );
  }
}

export default App;
