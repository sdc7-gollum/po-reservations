/* eslint-disable no-console */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';

import Reservation from '../../client/Reservation.jsx';

describe('<Reservation /> sans prop information', () => {
  const shell = shallow(<Reservation />);
  // console.log(instance);
  // instance.handleSubmit = jest.fn();

  it('should be the same as the snapshot', () => {
    expect(shell.html()).toMatchSnapshot();
  });

  it('should have a Submit button', () => {
    expect(shell.find('button[type="submit"]').length).toBe(1);
  });

  it('should have two calendar inputs', () => {
    expect(shell.find('input[type="date"]').length).toBe(2);
  });

  it('should have three labels', () => {
    expect(shell.find('label').length).toBe(3);
  });
});
