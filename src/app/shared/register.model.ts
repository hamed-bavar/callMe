export interface UserCredentials {
  username: string;
  password: string;
  email: string;
}
export interface SignupResponse {
  token: string;
}
export interface Error {
  error: {
    description: string;
  };
}