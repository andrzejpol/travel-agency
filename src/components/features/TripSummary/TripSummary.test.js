import React from 'react';
import { shallow } from 'enzyme';
import TripSummary from './TripSummary';


describe('Component TripSummary', () => {

  it('should render without crashing', () => {
    const component = shallow(<TripSummary id='abc' image='image.jpg' name='alt' days={1} tags={[]} cost='cost' />);
    expect(component).toBeTruthy();
    // console.log(component.debug());
  });

  it('have img tag with proper alt and src', () => {
    const expectedSrc = 'image.jpg';
    const expectedAlt = 'alt';
    const component = shallow(<TripSummary name={expectedAlt} image={expectedSrc} id='abc' days={1} tags={[]} cost='cost' />);

    expect(component.find('img').prop('src')).toEqual(expectedSrc);
    expect(component.find('img').prop('alt')).toEqual(expectedAlt);
    // console.log(component.debug());
  });

  it('generate proper link with given id', () => {
    const expectedId = 'abc';
    const component = shallow(<TripSummary id={expectedId} image='image.jpg' name='alt' days={1} tags={[]} cost='cost' />);

    expect(component.find('Link').prop('to')).toEqual('/trip/abc');
    // console.log(component.debug());
  });

  it('should render correct name, cost and days', () => {
    const expectedName = 'alt';
    const expectedCost = '1000';
    const expectedDays = 3;
    const component = shallow(<TripSummary id='abc' image='image.jpg' name={expectedName} days={expectedDays} tags={['tag1', 'tag2']} cost={expectedCost} />);

    expect(component.find('.details').childAt(0).text()).toEqual('3 days');
    expect(component.find('.details').childAt(1).text()).toEqual('from 1000');
    expect(component.find('.title').text()).toEqual('alt');
    // console.log(component.debug());
  });

  it('should throw error without required props (id, image, name, cost, days)', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });


  it('should not render div with class tags if prop tags is an empty [] or without this prop', () => {
    const component = shallow(<TripSummary id='abc' image='image.jpg' name='alt' days={1} tags={[]} cost='cost' />);
    expect(component.find('.tags')).toHaveLength(0);
  });

  it('should not render div with class tags if prop tags is without this prop', () => {
    const component = shallow(<TripSummary id='abc' image='image.jpg' name='alt' days={1} cost='cost' />);
    expect(component.find('.tags')).toHaveLength(0);
  });

  it('should render tags in spans and in corect order', () => {
    const component = shallow(<TripSummary id='abc' image='image.jpg' name='name' days={1} tags={['tag1', 'tag2', 'tag3']} cost='cost' />);

    expect(component.find('.tag').at(0).text()).toEqual('tag1');
    expect(component.find('.tag').at(0).type()).toEqual('span');
    expect(component.find('.tag').at(1).text()).toEqual('tag2');
    expect(component.find('.tag').at(1).type()).toEqual('span');
    expect(component.find('.tag').at(2).text()).toEqual('tag3');
    expect(component.find('.tag').at(2).type()).toEqual('span');

    // console.log(component.debug());
  });
});