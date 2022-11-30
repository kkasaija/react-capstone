import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FaSearchLocation } from 'react-icons/fa';
import { generate } from 'randomized-string';
import FetchStats, { GetStats } from '../../Redux/reducer';

function HomePage() {
  const CountryStore = useSelector((store) => store.details);
  const dispatch = useDispatch();

  useEffect(() => {
    if (CountryStore.length === 0) {
      FetchStats()
        .then((response) => dispatch(GetStats(response)));
    }
  }, []);

  let Africa = CountryStore.filter((item) => item.continent === 'Africa');
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const search = query.get('search') || '';
  Africa = Africa.filter((country) => country.country.includes(search));
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState(search);

  const filterSearch = (event) => {
    navigate(event.target.value ? `?search=${event.target.value}` : '');
    setSearchValue(event.target.value);
  };

  return (
    <div className="homePage">
      <form className="form">
        <div>
          <FaSearchLocation />
        </div>
        <div>
          <input className="input-search" type="text" value={searchValue} placeholder="Search Country..." onChange={filterSearch} />
        </div>
      </form>
      <ul className="dataUL">
        {
        Africa.map((country) => (
          <Link key={generate()} to={{ pathname: `/country/${country.country}` }}>
            <li className="countryDetails">
              <div className="details">
                <h1 className="countryName">
                  {country.country}
                </h1>
                <div className="data">
                  <h2 className="population">
                    Population:
                  </h2>
                  {' '}
                  <p className="number">
                    {country.population.toLocaleString()}
                  </p>
                </div>
              </div>
              <div>
                <img src={country.country_flag} alt="flag" className="flag" />
              </div>
            </li>
          </Link>
        ))
      }
      </ul>
    </div>
  );
}

export default HomePage;
