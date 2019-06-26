import React from 'react'
import ReactDOM from 'react-dom'
import { shallow, mount} from 'enzyme'
import toJson from 'enzyme-to-json'
import Accordion from './Accordion';

describe ('Accordion', () => {

    const sections = [
        {
          title: 'Section 1',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        },
        {
          title: 'Section 2',
          content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
        },
        {
          title: 'Section 3',
          content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
        },
      ]
      // e.g. <Accordion sections={sections} />


      it('Renders without errors', () =>{
          const div = document.createElement('div');
          ReactDOM.render(<Accordion />, div);
          ReactDOM.unmountComponentAtNode(div);
      })

      it('Renders empty li when sections not supplied', () => {
          const wrapper = shallow(<Accordion />)
          expect(toJson(wrapper)).toMatchSnapshot()
      })

      it('renders no sections as active by default', () => {
        const wrapper = shallow(<Accordion sections={sections} />)
        expect(toJson(wrapper)).toMatchSnapshot()
      })

      it('component opens a clicked section ', () => {
        const wrapper = mount(<Accordion sections={sections} />)
        wrapper.find('button').at(1).simulate('click')
        expect(toJson(wrapper)).toMatchSnapshot()
      })

      it('component only opens the last section ', () => {
        const wrapper = mount(<Accordion sections={sections} />)
        wrapper.find('button').at(0).simulate('click')
        wrapper.find('button').at(1).simulate('click')
        wrapper.find('button').at(2).simulate('click')
        expect(toJson(wrapper)).toMatchSnapshot()
      })
})