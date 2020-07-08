import React, { Component } from "react";
import Cards from "./components/Cards/cards";
import styles from "./App.module.css";
import { fetchData } from "./api/index";

class App extends Component {
  state = {
    data: {}
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }
  render() {
    const { data } = this.state;
    return (
      <div className={styles.container}>
        fetchData();
        <Cards data={data} />
      </div>
    );
  }
}

export default App;
