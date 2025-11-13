'use client'

import { useState } from "react";
import PhonePrefixDropdown from "../../components/PhonePrefixDropdown";

export default function SignUp(){
    const [prefixValue , setPrefixValue] = useState("UK");
    
   function handlePrefixChange(code : string){
     setPrefixValue(code)
   }
   

    return(
        <div className="h-screen w-full flex items-center justify-center">
          
          <form  className=" flex flex-col p-10 rounded-2xl bg-white m-auto shadow-md gap-7">
            <header className="flex flex-col justify-center items-center gap-3 w-full">
                <h1 className="text-4xl font-semibold">Sign up</h1>
                <p className="font-light opacity-50">join ARSMEDIA , the coolest way for editing high quality vids</p>
            </header>
            <main className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                    <label htmlFor="username" className="px-2">username</label>
                    <input type="text" id="username" className="border border-[#8080805a] focus:outline-2 outline-primary rounded-xl py-3 px-2"  placeholder="user_name" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="username" className="px-2">email</label>
                    <input type="text" id="username" className="border border-[#8080805a] focus:outline-2 outline-primary  rounded-xl py-3 px-2"  placeholder="example@mail.xyz" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="username" className="px-2">password</label>
                    <input type="password" id="username" className="border border-[#8080805a] focus:outline-2 outline-primary  rounded-xl py-3 px-2"  placeholder="user_name" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="username" className="px-2">phone</label>
                    <div className="flex border items-center justify-between rounded-xl pl-3 border-[#8080805a] focus:border-primary outline-primary ">
                        <PhonePrefixDropdown value={prefixValue} onChange={handlePrefixChange} ></PhonePrefixDropdown>
                    <input type="password" id="username" className= " w-[75%] border-l rounded-r-xl border-[#8080805a] py-3 px-2 focus:outline-2 outline-primary "  placeholder="a phone number" />
                    </div>

                </div>
                <div className="w-full flex items-center justify-center ">
                    <button className="bg-primary text-white px-8 py-4 rounded-md">create account</button>
                </div>
            </main>
          </form>
          

        </div>
    )
}