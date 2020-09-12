import React from 'react';

const Todo = ({ text, todo, todos, setTodos }) => {

    const deleteHandler = () => {
        decoration();
        setTimeout(remover, 500);
    };

    function remover () {
        setTodos(todos.filter((el) => el.id !== todo.id))
    };

    function decoration() {
        setTodos(todos.map((item) => {
            if (item.id === todo.id) {
                return {
                    ...item,
                    class: !item.class
                }
            }
            return item;
        }));
    };

    // const decoration = () => {
    //     setTodos(todos.map((item) => {
    //         if (item.id === todo.id) {
    //             return {
    //                 ...item,
    //                 class: !item.class
    //             }
    //         }
    //         return item;
    //     }));
    // }; 
    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if (item.id === todo.id) {
                return {
                    ...item,
                    completed: !item.completed
                }
            }
            return item;
        }));
    };

    return (
        <div className={`todo ${todo.class ? '' : 'fall'}`}>
            <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
};

export default Todo;