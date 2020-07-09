import React, { Component } from "react";
import { fetchData } from "./api/index";
import Cards from "./components/Cards/cards";
import Chart from "./components/Chart/chart";
import styles from "./App.module.css";

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
        <Cards data={data} />
        <Chart />
      </div>
    );
  }
}

export default App;
