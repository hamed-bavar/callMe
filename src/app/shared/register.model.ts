export interface UserCredentials {
  username: string;
  password: string;
  email: string;
}
export interface SignupResponse {
  token: string;
  userID: number | string;
}
export interface Error {
  error: {
    description: string;
  };
  status: number;
}
