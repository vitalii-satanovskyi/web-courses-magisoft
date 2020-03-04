import React from 'react'
import PropTypes from 'prop-types'

const TodoList = props => {
    const { todos =[]} = props;
    return (
        <ul>
            { todos.map(t => <li className='todo-item__title'>{t.title}</li>)}
        </ul>
    )
}

TodoList.propTypes = {

}

export default TodoList
