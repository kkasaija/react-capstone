import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../Redux/store';
import Nav from '../Components/Navigation/nav';

describe('Render components', () => {
  test('render Nav', () => {
    const tree = renderer
      .create(
        <Router>
          <Provider store={store}>
            <Nav />
          </Provider>
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
