import { useNavigate } from "react-router-dom"

export function Linker({body, tgt}){
    const nav  = useNavigate();
    return <>
    <button className="hover:text-blue-500 hover:underline hover:cursor-pointer text-center" onClick={()=>{
        nav(tgt);
    }}>{body}</button>
    </>
}