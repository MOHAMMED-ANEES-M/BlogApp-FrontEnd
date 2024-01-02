import { Nav, Navbar } from 'react-bootstrap';
import './App.css';
import { Link, Outlet, useNavigate } from 'react-router-dom';

function App() {

  const navigate = useNavigate()

  let token = localStorage.getItem('token')
  let loggedInUsername = localStorage.getItem('loggedInUsername')
console.log(loggedInUsername,'idapp');

  let handleLogout=()=>{
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUsername');
    localStorage.removeItem('userId');
    navigate('/')
  }


  return (
    
    <div className="App">
    { loggedInUsername==='admin' ? (
      <div>
      <Navbar collapseOnSelect expand="lg" className='bg-light '>
  <Navbar.Brand className='logo'><div className='logo1'>Memoir.</div></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">

      
         <Nav.Link as={Link} to='/homeadmin'><div className='navlink1'>Home</div></Nav.Link>
         <Nav.Link as={Link} to='/write'><div className='navlink1'>Write</div></Nav.Link>
         <Nav.Link as={Link} to='/profileadmin'><div className='navlink1'>Profile</div></Nav.Link>
         <Nav.Link as={Link} to='/about'><div className='navlink1'>About</div></Nav.Link>
     
      
    </Nav>
    <Nav>
    <div>
      {token ? (
        <div>
          <Nav.Link ><div ><button className='btn btn-danger ' onClick={handleLogout}>Logout</button></div></Nav.Link>
        </div>
      ) : (
        <div className='d-flex '>
          <Nav.Link as={Link} to='/signup'><div ><button className='btn btn-dark '> Sign Up</button></div></Nav.Link>
          <Nav.Link as={Link} to='/signin'><div ><button className='btn btn-outline-dark '> Sign In</button></div></Nav.Link>
        </div>
      )}
    </div>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    <div className='mt-5'>
    <Outlet/>
    </div>
    </div>
     ) : (
        <div>
        <Navbar collapseOnSelect expand="lg" className='bg-light '>
    <Navbar.Brand className='logo'><div className='logo1'>Memoir.</div></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
  
        
           <Nav.Link as={Link} to='/'><div className='navlink1'>Home</div></Nav.Link>
           <Nav.Link as={Link} to='/write'><div className='navlink1'>Write</div></Nav.Link>
           <Nav.Link as={Link} to='/profile'><div className='navlink1'>Profile</div></Nav.Link>
           <Nav.Link as={Link} to='/about'><div className='navlink1'>About</div></Nav.Link>
       
        
      </Nav>
      <Nav>
      <div>
        {token ? (
          <div>
            <Nav.Link ><div ><button className='btn btn-danger ' onClick={handleLogout}>Logout</button></div></Nav.Link>
          </div>
        ) : (
          <div className='d-flex '>
            <Nav.Link as={Link} to='/signup'><div ><button className='btn btn-dark '> Sign Up</button></div></Nav.Link>
            <Nav.Link as={Link} to='/signin'><div ><button className='btn btn-outline-dark '> Sign In</button></div></Nav.Link>
          </div>
        )}
      </div>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
      <div className='mt-5'>
      <Outlet/>
      </div>
      </div>
    )}
    </div>
    );
}

export default App;
