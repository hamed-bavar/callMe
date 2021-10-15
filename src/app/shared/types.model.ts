export interface UserCredentials {
  username: string;
  password: string;
  email: string;
}
export interface SignupResponse {
  username: string;
}

export interface SignedinResponse {
  authenticated: boolean;
  username: string;
}
