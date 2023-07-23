import {useEffect,useState} from "react";
import axios from "axios";

const Restapi3=()=>{

    
    const [page,setPage]=useState();
    const [per_page, setPer_page]=useState();
    const [total, settotal]=useState();
    const [total_pages, setTotal_pages]=useState();
    const [data, setData]=useState([]);
    const [support,setSupport]=useState({});
    const [url, setUrl]=useState();
    const [text, setText]=useState();

    useEffect(()=>{
        axios.get("https://reqres.in/api/users?page=2").then((posRes)=>{
            
        const {data}=posRes;
        setPage(data.page)
        setPer_page(data.per_page);
        settotal(data.total);
        setTotal_pages(data.total_pages);
        setData(data.data);
        setSupport(data.support)
        setUrl(data.support.url)
        setText(data.support.text)

        console.log(data.support.text);
        },(negRes)=>{})
    },[])

    return(
        <>
            {
                data==0?(<div className="spinner-border text-danger" style={{position:"absolute", 
                top:"50%",
                left:"50%"}}></div>):(<div className="container mt-5">
                    <table className="table table-danger table-striped table-hover">
                        <thead>
                            <tr>
                                <th>Page</th><th>{page}</th><th>Per_page</th><th>{per_page}</th><th></th><th></th><th></th>
                            </tr>
                            <tr>
                                <th>Total</th><th>{total}</th><th>Total_page</th><th>{total_pages}</th><th></th><th></th><th></th>
                            </tr>
                            <tr>
<th>id</th>
<th>email</th>
<th>first_name</th>
<th>last_name</th>
<th>avatar</th>
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
                            data.map((element,index)=>{
                                return(
                                    <tbody>
                                <tr key={index}>
                                    
                                    <td>{element.id}</td>
                                    <td>{element.email}</td>
                                    <td>{element.first_name}</td>
                                    <td>{element.last_name}</td>
                                    <td><img src={element.avatar}></img></td>
                                    <td>{url}</td>
                                    <td>{text}</td>
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
export default Restapi3;