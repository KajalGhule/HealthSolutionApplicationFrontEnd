import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import {Link,useNavigate} from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../assets/divs.css'
function Header()
{

    return(
    <>
      <Navbar bg="info">
        <Container>
          <Navbar.Brand href="/physicalHealth">Physical Health</Navbar.Brand>
          <Navbar.Brand href="/mentalHealth">Mental Health</Navbar.Brand>
        </Container>
      </Navbar>
    </>

    );
}
export default Header;