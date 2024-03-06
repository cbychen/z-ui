import React from 'react';

import {mount} from 'enzyme'
import Button from '../Button';
describe('Name of the group', () => {
  
  it('mount correctly', () => {
    expect(()=>mount(<Button >mount</Button>)).not.toThrow();
  });
});