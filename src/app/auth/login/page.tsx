import Button from "../../components/Button";
import Input from "../../components/Input";

export default function Login() {
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

        <form className=" flex flex-col p-25 max-lg:p-5 rounded-2xl relative bg-transparent lg:w-1/2  gap-5">
          <header className="flex flex-col justify-center items-center gap-3 w-full">
            {/* <Image alt="logo arsmedia" className="w-30" src={"/assets/logo-light.png"} width={0} height={0} unoptimized ></Image> */}
            <h1 className="text-4xl font-semibold">Login</h1>
            <p className="font-light opacity-50 text-sm">
              join ARSMEDIA , the coolest way for editing high quality vids
            </p>
          </header>
          <main className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="px-2">
                email
              </label>
              <Input type="text" id="email" placeholder="example@mail.xyz" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="px-2">
                password
              </label>
              <Input type="password" id="password" placeholder="user_name" />
            </div>

            <div className="w-full flex items-center justify-center ">
              <Button className="px-20">Login</Button>
            </div>
          </main>
        </form>
      </div>
    </div>
  );
}
