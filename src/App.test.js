import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Header from './Components/Header/Header.js';
import Footer from './Components/Footer/Footer.js';
import About from './Components/About/About.js';
import DayCard from './Components/DayCard/DayCard.js';
import { mount, shallow, render as testing } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import data from './Components/data.json';
Enzyme.configure({ adapter: new Adapter() });

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe('Header renders', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Header debug />);
  
    expect(component).toMatchSnapshot();
  });
})

describe('Footer renders', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Footer debug />);
  
    expect(component).toMatchSnapshot();
  });
})

describe('About renders', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<About debug />);
  
    expect(component).toMatchSnapshot();
  });
})


describe('DayCard renders Correctly', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<DayCard data={data.data[0]} index= {0} />);
  
    expect(component).toMatchSnapshot();
  });
})

describe('DayCard renders Incorrectly', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<DayCard debug />);
  
    expect(component).toMatchSnapshot();
  });
})