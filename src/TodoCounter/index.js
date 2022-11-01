import React from "react";

function TodoCounter(props) {
    const completed = props.todos.filter(todo => todo.completed).length;
    const all = props.todos.length;
    return (
        <section className="row">
            <h2 className="col-5 m-3 mx-auto">Has completado {completed} de {all} TODO`s</h2>
        </section>
    );
}

export {TodoCounter};