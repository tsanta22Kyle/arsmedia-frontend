import { HTMLInputTypeAttribute } from "react";

interface Props{
    type?: HTMLInputTypeAttribute | undefined;
    id?:string | undefined;
    className?:string;
    placeholder:string;
}
export default function Input({type ="text",id , className , placeholder}:Props){
    return(
                            <input type={type} id={id} className={`${className} border border-[#8080805a] focus:outline-2 outline-primary  rounded-xl py-3 px-2`}  placeholder={placeholder} />

    )
}