import type { AuthUser } from "./AuthUser";

export type AuthContextType = {
    user : AuthUser | null;
    login: (username: string, password: string) => Promise<void>;
    logout: () => void;

}