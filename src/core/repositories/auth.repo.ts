import { User } from "@/core/entities/user.schema";
import { UserProfile } from "@/core/entities/user-profile.schema";
import { AuthToken } from "@/core/entities/auth-token.schema";

/**
 * Interface for Authentication and User Profile operations.
 * Adheres to the Dependency Rule by keeping the interface in the Core layer.
 */
export interface AuthRepository {
  // Authentication
  login(credentials: any): Promise<User>;
  signup(data: any): Promise<User>;
  logout(): Promise<void>;
  
  // Verification
  verifyCode(userId: string, code: string): Promise<boolean>;
  resendVerification(userId: string): Promise<void>;
  
  // Recovery
  requestPasswordReset(email: string): Promise<void>;
  resetPassword(token: string, newPassword: string): Promise<void>;
  
  // Provisioning
  createPassword(token: string, password: string): Promise<void>;
  
  // Profile
  getProfile(userId: string): Promise<UserProfile>;
  updateProfile(userId: string, data: Partial<UserProfile>): Promise<UserProfile>;
}
