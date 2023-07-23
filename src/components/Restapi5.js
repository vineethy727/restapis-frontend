import {useEffect,useState} from "react";
import axios from "axios";

const Restapi5=()=>{
    
    const [data, setData]=useState([]);
    const [support,setSupport]=useState({});
    const [url, setUrl]=useState();
    const [text, setText]=useState();

    useEffect(()=>{
        axios.get("https://reqres.in/api/unknown/2").then((posRes)=>{
            
        const {data}=posRes;
       
        setData(data.data);
        setSupport(data.support)
        setUrl(data.support.url)
        setText(data.support.text)

        console.log(data);
        },(negRes)=>{})
    },[])

    return(
        <>
            {
                data==0?(<div className="spinner-border text-warning" style={{position:"absolute", 
                top:"50%",
                left:"50%"}}></div>):(<div className="container mt-5">
                    <table className="table table-warning table-striped table-hover">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>name</th>
                                <th>year</th>
                                <th>color</th>
                                <th>pantone_value</th>
                                <th>support</th>
                                <th></th>
                            </tr>

                            <tr>

                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>url</td>
                                <td>text</td>
                            </tr>
                        </thead>
                        
                        {
                           
                                    <tbody>
                                <tr>
                                    
                                    <td>{data.id}</td>
                                    <td>{data.name}</td>
                                    <td>{data.year}</td>
                                    <td>{data.color}</td>
                                    <td>{data.pantone_value}</td>
                                    <td>{url}</td>
                                    <td>{text}</td>
                                </tr>
                             </tbody>
                                
                        }
                        
                    </table>
                </div>)
            }
        </>
    )
};
export default Restapi5;