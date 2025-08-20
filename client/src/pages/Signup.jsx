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

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const checkPasswordStrength = (pwd) => {
    if (pwd.length < 6) return "Password too short";
    if (!/[A-Za-z]/.test(pwd) || !/[0-9]/.test(pwd))
      return "Use letters & numbers";
    return "";
  };

  const handleSignup = async () => {
    if (!email || !password || !confirmPassword) {
      setError("All fields required");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    const weak = checkPasswordStrength(password);
    if (weak) {
      setError(weak);
      return;
    }

    setError("");
    setLoading(true);
    try {
      const res = await API.post("/auth/signup", { email, password });
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
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
            "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')",
        }}
      >
        <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
          Join TaskBoard
        </h1>
        <p className="max-w-md text-lg text-white/90 drop-shadow-md">
          Collaborate, organize, and boost your productivity with{" "}
          <span className="font-semibold">TaskBoard</span>.
        </p>
        <div className="flex gap-6 mt-8 text-xl">
          <i className="fa-brands fa-facebook hover:text-blue-400 cursor-pointer"></i>
          <i className="fa-brands fa-twitter hover:text-sky-400 cursor-pointer"></i>
          <i className="fa-brands fa-instagram hover:text-pink-400 cursor-pointer"></i>
          <i className="fa-brands fa-github hover:text-gray-300 cursor-pointer"></i>
        </div>
      </div>

      {/* Right Section - Signup Form */}
      <div className="flex flex-1 items-center justify-center bg-white dark:bg-zinc-900 px-6">
        <Card className="w-full max-w-md shadow-xl rounded-2xl border border-zinc-200 dark:border-zinc-700">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-bold text-zinc-800 dark:text-white">
              Create Account
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
            <Input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="py-3 px-4 rounded-xl border-zinc-300 dark:border-zinc-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 transition-all"
            />

            {error && (
              <p className="text-sm text-red-500 font-medium mt-1">{error}</p>
            )}
          </CardContent>

          <CardFooter className="flex flex-col gap-4 px-6 pb-6">
            <Button
              onClick={handleSignup}
              disabled={loading}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium shadow-md hover:shadow-lg transition-all"
            >
              {loading ? "Signing up..." : "Sign up now"}
            </Button>

            <p className="text-center text-sm text-zinc-600 dark:text-zinc-400">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-semibold text-blue-600 hover:underline dark:text-blue-400"
              >
                Login
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
