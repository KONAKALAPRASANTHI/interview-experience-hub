import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-screen bg-slate-50 flex">

      {/* Left Side */}
      <div className="hidden lg:flex lg:w-1/2 bg-indigo-600 text-white items-center justify-center p-12">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold mb-6">
            Welcome Back
          </h1>

          <p className="text-xl text-indigo-100">
            Access interview experiences shared by students from
            Google, Amazon, Microsoft, TCS and more.
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6">

        <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-lg">

          <h2 className="text-3xl font-bold text-slate-900 text-center">
            Sign In
          </h2>

          <p className="text-center text-slate-500 mt-2">
            Continue to your account
          </p>

          <form className="mt-8 space-y-4">

            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700 transition"
            >
              Sign In
            </button>

          </form>

          <p className="text-center text-slate-500 mt-6">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-indigo-600 font-semibold"
            >
              Create Account
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
}