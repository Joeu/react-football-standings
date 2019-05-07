import React from 'react';
import { shallow } from 'enzyme';
import Selector from '../Selector';
import { findByAttr } from './utils';

const setUp = (props={}) => {
  const component = shallow(<Selector {...props} />);
  return component;
};

// Check if Components are rendering correctly by tag checking.
describe('Selector Component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('Should render the FormControl', () => {
    const formControl = findByAttr(component, 'WithStyles(FormControl)');
    expect(formControl.length).toBe(1);
  });
  it('Should render the TextField', () => {
    const textField = findByAttr(component, 'TextField');
    expect(textField.length).toBe(1);
  });

});
