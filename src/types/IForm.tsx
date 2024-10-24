export interface SignupForm {
  id?: string;
  name: string;
  email: string;
  password: string;
  isGAuth: boolean;
  createdAt: Date;
}

export interface LoginForm {
    email:string,
    passowrd:string
}