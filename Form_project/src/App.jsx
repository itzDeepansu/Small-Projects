import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async(data) => {
    console.log(data);
    reset();
    let res = await fetch("http://localhost:3000/",{
      method: "POST", headers: {
        "Content-Type": "application/json",
      }, body: JSON.stringify(data),
    })
    let ans = await res.text()
    console.log(ans);
  };
  return (
    <>
      <div className="h-screen w-screen bg-slate-700 flex items-center justify-center bgimg">
        <div className="py-8 px-14 flex flex-col gap-3 glass">
          <div className=" text-4xl text-center">
            Registration Form
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-3"
          >
            <input
              type="text"
              {...register("name", {required:{value:true,message:"This Field is mandatory"}})}
              className="h-12 border-black placeholder-white border-b-2 bg-transparent "
              placeholder="Name"
            />
              {errors.name && <span>{errors.name.message}</span>}
            <input
              type="email"
              {...register("email")}
              className="h-12 border-black placeholder-white border-b-2 bg-transparent"
              placeholder="Email"
            />
            <input
              type="text"
              {...register("country")}
              className="h-12 border-black placeholder-white border-b-2 bg-transparent"
              placeholder="Country"
            />
            <input
              type="number"
              {...register("phone")}
              className="h-12 border-black placeholder-white border-b-2 bg-transparent"
              placeholder="Phone Number"
            />
            <input
              type="password"
              {...register("password")}
              className="h-12 border-black placeholder-white border-b-2 bg-transparent"
              placeholder="Password"
            />
            <label className="flex items-center gap-2 h-12">
              <input
                type="checkbox"
                {...register("policies")}
                className="h-4 w-4 border-black placeholder-white border-b-2"
              />
              I accept terms&conditions
            </label>
            <input
              type="submit"
              className="h-9"
              value="Create Account"
              className=" rounded-full bg-blue-700 m-auto py-3 px-6 cursor-pointer"
            />
          </form>
          <div className="m-auto">Already have an account? <a href="" className="text-gray-400 underline">Sign In</a></div>
        </div>
      </div>
    </>
  );
}

export default App;
