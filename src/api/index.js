import axios from "axios";
const url = "https://covid19.methdro.id/api";

export const fetchData = async () => {
  try {
    const {
      data: { comfirmed, recovered, deaths, lastUpdate }
    } = await axios.get(url);
    return { comfirmed, recovered, deaths, lastUpdate };
  } catch (error) {}
};

fetchData();
