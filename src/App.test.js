import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux'
import store from './redux/store'
import { shallow } from 'enzyme';
import { Route } from "react-router-dom"
import { Header } from './components/common'
import { headerbarRoutes } from './utils/routes'

describe('Testing App Component', () => {
  let appWrapper;

  beforeEach(() => {
    appWrapper = shallow(<App store={store} />)
  })

  it('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}><App /></Provider>, div);
  });

  test('Renders App Component', () => {
    expect(appWrapper.length).toEqual(1)
  })

  test('Renders Header', () => {
    expect(appWrapper.find(Header).length).toEqual(1)
  })

  test('Renders main-container inside App', () => {
    expect(appWrapper.find('.main-container').length).toEqual(1)
  })

  test('Number of Routes should match with headerbarRoutes', () => {
    expect(appWrapper.find(Route).length).toEqual(headerbarRoutes.length + 1)
  })

  // test.skip('Renders No Match route', () => {
  //   const { getByText } = render(<App />);
  //   const linkElement = getByText(/No Match/i);
  //   expect(linkElement).toBeInTheDocument();
  // });
})


