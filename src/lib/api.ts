const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL?.replace(/\/+$/, "") ||
  "http://localhost:3000";

export const apiUrl = (path: string) => `${API_BASE_URL}${path}`;

export { API_BASE_URL };
