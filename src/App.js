import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import { Provider } from 'react-redux';
import Nav from './Components/Navigation/nav';
import store from './Redux/store';
import CountryDetail from './Components/pages/DetailsPage';
import HomePage from './Components/pages/HomePage';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/country/:name" element={<CountryDetail />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
