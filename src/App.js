import React, { Component } from "react";
import { fetchData } from "./api/index";
import Cards from "./components/Cards/cards";
import CountryPicker from "./components/CountryPicker/countryPicker";
import Chart from "./components/Chart/chart";
import GoogleMap from "./components/googleMap/googleMap";
import styles from "./App.module.css";

class App extends Component {
  state = {
    data: {},
    country: ""
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }
  handleCountryChange = async country => {
    //fetch the data
    const fetchedData = await fetchData(country);

    // set the state
    this.setState({ data: fetchedData, country });
  };
  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
        {/* <GoogleMap /> */}
      </div>
    );
  }
}

export default App;
