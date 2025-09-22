import React, { useState } from 'react';
import { login } from '../api/auth';
import { useNavigate, Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button'; // same button as landing
import Header from "@/components/Header";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLoginClick = async () => {
    setError('');
    setLoading(true);
    try {
      const data = await login(email, password);
      localStorage.setItem('token', data.token);
      navigate('/sell');
    } catch (err) {
      console.error(err);
      setError('Invalid credentials');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-card border border-border rounded-2xl shadow-lg p-8">
        {/* Logo / header */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow">
            <Sparkles className="h-6 w-6 text-white" />
          </div>
          <h1 className="mt-3 text-2xl font-bold text-foreground">Log in</h1>
          <p className="text-muted-foreground text-sm">Access your account</p>
        </div>

        {error && (
          <div className="mb-3 p-2 bg-red-50 text-red-600 text-sm rounded">
            {error}
          </div>
        )}
        <Header />
        <div className="flex flex-col gap-4">
          <input
            className="border border-border focus:border-primary focus:ring focus:ring-primary/20 p-3 rounded-lg text-sm bg-background"
            type="email"
            placeholder="Email address"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          
          <input
            className="border border-border focus:border-primary focus:ring focus:ring-primary/20 p-3 rounded-lg text-sm bg-background"
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <Button
            onClick={handleLoginClick}
            disabled={loading}
            className="w-full bg-gradient-primary hover:opacity-90 shadow-glow"
          >
            {loading ? 'Logging in…' : 'Log In'}
          </Button>
        </div>

        <div className="mt-6 text-center text-sm text-muted-foreground">
          Don’t have an account?{' '}
          <Link to="/signup" className="text-primary hover:underline">
            Sign up
          </Link>
        </div>

        <p className="text-muted-foreground mt-4 text-xs text-center">
          Test with <b>test@test.com</b> / <b>123</b>
        </p>
      </div>
    </div>
  );
}
