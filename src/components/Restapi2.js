import {useEffect,useState} from "react";
import axios from "axios";

const Restapi2=()=>{

    const [arr,setArr]=useState([]);
    const [product,setProduct]=useState();
    const [init,setInit]=useState();

    useEffect(()=>{
        axios.get("https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0").then((posRes)=>{

        const {data}=posRes;
        const {product, init, dataseries}=data;
        const {pro1}=product;
        const {ini}=init;
        setArr(dataseries);
        setInit(ini);
        setProduct(pro1);

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
                    <table className="table table-primary table-striped table-hover">
                    <thead>
                    <tr><th>products </th><th colspan={"9"}>{product} </th></tr>
                    <tr><th>init</th><th colspan={"9"}>{init}</th></tr>
                        <tr><th>timepoint</th>
                            <th>cloudcover</th>
                            <th>seeing</th>
                            <th>transparency</th>
                            <th>lifted_index</th>
                            <th>rh2m</th>
                            <th colspan={"2"} >wind10m</th>
                            <th>temp2m</th>
                            <th>prec_type</th>
                        </tr>
                        <tr><td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <th>direction</th>
                            <th>speed</th>
                            <td></td>
                            <td></td>
                        </tr>
                        </thead>
                        {
                            arr.map((element,index)=>{
                               return(
                                <tbody>
                                    <tr key={index}>
                                        <td>{element.timepoint}</td>
                                        <td>{element.cloudcover}</td>
                                        <td>{element.seeing}</td>
                                        <td>{element.transparency}</td>
                                        <td>{element.lifted_index}</td>
                                        <td>{element.rh2m}</td>
                                        <td>{element.wind10m.direction}</td>
                                        <td>{element.wind10m.speed}</td>
                                        <td>{element.temp2m}</td>
                                        <td>{element.prec_type}</td>
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
export default Restapi2;