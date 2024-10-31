"use client";

import { useState } from "react";
import useTodos from "@/hooks/useTodos";
import { useRouter } from "next/navigation";

export default function TodoList() {
  const { todos, loading, addTodo, toggleTodo, deleteTodo } = useTodos();
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const router = useRouter();

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    addTodo(newTitle, newDescription);
    setNewTitle("");
    setNewDescription("");
  };

  const handleLogout = () => {
    localStorage.clear();
    router.push("/login");
  };

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-4 border-b border-gray-200 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-center text-black">
              Todo List
            </h1>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Logout
            </button>
          </div>
          <div className="p-4">
            <form onSubmit={handleAddTodo} className="mb-6">
              <input
                type="text"
                placeholder="Task title"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              />
              <textarea
                placeholder="Task description (optional)"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              />
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Add Task
              </button>
            </form>
            <div className="space-y-4">
              {todos.length === 0 ? (
                <p className="text-center text-black">
                  No tasks yet. Add one above!
                </p>
              ) : (
                todos.map((todo) => (
                  <div
                    key={todo.id}
                    className="bg-gray-50 rounded-md p-4 flex items-start justify-between"
                  >
                    <div className="flex items-center">
                      <button
                        onClick={() => toggleTodo(todo.id)}
                        className={`focus:outline-none transition-colors duration-200 ${
                          todo.status === "completed"
                            ? "text-green-500"
                            : "text-gray-400 hover:text-gray-600"
                        }`}
                      >
                        {todo.status === "completed" ? (
                          <span className="text-2xl">✅</span>
                        ) : (
                          <span className="text-2xl">❌</span>
                        )}
                      </button>
                      <p
                        className={`font-medium ml-2 ${
                          todo.status === "completed"
                            ? "line-through text-gray-500"
                            : "text-black"
                        }`}
                      >
                        {todo.title}
                      </p>
                    </div>
                    <button
                      onClick={() => deleteTodo(todo.id)}
                      className="text-red-500 hover:text-red-700 focus:outline-none ml-4"
                    >
                      Delete
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
