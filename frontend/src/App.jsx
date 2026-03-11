import { Navigate, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAuth } from './context/AuthContext';
import { api } from './services/api';
import Layout from './components/Layout';
import AuthPage from './pages/AuthPage';
import DashboardPage from './pages/DashboardPage';
import MarketplacePage from './pages/MarketplacePage';
import ProjectsPage from './pages/ProjectsPage';
import MessagesPage from './pages/MessagesPage';
import CompaniesPage from './pages/CompaniesPage';

const Placeholder = ({ title }) => <div className="glass p-4"><h2 className="text-xl font-semibold">{title}</h2></div>;

export default function App() {
  const { token } = useAuth();
  const [dashboard, setDashboard] = useState({ projects: [], quoteRequests: [], messages: [], notifications: [] });
  const [products, setProducts] = useState([]);
  const [projects, setProjects] = useState([]);
  const [messages, setMessages] = useState([]);
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    if (!token) return;
    Promise.all([api.dashboard(token), api.products(token), api.projects(token), api.messages(token), api.companies(token)]).then(
      ([dash, prod, proj, msg, comps]) => {
        setDashboard(dash);
        setProducts(prod);
        setProjects(proj);
        setMessages(msg);
        setCompanies(comps);
      }
    );
  }, [token]);

  if (!token) return <AuthPage />;

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<DashboardPage data={dashboard} />} />
        <Route path="/marketplace" element={<MarketplacePage products={products} onRequestQuote={(payload) => api.requestQuote(token, payload)} />} />
        <Route path="/projects" element={<ProjectsPage projects={projects} onCreateProject={async (payload) => setProjects([...projects, await api.createProject(token, payload)])} />} />
        <Route path="/quotes" element={<Placeholder title="Quote Request Center" />} />
        <Route path="/messages" element={<MessagesPage messages={messages} onSendMessage={async (payload) => setMessages([...messages, await api.sendMessage(token, payload)])} />} />
        <Route path="/companies" element={<CompaniesPage companies={companies} />} />
        <Route path="/settings" element={<Placeholder title="Settings & Admin Moderation Panel" />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Layout>
  );
}
