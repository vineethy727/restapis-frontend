import {useEffect,useState} from "react";
import axios from "axios";

const Restapi1=()=>{

    const [arr,setArr]=useState([]);

    useEffect(()=>{
        axios.get("https://www.w3schools.com/angular/customers.php").then((posRes)=>{

        const {data}=posRes;
        const {records}=data;
        setArr(records);

        },(negRes)=>{
            console.log("negative response");
        })
    },[]);
    return(
        <>
            {
                arr.length==0?(<div className="spinner-border text-primary"  style={{position:"absolute", 
                                                                                     top:"50%",
                                                                                     left:"50%"}}></div>):(<div className="container mt-5">
                    <table className="table table-info table-striped table-hover ">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>City</th>
                            <th>Country</th>
                        </tr>
                        </thead>
                        {
                            arr.map((element,index)=>{
                               return(
                                <tbody>
                                    <tr key={index}>
                                        <td>{element.Name}</td>
                                        <td>{element.City}</td>
                                        <td>{element.Country}</td>
                                     </tr>
                                </tbody>
                               )
                            })
                        }
                    </table>
                </div>)
            }
        </>
    )
};
export default Restapi1;
