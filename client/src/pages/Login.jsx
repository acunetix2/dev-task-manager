import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import API from "../services/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) return alert("All fields required");
    setLoading(true);
    try {
      const res = await API.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      setTimeout(() => {
        navigate("/dashboard");
      }, 100);
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Section - Welcome Text */}
      <div
        className="hidden md:flex flex-1 flex-col justify-center bg-cover bg-center px-12 text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')",
        }}
      >
        <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
          Welcome Back to TaskBoard
        </h1>
        <p className="max-w-md text-lg text-white/90 drop-shadow-md">
          Manage your tasks, stay productive, and track progress with{" "}
          <span className="font-semibold">TaskBoard</span>.
        </p>
        <div className="flex gap-6 mt-8 text-xl">
          <i className="fa-brands fa-facebook hover:text-blue-400 cursor-pointer"></i>
          <i className="fa-brands fa-twitter hover:text-sky-400 cursor-pointer"></i>
          <i className="fa-brands fa-instagram hover:text-pink-400 cursor-pointer"></i>
          <i className="fa-brands fa-github hover:text-gray-300 cursor-pointer"></i>
        </div>
      </div>

      {/* Right Section - Login Form */}
      <div className="flex flex-1 items-center justify-center bg-white dark:bg-zinc-900 px-6">
        <Card className="w-full max-w-md shadow-xl rounded-2xl border border-zinc-200 dark:border-zinc-700">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-bold text-zinc-800 dark:text-white">
			TaskBoard 
              Sign in
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-5 px-6">
            <Input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="py-3 px-4 rounded-xl border-zinc-300 dark:border-zinc-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 transition-all"
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="py-3 px-4 rounded-xl border-zinc-300 dark:border-zinc-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 transition-all"
            />

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 dark:border-zinc-600"
                />
                Remember Me
              </label>
              <Link
                to="/forgot-password"
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                Forgot password?
              </Link>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col gap-4 px-6 pb-6">
            <Button
              onClick={handleLogin}
              disabled={loading}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium shadow-md hover:shadow-lg transition-all"
            >
              {loading ? "Logging In..." : "Sign in now"}
            </Button>

            {/* 👉 Signup Button */}
            <p className="text-center text-sm text-zinc-600 dark:text-zinc-400">
              Don’t have an account?{" "}
              <Link
                to="/signup"
                className="font-semibold text-blue-600 hover:underline dark:text-blue-400"
              >
                Create an Account
              </Link>
            </p>
          </CardFooter>

          <p className="text-xs text-center text-zinc-500 dark:text-zinc-400 px-6 pb-6">
            By clicking on “Sign in now” you agree to our{" "}
            <Link
              to="/terms"
              className="underline hover:text-blue-600 dark:hover:text-blue-400"
            >
              Terms of Service
            </Link>{" "}
            &{" "}
            <Link
              to="/privacy"
              className="underline hover:text-blue-600 dark:hover:text-blue-400"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </Card>
      </div>
    </div>
  );
}
