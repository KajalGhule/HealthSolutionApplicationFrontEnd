import {useNavigate , Outlet} from "react-router-dom";
import back from '../../images/health2.jpg';
import '../../assets/divs.css';
import '../../assets/layout.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import Header from '../Home/Header'

import Footer from "../Home/Footer";



function Physical()
{
  var navigate = useNavigate();
 
 //console.log(location.state.user.email+"on company page");
// var result =location.state.user;
 //var result1=location.state.user;
 var se=sessionStorage.getItem("Token");
 console.log(sessionStorage.getItem("Token")+"  This is session object");

    return <>
    
       <div style={{backgroundImage:`url(${back})`}} className="trsize">
        
        <Header></Header>
        
        <div className="mainDiv">

          <div className="leftDiv">
            <br></br>
          <button onClick={()=>{navigate("/physicalHealth/physicalDisease")}} className="btn btn-info">Physical Health Disease</button>
          <br></br>
          <br></br>
          </div>
        <div className="rightDiv">
        <Outlet></Outlet>
        </div>
        </div>
        </div>
        </>
}

export default Physical;