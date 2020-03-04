import React from 'react';
import { shallow, mount } from 'enzyme';
import AddTodo from '.';

describe('AddTodo component', () => {
    let component;
    const submitMock = jest.fn();
  
    beforeEach(() => {
      component = shallow(
        <AddTodo  onSubmit={submitMock}  />,
      );
    });

    it('Should render successfully', () => {
    expect(component.exists()).toEqual(true);
  });

  it('Should have one input', () => {
    expect(component.find('.add-todo__input').length).toEqual(1);
  });

  it('Should have one submit button', () => {
    expect(component.find('.add-todo__submit').length).toEqual(1);
  });

  it('Should call the onSubmit function when clicked', () => {
    const submitMock = jest.fn();
    const component = mount(<AddTodo onSubmit={submitMock} />);

    expect(submitMock.mock.calls.length).toEqual(0);
    component.find('form').simulate('submit');
    expect(submitMock.mock.calls.length).toEqual(1);
  });


});