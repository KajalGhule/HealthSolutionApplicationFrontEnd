 import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

 function PhysicalHealthProblem()
 {

    const location = useLocation();
    var navigate= useNavigate();
    const [solution ,setSolution]=useState([{
        physicalHealthProblem: "",
        diet: "",
        exerciseLink: "",
    healthTypeId: {
        id: ""
    }
    }]);
    
    var result=[];

    useEffect(()=>{
        const id = location.state.id;
        console.log(" Inside Physical health problem solution using location" +id);
        var helper = new XMLHttpRequest();
          helper.onreadystatechange = ()=>{
              console.log("Inside XML in Physical Health Problems Solution")
              if(helper.readyState == 4 && helper.status == 200)
              {
                
                   result = JSON.parse(helper.responseText);
                   console.log(result);
                  
                   setSolution(result);
                  console.log(solution);
                
                 }
          };
        
          helper.open("GET","http://localhost:8080/physicalHealth/"+id);
          helper.setRequestHeader("Content-Type", "application/json")
    
         helper.send()
          

    },[])

        return(<>
        <h1>This is Details</h1>
    
        {
            <div className="tablecolor">
               <table className="table table-info">
                <tr>
                    <td>Physical Health Disease :</td>
                    <td>{solution.physicalHealthProblem}</td>
                </tr>
                <tr>
                    <td>Diet :</td>
                    <td>{solution.diet}</td>
                </tr>
                <tr>
                    <td>Exercise Link :</td>
                    {/* <td>{solution.exerciseLink}</td> */}
                   {/* <td><a href={solution.exerciseLink}> Click here </a></td> */}
                   <td><a href ={solution.exerciseLink} target = "_blank" 
>Click Here</a></td>
                   <td></td>
                </tr>
               
               </table>
               <hr></hr>
            </div>
        
        }
        </>);
}

export default PhysicalHealthProblem;