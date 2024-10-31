// src/hooks/useTodos.ts

import { useState, useEffect } from "react";
import api from "@/utils/api";

interface Todo {
  id: number;
  title: string;
  description: string;
  status: "pending" | "completed";
}

const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const userIdString = localStorage.getItem("userId");
  const userId = Number(userIdString);

  useEffect(() => {
    fetchTodos();
  }, [userId]);

  const fetchTodos = async () => {
    try {
      const response = await api.get("/tasks/user/" + userId);
      const data = response.data;
      setTodos(data);
    } catch (error) {
      console.log("Error fetching todos:", error);
    } finally {
      setLoading(false);
    }
  };

  const addTodo = async (newTitle: string, newDescription: string) => {
    if (!newTitle.trim()) return;

    try {
      const response = await api.post("/tasks", {
        title: newTitle,
        description: newDescription,
        status: "pending",
        userId: userId,
      });
      const data = await response.data;
      setTodos((prevTodos) => [...prevTodos, data]);
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  const toggleTodo = async (id: number) => {
    const todo = todos.find((t) => t.id === id);
    if (!todo) return; 
  
    const newStatus = todo.status === "pending" ? "completed" : "pending";
  
    try {
      const response = await api.put(`/tasks/${id}`, {
        title: todo.title,
        description: todo.description,
        status: newStatus,
        userId : userId,
      });
  
      const data = response.data;
  
      setTodos((prevTodos) => 
        prevTodos.map((t) => (t.id === id ? data : t))
      );
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error toggling todo:", error.message);
      } else {
        console.error("Unexpected error toggling todo:", error);
      }
    }
  };

  const deleteTodo = async (id: number) => {
    try {
      await api.delete(`/tasks/${id}`);
      setTodos((prevTodos) => prevTodos.filter((t) => t.id !== id));
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return {
    todos,
    loading,
    addTodo,
    toggleTodo,
    deleteTodo,
  };
};

export default useTodos;
