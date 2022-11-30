import axios from 'axios';

const URL = 'https://disease.sh/v3/covid-19/countries';
const GET_STATS = 'covid/GET_STATS';
const initialState = [];

export const GetStats = (payload) => ({
  type: GET_STATS,
  payload,
});

export const StatsReducer = (state = initialState, action = { type: 'action' }) => {
  switch (action.type) {
    case GET_STATS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

const FetchStats = async () => {
  const stats = [];
  const response = await axios.get(URL);
  const responseData = response.data;

  responseData.map(({ countryInfo: { _id: id, flag }, ...data }) => {
    const covidData = {
      continent: data.continent,
      country: data.country,
      country_id: id,
      country_flag: flag,
      total_cases: data.cases,
      total_deaths: data.deaths,
      total_recovered: data.recovered,
      total_active: data.active,
      total_tests: data.tests,
      population: data.population,
      todays_cases: data.todayCases,
      todays_deaths: data.todayDeaths,
      todays_recovered: data.todayRecovered,
    };

    return stats.push(covidData);
  });

  return stats;
};

export default FetchStats;
