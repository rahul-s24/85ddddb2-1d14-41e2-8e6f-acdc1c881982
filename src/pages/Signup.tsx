import React, { useState } from 'react';
import { signup } from '../api/auth';
import { useNavigate, Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from "@/components/Header";

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignupClick = async () => {
    setError('');
    setLoading(true);
    try {
      const data = await signup(name, email, password);
      localStorage.setItem('token', data.token);
      navigate('/dashboard'); 
    } catch (err) {
      console.error(err);
      setError('Signup failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-card border border-border rounded-2xl shadow-lg p-8">
        {/* Header */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow">
            <Sparkles className="h-6 w-6 text-white" />
          </div>
          <h1 className="mt-3 text-2xl font-bold text-foreground">Create an account</h1>
          <p className="text-muted-foreground text-sm">Sign up to start selling</p>
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
            placeholder="Full name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
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
            onClick={handleSignupClick}
            disabled={loading}
            className="w-full bg-gradient-primary hover:opacity-90 shadow-glow"
          >
            {loading ? 'Signing up…' : 'Sign Up'}
          </Button>
        </div>

        <div className="mt-6 text-center text-sm text-muted-foreground">
          Already have an account?{' '}
          <Link to="/login" className="text-primary hover:underline">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}
