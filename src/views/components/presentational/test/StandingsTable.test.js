import React from 'react';
import { shallow } from 'enzyme';
import StandingsTable from '../StandingsTable';
import { mockSucces } from './mockData';

const setUp = (props={}) => { 
  const component = shallow(<StandingsTable {...props} />);
  return component;
};

describe('Standings Component', () => {

  // In case of response succes, should render Material UI table.
  describe('With standings result', () => {
    let wrapper;    
    beforeEach(() => {
      const props = {
        dataTable: mockSucces.standings[0].table,
        competitionInfo: mockSucces.competition
          ? mockSucces
          : null
      };
      wrapper = setUp(props);
    });

    it('Should render the Table with the squads standings', () => {
      expect(wrapper.find('span').text()).toEqual('Série A - On going');
    })
  });

});
