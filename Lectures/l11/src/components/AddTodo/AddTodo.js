import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddTodo = props => {
    const { onSubmit } = props;
    const [title, setTitle] = useState('');

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            onSubmit(title); 
        }} className='add-todo'>
            <input 
                type="text" 
                className="add-todo__input"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
            <button className="add-todo__submit">
                Submit
            </button>
        </form>
    )
}

AddTodo.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}

export default AddTodo
