import { Nav, Navbar } from 'react-bootstrap';
import './App.css';
import { NavLink,Link, Outlet, useNavigate } from 'react-router-dom';

function App() {

  const navigate = useNavigate()

  let token = localStorage.getItem('token')
  let loggedInUsername = localStorage.getItem('loggedInUsername')
  let userId = localStorage.getItem('userId')
console.log(loggedInUsername,'idapp');

  let handleLogout=()=>{
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUsername');
    localStorage.removeItem('userId');
    navigate('/')
  }


  return (
    
    <div className="App">
    { userId==='6593aae9ddf3c661e6904f31' ? (
      <div>
      <Navbar collapseOnSelect expand="lg" className='bg-light '>
  <Navbar.Brand className='logo'><div className='logo1'>Memoir.</div></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">

      
         <Nav.Link as={NavLink} to='/homeadmin' className='navlink1 rounded ps-2 pe-5 '><div className='text-black '>Home</div></Nav.Link>
         <Nav.Link as={NavLink} to='/write' className='navlink1 rounded ps-2 pe-5 '><div className='text-black '>Write</div></Nav.Link>
         <Nav.Link as={NavLink} to='/profileadmin' className='navlink1 rounded ps-2 pe-5 '><div className='text-black '>Profile</div></Nav.Link>
         <Nav.Link as={NavLink} to='/about' className='navlink1 rounded ps-2 pe-5 '><div className='text-black '>About</div></Nav.Link>
     
      
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
  
        
           <Nav.Link as={NavLink} to='/' className='navlink1 rounded ps-2 pe-5'><div className='text-black '>Home</div></Nav.Link>
           <Nav.Link as={NavLink} to='/write' className='navlink1 rounded ps-2 pe-5 '><div className='text-black '>Write</div></Nav.Link>
           <Nav.Link as={NavLink} to='/profile' className='navlink1 rounded ps-2 pe-5 '><div className='text-black '>Profile</div></Nav.Link>
           <Nav.Link as={NavLink} to='/about' className='navlink1 rounded ps-2 pe-5 '><div className='text-black '>About</div></Nav.Link>
       
        
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
