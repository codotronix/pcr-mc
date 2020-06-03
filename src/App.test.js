import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';
import { shallow } from 'enzyme';
import { Route } from "react-router-dom"
import { Header } from './components/common'
import { headerbarRoutes } from './utils/routes'

describe('Testing App Component', () => {

  it('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  test('Renders App Component', () => {
    const appWrapper = shallow(<App />)
    expect(appWrapper.length).toEqual(1)
  })

  test('Renders Header', () => {
    const appWrapper = shallow(<App />)
    expect(appWrapper.find(Header).length).toEqual(1)
  })

  test('Renders main-container inside App', () => {
    const appWrapper = shallow(<App />)
    expect(appWrapper.find('.main-container').length).toEqual(1)
  })

  test('Number of Routes should match with headerbarRoutes', () => {
    const appWrapper = shallow(<App />)
    expect(appWrapper.find(Route).length).toEqual(headerbarRoutes.length + 1)
  })

  test('Renders No Match route', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/No Match/i);
    expect(linkElement).toBeInTheDocument();
  });


})


