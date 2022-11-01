import React from "react";

import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

function TodoItem(props) {
    return (
        <ListGroup.Item>
            <div className="row ms-2">
                <div className="fw-bold col-12">
                    {props.todo.text}
                </div>
                { completed(props.todo, props.completeTodo) }
                <Button variant="danger" size="sm" className="col-2 ms-3" onClick={props.deleteTodo}>Eliminar</Button>
            </div>
        </ListGroup.Item>
    );
}

function completed(todo, completeTodo) {
    if (todo.completed) {
        return (
            <Badge bg="secondary" pill className="col-2">
                    Completada
            </Badge>
        );
    } else {
        return (
            <Button variant="primary" size="sm" className="col-2 ms-right-auto" onClick={completeTodo}>Marcar como completado</Button>
        );
    }
}

export {TodoItem};