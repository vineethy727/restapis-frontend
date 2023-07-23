import {useRef, useState} from "react";
import axios from "axios";

const Restapi6=()=>{

    const userid=useRef();
    const [arr, setArr]=useState([]);
    const fetch=()=>{
        axios.get(`https://reqres.in/api/users?page=${userid.current.value}`).then((posRes)=>{
            console.log(posRes);
            
        const {data : d1}=posRes;
        const {data}=d1;
        setArr(data);
        console.log(data);
        },(negRes)=>{
            console.log(negRes);
        })
    }
    return(
        <>
            <div className="container mt-5">
            <div className="row">
                    <div className="col-6">
                        <div className="form-group">
                            UserID<br></br><input type={"number"} ref={userid} className="form control mt-2"></input>
                        </div>
                        </div>
                        </div>
            <button onClick={fetch} className="btn btn-outline-primary mt-5">fetch</button>
            <hr></hr>
            </div>

            {
                arr.length==0?(<div className="spinner-border text-primary" style={{position:"absolute", 
                top:"50%",
                left:"50%"}}></div>):(<div className="container mt-5">
                    <table className="table table-primary table-striped table-hover">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>email</th>
                                <th>firstName</th>
                                <th>last_name</th>
                                <th>avater</th>
                            </tr>
                        </thead>
                        {
                                arr.map((element, index)=>{
                                    return(
                                        <tbody>
                                            <tr key={index}>
                                            <td>{element.id}</td>
                                            <td>{element.email}</td>
                                            <td>{element.first_name}</td>
                                            <td>{element.last_name}</td>
                                            <td><img src={element.avatar}></img></td>
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


}
export default Restapi6;