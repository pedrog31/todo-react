import React from "react";

import ListGroup from 'react-bootstrap/ListGroup';

function TodoList(props) {
    return (
       <ListGroup className="row m-5">
        {props.children}
       </ListGroup>
    );
}

export {TodoList};