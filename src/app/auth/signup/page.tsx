"use client";

import { useState } from "react";
import PhonePrefixDropdown from "../../components/PhonePrefixDropdown";
import Image from "next/image";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";

type Inputs = {
  pseudo : string,
  email: string,
  password : string,
  phoneNumber : string,
}

export default function SignUp() {
  const [prefixValue, setPrefixValue] = useState("UK");
  const {register , handleSubmit,formState : {errors}} = useForm<Inputs> ();


  console.log(errors.email);
  const onSubmit = (data : Inputs)=>{
    console.log(data);
    
  }

  function handlePrefixChange(code: string) {
    setPrefixValue(code);
  }

  return (
    <div className="h-screen w-full max-lg:flex-col flex items-center relative justify-center lg:p-15 p-2 bg-center bg-cover  ">
      <div className="max-lg:flex-col z-10 w-full h-full border border-[#0000002d] shadow-2xl bg-white rounded-2xl flex items-center justify-between">
        <div className="h-full max-lg:w-full lg:rounded-l-2xl bg-[linear-gradient(#0000003a),url('/assets/login-bg.jpg')] bg-center bg-cover w-1/2 flex flex-col items-left p-15 justify-center">
          <p className="text-4xl text-white font-bold tracking-widest ">
            Create
          </p>
          <p className="text-4xl text-white font-bold tracking-widest ">
            your next
          </p>
          <p className="text-4xl text-white font-bold tracking-widest ">
            media masterpiece .
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className=" flex flex-col p-25 max-lg:p-5 rounded-2xl relative bg-transparent lg:w-1/2  gap-5">
          <header className="flex flex-col justify-center items-center gap-3 w-full">
            {/* <Image alt="logo arsmedia" className="w-30" src={"/assets/logo-light.png"} width={0} height={0} unoptimized ></Image> */}
            <h1 className="text-4xl font-semibold">Sign up</h1>
            <p className="font-light opacity-50 text-sm">
              join ARSMEDIA , the coolest way for editing high quality vids
            </p>
          </header>
          <main className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="username" className="px-2">
                username
              </label>
              <Input {...register("pseudo",{required : "user name is required"})}  type="text" id="username" placeholder="user_name" />
              {
                errors.pseudo?.type =="required" && <label className="text-xs text-red-500" >user name is required</label>
              }
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="username" className="px-2">
                email
              </label>
              <Input {...register("email",{required : "email is required"})} type="text" id="username" placeholder="example@mail.xyz" />
               {
                errors.email?.type =="required" && <label className="text-xs text-red-500" >email is required</label>
              }
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="username" className="px-2">
                password
              </label>
              <Input {...register('password',{required : "password is required"})} type="password" id="username" placeholder="user_name" />
               {
                errors.password?.type =="required" && <label className="text-xs text-red-500" >password is required</label>
              }
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="username" className="px-2">
                phone
              </label>
              <div className="flex border items-center justify-between rounded-xl pl-3 border-[#8080805a] focus:border-primary outline-primary ">
                <PhonePrefixDropdown
                  value={prefixValue}
                  onChange={handlePrefixChange}
                ></PhonePrefixDropdown>
                <Input
                  {...register("phoneNumber",{required : "phone number is required"})}
                  type="text"
                  id="username"
                  className=" w-[75%] border-l rounded-l-none border-t-0 border-b-0 rounded-r-xl border-[#8080805a] py-3 px-2 focus:outline-2 outline-primary "
                  placeholder="a phone number"
                />
                
              </div>
               {
                errors.phoneNumber?.type =="required" && <label className="text-xs text-red-500" >phone number is required</label>
              }
            </div>
            <div className="w-full flex items-center justify-center ">
              <Button className="px-20">Sign up</Button>
            </div>
          </main>
        </form>
      </div>
    </div>
  );
}
