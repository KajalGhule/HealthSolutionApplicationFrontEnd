import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function PhysicalDisease()
{

    
    var navigate= useNavigate();
    const [disease ,setDisease]=useState([{
        disease: ""
    }]);
    
    var result=[];

    useEffect(()=>{
        var helper = new XMLHttpRequest();
          helper.onreadystatechange = ()=>{
              console.log("Inside XML")
              if(helper.readyState == 4 && helper.status == 200)
              {
                
                   result = JSON.parse(helper.responseText);
                   console.log(result);
                  
                   setDisease(result);
                  console.log(disease);
                
                 }
          };
        
          helper.open("GET","http://localhost:8080/physicalHealth/physicalDisease");
          helper.setRequestHeader("Content-Type", "application/json")
    
         helper.send()
          

    },[])

    var handleChange=((e,id)=>{
       console.log("Going to problem page: " + id)
       navigate("/physicalHealth/physicalHealthProblem", {state : {'id': id}})

       
    })
    
   





    return(<>
    <h1>Healthy Life </h1>

    {
        disease.map((d)=>{
            return <>
            
            <div className="navcolor">
                <table>
                    <tr>
                        <td>Disease :  </td>
                        <td>{d.disease}</td>   
                        <td><center><button
                    onClick={(e)=>{handleChange(e,d.disease)}}  className="btn btn-info"
                  >
                   Get Details 
                  </button></center></td>                   
                    </tr>
                    
                </table>
                
            </div>
            <hr></hr>
            </>
        })
       
    }
    

    
    </>);
}
export default PhysicalDisease;