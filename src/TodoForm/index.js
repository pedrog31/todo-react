import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function TodoForm({addTodo, setOpenModal}) {
    const [todoText, setTodoText] = React.useState('');
    const onWrite = (event) => {
        setTodoText(event.target.value);
    }
    const onCancel = () => {
        setOpenModal(false);
    }
    const createTodo = (event) => {
        event.preventDefault();
        addTodo(todoText);
        setOpenModal(false);
    }
    return (
    <Form onSubmit={ createTodo }>
        <div className="row">
            <Form.Group className="col-12" controlId="exampleForm.ControlTextarea1" onChange={onWrite}>
                <Form.Label>Escribe la tarea a completar</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="primary" className="col-5 m-3" onClick={ onCancel } type="button">
                    Cancelar
            </Button>
            <Button variant="primary" className="col-5 m-3" type="submit">
                    Agregar
            </Button>
        </div>
    </Form>);
}

export {TodoForm}