"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/utils/api"; 

const AuthInitializer = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await api.post("/auth/profile");

        router.push("/tasks");
      } catch (error) {
        console.log("Error fetching profile:", error);
        router.push("/login");
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  return null;
};

export default AuthInitializer;
