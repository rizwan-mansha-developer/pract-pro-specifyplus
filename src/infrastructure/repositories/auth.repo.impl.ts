import { AuthRepository } from "@/core/repositories/auth.repo";
import { User } from "@/core/entities/user.schema";
import { UserProfile } from "@/core/entities/user-profile.schema";
import apiClient from "@/infrastructure/api-client";

/**
 * Concrete implementation of AuthRepository using Axios.
 * Currently using mock logic for foundational setup.
 */
export class AuthRepositoryImpl implements AuthRepository {
  async login(credentials: any): Promise<User> {
    const response = await apiClient.post("/auth/login", credentials);
    return response.data;
  }

  async signup(data: any): Promise<User> {
    const response = await apiClient.post("/auth/signup", data);
    return response.data;
  }

  async logout(): Promise<void> {
    await apiClient.post("/auth/logout");
  }

  async verifyCode(userId: string, code: string): Promise<boolean> {
    const response = await apiClient.post("/auth/verify", { userId, code });
    return response.status === 200;
  }

  async resendVerification(userId: string): Promise<void> {
    await apiClient.post("/auth/resend-verification", { userId });
  }

  async requestPasswordReset(email: string): Promise<void> {
    await apiClient.post("/auth/forgot-password", { email });
  }

  async resetPassword(token: string, newPassword: string): Promise<void> {
    await apiClient.post("/auth/reset-password", { token, newPassword });
  }

  async createPassword(token: string, password: string): Promise<void> {
    await apiClient.post("/auth/create-password", { token, password });
  }

  async getProfile(userId: string): Promise<UserProfile> {
    const response = await apiClient.get(`/auth/profile/${userId}`);
    return response.data;
  }

  async updateProfile(userId: string, data: Partial<UserProfile>): Promise<UserProfile> {
    const response = await apiClient.put(`/auth/profile/${userId}`, data);
    return response.data;
  }
}
