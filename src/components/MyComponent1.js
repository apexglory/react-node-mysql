import {useEffect, useState} from "react";

export default function MyComponent1(){
    const [data, setData] = useState([]);

    useEffect(()=>{
        getData()
    },[])
    function getData() {
       // 使用fetch获取数据
        fetch('http://localhost:8000/api').then(json=>json.json()).then(res=>{
            console.log(res)
            setData(res)
        })
    }
    return <div>
        {JSON.stringify(data)}
        <table>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>password</th>
            </tr>
            {data.map(e=>{
                return <tr key={e.id}>
                    <td>{e.id}</td>
                    <td>{e.name}</td>
                    <td>{e.password}</td>
                </tr>
            })}
        </table>

    </div>
}
