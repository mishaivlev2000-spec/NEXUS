import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const roles = ['Customer', 'Vendor', 'Distributor', 'Integrator', 'Installation Company'];

export default function AuthPage() {
  const { login } = useAuth();
  const [mode, setMode] = useState('signup');
  const [error, setError] = useState('');
  const [form, setForm] = useState({ email: '', password: '', companyName: '', role: 'Customer' });

  const onSubmit = async (event) => {
    event.preventDefault();
    const response = await login(form, mode);
    if (response.error) setError(response.error);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 to-blue-950 p-6">
      <form className="glass w-full max-w-lg p-8 space-y-4" onSubmit={onSubmit}>
        <h1 className="text-2xl font-semibold">NEXUS Marketplace</h1>
        <p className="text-slate-400 text-sm">Sign up your company and choose your infrastructure role.</p>
        <div className="grid gap-3">
          <input className="bg-slate-800 rounded-lg p-2" placeholder="Work email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
          <input className="bg-slate-800 rounded-lg p-2" type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
          {mode === 'signup' && <input className="bg-slate-800 rounded-lg p-2" placeholder="Company name" onChange={(e) => setForm({ ...form, companyName: e.target.value })} />}
          {mode === 'signup' && (
            <select className="bg-slate-800 rounded-lg p-2" onChange={(e) => setForm({ ...form, role: e.target.value })}>
              {roles.map((role) => (
                <option key={role}>{role}</option>
              ))}
            </select>
          )}
        </div>
        {error && <p className="text-red-400 text-sm">{error}</p>}
        <button className="w-full bg-blue-600 hover:bg-blue-500 rounded-lg p-2">{mode === 'signup' ? 'Create Company Account' : 'Login'}</button>
        <button type="button" className="text-blue-300 text-sm" onClick={() => setMode(mode === 'signup' ? 'login' : 'signup')}>
          {mode === 'signup' ? 'Already have an account? Login' : 'Need an account? Sign up'}
        </button>
      </form>
    </div>
  );
}
