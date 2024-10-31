import api from "@/utils/api";

export const login = async (username: string, password: string) => {
  const response = await api.post("/auth/login", { username, password });
  localStorage.setItem("token", response.data.access_token);
  localStorage.setItem("userId", response.data.payload.id);
};

export const register = async (username: string, password: string) => {
  await api.post("/auth/register", { username, password });
};

export const logout = () => {
  localStorage.removeItem("token");
};

export const useAuth = () => {
  const isAuthenticated = () => {
    return !!localStorage.getItem("token");
  };

  return { isAuthenticated };
};
