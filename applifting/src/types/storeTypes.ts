export interface AuthState {
  loggedIn: boolean;
  access_token: string;
}

export interface MessageState {
  content: string;
  type: "error" | "success" | "info" | "warning" | undefined;
}
