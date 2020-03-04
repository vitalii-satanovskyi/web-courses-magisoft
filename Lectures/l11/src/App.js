import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { submitTodo } from './actions';

export const App = (props) => {
  const {submitTodo, todos } = props;
  return <div>
    <h1>Todo list</h1>
    <AddTodo onSubmit={submitTodo} />
    <TodoList todos={todos} />
  </div>
}


const mapStateToProps = state => state.todoListApp;

const mapDispatchToProps = {
  submitTodo 
};

export default connect(mapStateToProps, mapDispatchToProps)(App); 