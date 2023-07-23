import axios from "axios";
import { useState, useRef } from "react";

const Postapi=()=>{

    const box1=useRef(``);
    const box2=useRef(``);
    const [res,setRes]=useState({});
    const func=()=>{
        axios.post("https://reqres.in/api/register",{"email":box1.current.value,
                                                     "password":box2.current.value}).
        then((posRes)=>{
            const {data}=posRes;
            setRes(data);
        },(errRes)=>{
            console.log(errRes);
        })
    }

    return(
        <>
            <input type={"text"} ref={box1}></input>
            <br></br><br></br>
            <input type={"password"} ref={box2}></input>
            <br></br><br></br>
            <button onClick={func}>SEND</button> 
            <br></br><br></br>
            {
                Object.keys(res).length==0?(<div></div>):(<div>{JSON.stringify(res)}</div>)
            }
        </>
    )

};
export default Postapi;