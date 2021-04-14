import React from 'react';
import {shallow} from 'enzyme';

import Button from './button';

describe('<Button />', () => {
    it('Should call props.onClick when the button is clicked', () => {
        //jest.fn is a mocj function
        // const callback = jest.fn();
        // const wrapper = shallow(<Button onClick={callback} />);
        // wrapper.find('button').simulate('click');
        // expect(callback).toHaveBeenCalled();
    });
});
