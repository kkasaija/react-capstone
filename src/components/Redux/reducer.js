import axios from 'axios';

const statsUrl = 'https://disease.sh/v3/covid-19/countries';
const GET_STATISTICS = 'covid/StatisticsReducer/GET_STATS';

export const GetStatistics = (payload) => ({
  type: GET_STATISTICS,
  payload,
});

const initialState = [];

export const StatisticsReducer = (state = initialState,
  action = { type: 'action' }) => {
  switch (action.type) {
    case GET_STATISTICS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

const FetchStatistics = async () => {
  const statistics = [];
  const response = await axios.get(statsUrl);
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

    return statistics.push(covidData);
  });

  return statistics;
};

export default FetchStatistics;
