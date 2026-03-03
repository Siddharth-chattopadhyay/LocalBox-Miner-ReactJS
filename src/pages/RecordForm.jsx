import { useNavigate, useParams } from "react-router-dom";
import { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

function RecordForm({records, setRecord}){
    const {id} = useParams();
    const navigate = useNavigate();
    const formData = useRef(id !== undefined? records[id] : ({"title": "", "description": ""}));
    function handleSubmit(e){
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
            alert("Please enter a valid data");
        }
        else {
            setRecord(id ?? Date.now().toString(), formData.current.title, formData.current.description);
            navigate("/");
        }
    }
    const render = (
        <>
            <Form noValidate validated={true} onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Title</Form.Label>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Title"
                            className="mb-3">

                            <Form.Control
                                required
                                pattern=".{10,}"
                                type="text"
                                placeholder="Title"
                                onChange={function(e){formData.current.title = e.target.value}}
                                defaultValue={formData.current?.title ?? ""}
                                />
                        <Form.Control.Feedback type="invalid">Must be above or equal to 10 characters length</Form.Control.Feedback>
                        <Form.Control.Feedback type="valid">Good!</Form.Control.Feedback>
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group>
                        <FloatingLabel controlId="floatingTextarea2" label="Description">
                            <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                            onChange={function(e){formData.current.description = e.target.value}}
                            defaultValue={formData.current?.description ?? ""}
                            />
                        </FloatingLabel>
                    </Form.Group>
                </Row>
                <Row>
                    <Col>
                        <Button variant="primary" type="submit" onClick={function(){}}>Save Changes</Button>
                    </Col>
                </Row>
            </Form>
        </>
    );
    return render;
}

export default RecordForm;