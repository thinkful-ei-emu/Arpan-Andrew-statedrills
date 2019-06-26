import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
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
        const wrapper = shallow(<Accordion sections={[]} />)
        expect(toJson(wrapper)).toMatchSnapshot()
      })
})