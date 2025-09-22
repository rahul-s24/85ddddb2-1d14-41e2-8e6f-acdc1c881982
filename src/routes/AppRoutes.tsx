import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from '../pages/Index';
import NotFound from '../pages/NotFound';
import Login from '../pages/Login';
import Sell from '../pages/Sell';
import Signup from '../pages/Signup';
import Dashboard from '@/pages/Dashboard';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />}  />
      </Routes>
    </BrowserRouter>
  );
}
