import React from "react";

import Button from 'react-bootstrap/Button';

function TodoCreateButton(props) {
    const addNewTodo = () => {
        props.setOpenModal(true)
    }
    return (
        <div className="row">
            <Button variant="primary" className="col-2 m-3 mx-auto" onClick={ addNewTodo }>
                Agregar
            </Button>
        </div>
    );
}

export {TodoCreateButton};