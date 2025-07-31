import { useEffect, useState } from "react";
import API from "@/services/api";
import TaskCard from "@/components/TaskCard";
import TaskDialog from "@/components/TaskDialog";
import { Toaster } from "@/components/ui/sonner";

export default function Home() {
  const [tasks, setTasks] = useState([]);

  const load = async () => {
    const res = await API.get("/tasks/me");
    setTasks(res.data);
  };

  useEffect(() => {
    const fetchTasks = async () => await load();
    fetchTasks();
  }, []);

  const createTask = async (payload) => {
    const res = await API.post("/tasks", payload);
    setTasks((prev) => [res.data, ...prev]);
    Toaster({ title: "Task created ✔️" });
  };

  const toggleTask = async (id) => {
    const task = tasks.find((t) => t._id === id);
    if (!task) return console.error("Task not found");
    const res = await API.put(`/tasks/${id}`, { completed: !task.completed });
    setTasks((prev) => prev.map((t) => (t._id === id ? res.data : t)));
  };

  const deleteTask = async (id) => {
    await API.delete(`/tasks/${id}`);
    setTasks((prev) => prev.filter((t) => t._id !== id));
    Toaster({ title: "Task deleted 🗑️" });
  };

  const activeTasks = tasks.filter((t) => !t.completed);
  const completedTasks = tasks.filter((t) => t.completed);

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">MY TASKS</h1>
        <TaskDialog onSubmit={createTask} />
      </div>

      {activeTasks.length > 0 && (
        <>
          <h2 className="text-lg text-red-500 font-semibold mb-2">Active Tasks</h2>
          <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-8">
            {activeTasks.map((t) => (
              <TaskCard
                key={t._id}
                task={t}
                onToggle={toggleTask}
                onDelete={deleteTask}
              />
            ))}
          </section>
        </>
      )}

      {completedTasks.length > 0 && (
        <>
          <h2 className="text-lg font-semibold mb-2 text-green-600">Completed</h2>
          <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {completedTasks.map((t) => (
              <TaskCard
                key={t._id}
                task={t}
                onToggle={toggleTask}
                onDelete={deleteTask}
              />
            ))}
          </section>
        </>
      )}
    </>
  );
}
