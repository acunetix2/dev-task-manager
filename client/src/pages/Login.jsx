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
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-tr from-gray-100 via-gray-200 to-gray-100 dark:from-zinc-900 dark:to-zinc-800 px-4">
      <Card className="w-full max-w-md rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 shadow-2xl animate-fade-in">
        <CardHeader>
          <CardTitle className="text-center text-1xl font-bold text-zinc-800 dark:text-white">
            Hi, Welcome Back 👋
            <br />
            Dev Task Manager
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-5 px-6">
          <Input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="py-3 px-4 rounded-xl border-zinc-300 dark:border-zinc-700"
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="py-3 px-4 rounded-xl border-zinc-300 dark:border-zinc-700"
          />
        </CardContent>
        <CardFooter className="px-6 pb-6">
          <Button
            onClick={handleLogin}
            disabled={loading}
            className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition-all"
          >
            {loading ? "Logging In..." : "Log In"}
          </Button>
        </CardFooter>
        <p className="text-sm text-center text-zinc-500 dark:text-zinc-400 pb-6">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Sign Up
          </Link>
        </p>

        <p className="text-xs text-bold text-center text-blue-500 dark:text-blue-500 pb-6">
            &copy; {new Date().getFullYear()} Dev Task Manager. All rights reserved.
        </p>
      </Card>
    </div>
  );
}
