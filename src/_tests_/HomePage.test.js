import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../Redux/store';
import HomePage from '../Components/pages/HomePage';

describe('Render HomePage component', () => {
  test('render HomePage', () => {
    const tree = renderer
      .create(
        <Router>
          <Provider store={store}>
            <HomePage />
          </Provider>
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
