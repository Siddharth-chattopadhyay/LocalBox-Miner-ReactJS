import Nav from 'react-bootstrap/Nav';
import { useNavigate } from 'react-router-dom';


function NavigationBar() {
    const navigate = useNavigate();
  return (
    <Nav
      activeKey="/home"
      onSelect={(selectedKey) => {
        navigate(selectedKey);
    }}
    >
      <Nav.Item>
        <Nav.Link eventKey="/" className='text-white'>
            <div className='btn btn-primary'>
                Move to dashboard
            </div>
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link eventKey="addrecord" className='text-white'>
            <div className='btn btn-primary'>
                Add Record
            </div>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default NavigationBar;