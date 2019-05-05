import React from 'react';
import { shallow } from 'enzyme';
import Selector from '../Selector';

const setUp = (props={}) => {
  const component = shallow(<Selector {...props} />);
  return component;
};

describe('Presentational Selector Component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('Should render the FormControl', () => {
    const FormControl = component.find('WithStyles(FormControl)');
    expect(FormControl.length).toBe(1);
  });
  it('Should render the TextField', () => {
    const FormControl = component.find('TextField');
    expect(FormControl.length).toBe(1);
  });
});
