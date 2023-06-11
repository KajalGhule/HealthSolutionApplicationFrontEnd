import { useEffect, useState } from "react";


function GetDetails()
{


    const [details ,setDisease]=useState([{
        link: "",
        linkType: ""
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
                  console.log(details);
                
                 }
          };
        
          helper.open("GET","http://localhost:8080/mentalHealth/getDetails");
          helper.setRequestHeader("Content-Type", "application/json")
    
         helper.send()
          

    },[])

    
   





    return(<>
    <h1>Healthy Life </h1>

    {
        details.map((d)=>{
            return <>
            
            <div className="navcolor">
                <table>
                    <tr>
                        <td>details :</td>
                    </tr>
                    <tr>
                        <td> This link is provide for Music</td>
                        {/* <td>{d.link}</td>    */}
                        <td><a href ={d.link} target = "_blank" >Click Here</a></td>                   
                    </tr>
                    <tr>
                        <td>Link Type</td>
                        <td>{d.linkType}</td>
                    </tr>
                    
                </table>
                
            </div>
            <hr></hr>
            </>
        })
       
    }
    

    
    </>);
}
export default GetDetails;