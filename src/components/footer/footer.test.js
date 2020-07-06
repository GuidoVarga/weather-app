import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Footer from './Footer';
configure({ adapter: new Adapter() });

describe('<Footer/>', () => {
    it('allow us set name prop', () => {
        const wrapper = mount(<Footer name="cx"/>);
        expect(wrapper.props().name).to.equal('cx');
    });
});