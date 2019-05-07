import React from 'react';
import { shallow } from 'enzyme';
import Standings from '../Standings';
import { findByAttr } from './utils';
import { mockSucces, mockError } from './mockData';

const setUp = (props={}) => { 
  const component = shallow(<Standings {...props} />);
  return component;
};

describe('Standings Component', () => {

  // In case of response succes, should render the StandingsTable
  describe('With standings result', () => {
    let wrapper;    
    beforeEach(() => {
      const props = {
        payload: mockSucces
      };
      wrapper = setUp(props);
    });

    it('Should render the StandingsTable table', () => {
      const standings = findByAttr(wrapper, 'StandingsTable');
      expect(standings.length).toBe(1);
    })
  });

  // In case of resposne error, should render the ErrorHandler component
  describe('With NO standings result', () => {
    let wrapper;    
    beforeEach(() => {
      const props = {
        payload: mockError
      };
      wrapper = setUp(props);
    });

    it('Should render the ErrorHandler component', () => {
      const standings = findByAttr(wrapper, 'ErrorHandler');
      expect(standings.length).toBe(1);
    })
  });
});
