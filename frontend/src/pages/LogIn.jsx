import iconGoogle from "../assets/icon-google.svg.webp";

export default function LogIn() {
  return (
    <section className="flex items-center w-screen h-screen justify-center bg-gray-100 font-poppins">
      <div className="flex flex-col items-center justify-center w-[90%] bg-white rounded-2xl px-[2.7rem] py-[1.3rem] pb-[3.5rem]">
        <h1 className="text-[32px] font-[600]">Login</h1>

        <htmlForm
          action="submit"
          className="flex flex-col items-center justify-center w-[100%] gap-y-[1rem] mt-[1rem]"
        >
          <div className="flex flex-col w-full relative">
            <input
              type="email"
              name="inputEmail"
              className="border-[2px] peer border-gray-300 rounded-[4px] px-[0.8rem] py-[0.4rem] h-[2.7rem] w-full focus:outline-none focus:border-blue-500"
              placeholder="E-mail"
              id="inputEmail"
              required
            />

            <label
              className="absolute left-3 top-[-10px] px-1 bg-white text-blue-500 font-[600] text-sm opacity-0 peer-focus:opacity-100 transition"
              htmlFor="inputEmail"
            >
              E-mail
            </label>
          </div>

          <div className="flex flex-col w-full relative">
            <input
              type="password"
              name="inputPassword"
              className="border-[2px] peer border-gray-300 rounded-[4px] px-[0.8rem] py-[0.4rem] h-[2.7rem] w-full focus:outline-none focus:border-blue-500"
              placeholder="Password"
              id="inputPassword"
              minLength={6}
              required
            />

            <label
              className="absolute left-3 top-[-10px] px-1 bg-white text-blue-500 font-[600] text-sm opacity-0 peer-focus:opacity-100 transition"
              htmlFor="inputPassword"
            >
              Password
            </label>

            <a className="text-[12px] font-[400] mt-[0.7rem] tracking-[0.75px] hover:underline text-blue-500">
              Forgot password?{" "}
            </a>
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 transition-all duration-[0.5s] w-full py-[0.545rem] h-[2.7rem] mt-[0.4rem] text-[14px] font-[600] tracking-[0.5px] rounded-[4px] text-white"
          >
            Log in
          </button>
        </htmlForm>

        <p className="text-[12px] font-[400] mt-[0.7rem] tracking-[0.75px] text-[black]/50">
          New User?{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Sign up
          </a>
        </p>

        <div className="flex flex-row w-[97%] items-center justify-between mt-[1.5rem]">
          <hr className="w-[46%] h-[2px] rounded-md border-none bg-black/20" />

          <p className="text-[12px] leading-none text-[black]/50">or</p>

          <hr className="w-[46%] h-[2px] rounded-md border-none bg-black/20" />
        </div>

        <button
          type="submit"
          className="bg-white hover:bg-gray-200 hover:border-white transition-all duration-[0.5s] text-black flex items-center h-[2.7rem] justify-center mt-[1.3rem] gap-x-2 w-full py-[0.545rem] text-[14px] font-[600] border-[1.6px] border-black/70 tracking-[0.5px] rounded-[4px]"
        >
          <img src={iconGoogle} alt="" className="w-[20px]" /> Continue with
          Google
        </button>
      </div>
    </section>
  );
}
