import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Trash, Pencil } from "react-bootstrap-icons";
import { useNavigate } from 'react-router-dom';

function RecordRow({ id, records, deleteFunc }){
    const navigate = useNavigate();
    const record = records[id];
    const title = record.title;
    const description = record.description;
    return (
        <tr>
            <td style={{fontSize: "15px"}}>{id}</td>
            <td style={{fontSize: "15px"}}>{title}</td>
            <td>
                <pre style={{fontFamily: "unset", fontSize: "15px"}}>
                    {description}
                </pre>
            </td>
            <td>
                <Button variant="warning" className='m-3' onClick={function () { navigate(`/editrecord/${id}`); }}>
                    <Pencil />
                </Button>

                <Button variant="danger" onClick={function () { deleteFunc(id); }}>
                    <Trash />
                </Button>
            </td>
        </tr>
    );

    return (
        <>

            <Card style={{width: "100%"}}>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text as="pre" style={{fontFamily: "unset"}}>
                        {description}
                    </Card.Text>
                    <Card.Footer>
                        <Button className='m-2' variant="danger" onClick={function () { deleteFunc(id); }}>
                            <Trash />
                        </Button>
                        <Button variant="warning" onClick={function () {
                            navigate(`/editrecord/${id}`);
                        }}>
                            <Pencil />
                        </Button>
                    </Card.Footer>
                </Card.Body>
            </Card>
        </>
    )
}

export default RecordRow;