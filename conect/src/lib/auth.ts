import axios from "axios";

// Type definitions
interface LoginCredentials {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
  userId: string;
  email: string;
  name: string;
}

interface VerifyTokenResponse {
  valid: boolean;
  user: {
    id: string;
    email: string;
    name: string;
  };
}

// Create an axios instance with default configuration
const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor to add auth token
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle auth errors
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid
      localStorage.removeItem("authToken");
      localStorage.removeItem("user");
      window.location.href = "/admin";
    }
    return Promise.reject(error);
  }
);

// Auth helper functions
export const authAPI = {
  // Login function
  login: async (credentials: LoginCredentials): Promise<LoginResponse> => {
    try {
      const response = await apiClient.post("/auth/login", credentials);
      if (response.data.token) {
        localStorage.setItem("authToken", response.data.token);
        localStorage.setItem("user", "admin");
      }
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Logout function
  logout: async (): Promise<void> => {
    try {
      localStorage.removeItem("authToken");
      localStorage.removeItem("user");
      await apiClient.post("/auth/logout");
    } catch (error) {
      // Ignore logout errors, just clear local storage
      console.warn("Logout request failed:", error);
    }
  },

  // Verify token
  verifyToken: async (): Promise<VerifyTokenResponse> => {
    try {
      const response = await apiClient.get("/auth/verify");
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Check if user is authenticated
  isAuthenticated: (): boolean => {
    const token = localStorage.getItem("authToken");
    const user = localStorage.getItem("user");
    return !!(token && user);
  },

  // Get auth token
  getToken: (): string | null => {
    return localStorage.getItem("authToken");
  },
};

// Export the configured axios instance for use in other components
export default apiClient;
