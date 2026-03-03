import { useState } from "react";
import RecordRow from "../components/RecordRow";
import Table from 'react-bootstrap/Table';
import { Button } from "react-bootstrap";

function RecordList({functions, records}){
    const [version, update] = useState(0);
    const ids = functions.getAllRecordIds();
    if (ids.length === 0)
        return (<div className="fw-bolder py-5 text-center">No Records found. You might need to create a new record.</div>);
    return (
        <div>
            <h1>Total Records: {ids.length}</h1>
            <div className="p-2 mb-5">
                <h2>Last Added Record:</h2>
                <Table striped bordered hover className="border border-dark">
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <RecordRow id={ids.at(-1)} records={records} deleteFunc={(id) => {
                            if (!confirm(`Do you want to delete '${records[id].title}'?`)) return;
                            functions.deleteRecord(id);
                            update(version + 1);
                            }}/>
                    </tbody>
                </Table>
            </div>
            <h2>All Records:</h2>
            <Table striped bordered hover className="border border-dark">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {ids.map((v, i) => {return <RecordRow id={v} key={i} records={records} deleteFunc={(id) => {
                            if (!confirm(`Do you want to delete '${records[id].title}'?`)) return;
                            functions.deleteRecord(id);
                            update(version + 1);
                            }}/>})}
                </tbody>
            </Table>
            <Button variant="danger" onClick={function(){
                if (confirm("Do you want to delete all records?"))
                    ids.forEach(id => {
                        functions.deleteRecord(id)
                    });
                    update(version + 1);
            }}>Delete all records</Button>
        </div>
    );
    return (
        <div className="overflow-scroll w-100">
            {ids.map((v, i) => {return <RecordRow id={v} key={i} records={records} deleteFunc={(id) => {functions.deleteRecord(id); update(version + 1);}}/>})}
        </div>
    );
}

export default RecordList;
