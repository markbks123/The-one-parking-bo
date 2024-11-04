export interface LoginState {
  error: string | null;
  loading: boolean;
  token:string|null
 
}



export interface LoginRequest {
    username:string;
    password:string;
}