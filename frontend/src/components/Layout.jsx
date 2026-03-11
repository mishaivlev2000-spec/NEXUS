import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const navItems = ['Dashboard', 'Marketplace', 'Projects', 'Quotes', 'Messages', 'Companies', 'Settings'];

export default function Layout({ children }) {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-slate-100">
      <header className="h-16 border-b border-slate-800 px-6 flex items-center justify-between backdrop-blur">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded bg-blue-600/80" />
          <div>
            <p className="font-semibold tracking-wide">NEXUS</p>
            <p className="text-xs text-slate-400">IT Infrastructure Marketplace</p>
          </div>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <span>{user?.company?.name}</span>
          <button className="rounded-lg border border-slate-700 px-3 py-1 hover:bg-slate-800" onClick={logout}>Sign out</button>
        </div>
      </header>
      <div className="flex">
        <aside className="w-64 border-r border-slate-800 p-4 space-y-2 min-h-[calc(100vh-4rem)]">
          {navItems.map((item) => (
            <NavLink
              key={item}
              to={item === 'Dashboard' ? '/' : `/${item.toLowerCase()}`}
              className={({ isActive }) =>
                `block rounded-xl px-3 py-2 text-sm ${isActive ? 'bg-blue-600/20 text-blue-200 border border-blue-500/50' : 'hover:bg-slate-800'}`
              }
            >
              {item}
            </NavLink>
          ))}
        </aside>
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
