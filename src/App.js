import "./App.css";
import React from "react";
import Apicallfunc from "./components/Apicallfunc";

class App extends React.Component {
  state = {
    loading: true,
  };

  async componentDidMount() {
    let url = "https://api.randomuser.me/";
    let apiCall = await fetch(url);
    const data = await apiCall.json();
    this.setState({ person: data.results[0], loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>Still Loading...</div>;
    }

    if (!this.state.person) {
      return <div>Sorry!! Didn't get person.</div>;
    }

    return (
      <div className="App">
        <img src={this.state.person.picture.large} alt="Profile" />
        <div>
          {this.state.person.name.title} {this.state.person.name.first}{" "}
          {this.state.person.name.last}
        </div>
        <div>{this.state.person.gender}</div>
        <div>{this.state.person.email}</div>
        <br />
        <br />
        <br />
        <Apicallfunc />
      </div>
    );
  }
}

export default App;
