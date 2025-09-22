export interface LoginResponse {
  token: string;
  user?: {
    id: string;
    email: string;
  };
}

export async function login(email: string, password: string): Promise<LoginResponse> {
  // Simulate a real network call
  return new Promise<LoginResponse>((resolve, reject) => {
    setTimeout(() => {
      if (email === 'test@test.com' && password === '123') {
        resolve({
          token: 'fake-jwt-token',
          user: { id: '1', email },
        });
      } else {
        reject(new Error('Invalid credentials'));
      }
    }, 500);
  });
}

// src/api/auth.ts

export interface SignupResponse {
  token: string;
  user?: {
    id: string;
    email: string;
    name: string;
  };
}

export async function signup(name: string, email: string, password: string): Promise<SignupResponse> {
  // Mock signup; replace with real fetch('/api/signup') later
  return new Promise<SignupResponse>((resolve, reject) => {
    setTimeout(() => {
      if (email && password) {
        resolve({
          token: 'fake-jwt-token-signup',
          user: { id: '2', email, name },
        });
      } else {
        reject(new Error('Signup failed'));
      }
    }, 500);
  });
}

