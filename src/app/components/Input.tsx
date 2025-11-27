import { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";

type Props ={
    type?: HTMLInputTypeAttribute | undefined;
    id?:string | undefined;
    className?:string;
    placeholder:string;
} & InputHTMLAttributes<HTMLInputElement>
export default function Input({type ="text",id , className , placeholder , ...rest}:Props){
    return(
                            <input type={type} {...rest} id={id} className={`${className} border border-[#8080805a] focus:outline-2 outline-primary  rounded-xl py-3 px-2`}  placeholder={placeholder} />

    )
}