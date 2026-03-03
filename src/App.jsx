import { Routes, Route } from "react-router-dom";
import RecordList from "./pages/RecordList";
import RecordForm from "./pages/RecordForm";
import NavigationBar from "./components/NavigationBar";
// {"1772548031651":{"title":"Siddharth Chattopadhyay","description":"This is my first Records"},"1772548071134":{"title":"Is this data persistent?","description":"Yes! This data is persistent across browser reloads!"},"1772548102080":{"title":"How is it ordered?","description":"It is ordered based on creation date, from old to new."},"1772548124850":{"title":"Does Edit works?","description":"I will have to check."},"1772548189099":{"title":"After that, delete any rows of this table.","description":"Ok!"},"1772548651668":{"title":"Siddharth Chattopadhyay","description":"Helo, this is test"}}
import './App.css'

const records = JSON.parse(localStorage.getItem("records")) || {};

function getAllRecordIds() {
  return Object.keys(records);
}

function setRecord(id, title, description) {
  records[id] = { title, description };
  sync();
}

function deleteRecord(id){
  delete records[id];
  sync();
}

function sync(){
  localStorage.setItem("records", JSON.stringify(records));
}

function App() {
  return (
    <>
      <div className='p-3 mb-5 bg-secondary rounded'>
        <NavigationBar/>
      </div>
      <Routes>
        <Route path="/" element={<RecordList records={records} functions={{ deleteRecord, getAllRecordIds }} />} />
        <Route path="addrecord" element={<RecordForm setRecord={setRecord}/>} />
        <Route path="editrecord/:id" element={<RecordForm records={records} setRecord={setRecord}/>} />
      </Routes>
    </>
  )
}

export default App
