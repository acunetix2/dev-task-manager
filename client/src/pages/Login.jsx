import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
import { Link } from "react-router-dom";

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
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-tr from-blue-50 via-white to-blue-100 dark:from-zinc-900 dark:via-zinc-950 dark:to-black px-4">
      <Card className="w-full max-w-md rounded-3xl border border-zinc-200/30 dark:border-zinc-700/40 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl shadow-2xl transition-transform duration-300 hover:scale-[1.01] animate-fade-in">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-extrabold text-zinc-800 dark:text-white tracking-tight">
            Hi, Welcome Back 👋
            <p className="mt-1 text-sm font-medium text-zinc-500 dark:text-zinc-400">
              Dev Task Manager
            </p>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-5 px-6">
          <Input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="py-3 px-4 rounded-2xl border border-zinc-300 dark:border-zinc-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 transition-all"
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="py-3 px-4 rounded-2xl border border-zinc-300 dark:border-zinc-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 transition-all"
          />
        </CardContent>
        <CardFooter className="px-6 pb-6">
          <Button
            onClick={handleLogin}
            disabled={loading}
            className="w-full py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium tracking-wide shadow-md hover:shadow-lg transition-all"
          >
            {loading ? "Logging In..." : "Log In"}
          </Button>
        </CardFooter>

        <p className="text-sm text-center text-zinc-500 dark:text-zinc-400 pb-3">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
          >
            Sign Up
          </Link>
        </p>

        <p className="text-xs text-center text-zinc-400 dark:text-zinc-500 pb-6">
          &copy; {new Date().getFullYear()} Dev Task Manager. All rights reserved.
        </p>
      </Card>
    </div>
  );
}
