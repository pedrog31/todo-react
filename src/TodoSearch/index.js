import React from "react";

import { Button, Form } from "react-bootstrap";

function TodoSearch({searchValue, setSearchValue}) {

    const search = (event) => {
        setSearchValue(event.target.value);
    }

    return (
        <Form className="row mx-5 my-3">
            <Form.Group className="col-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="text" placeholder="Busqueda" value={ searchValue } onChange={ search } />
            </Form.Group>
            <Button variant="primary" className="col-1">Buscar</Button>
        </Form>
    );
}

export {TodoSearch};