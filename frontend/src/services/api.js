const headers = (token) => ({
  'Content-Type': 'application/json',
  ...(token ? { Authorization: `Bearer ${token}` } : {})
});

export const api = {
  signup: (payload) => fetch('/api/auth/signup', { method: 'POST', headers: headers(), body: JSON.stringify(payload) }).then((r) => r.json()),
  login: (payload) => fetch('/api/auth/login', { method: 'POST', headers: headers(), body: JSON.stringify(payload) }).then((r) => r.json()),
  dashboard: (token) => fetch('/api/dashboard', { headers: headers(token) }).then((r) => r.json()),
  products: (token) => fetch('/api/products', { headers: headers(token) }).then((r) => r.json()),
  projects: (token) => fetch('/api/projects', { headers: headers(token) }).then((r) => r.json()),
  createProject: (token, payload) => fetch('/api/projects', { method: 'POST', headers: headers(token), body: JSON.stringify(payload) }).then((r) => r.json()),
  requestQuote: (token, payload) => fetch('/api/quotes', { method: 'POST', headers: headers(token), body: JSON.stringify(payload) }).then((r) => r.json()),
  companies: (token) => fetch('/api/companies', { headers: headers(token) }).then((r) => r.json()),
  messages: (token) => fetch('/api/messages', { headers: headers(token) }).then((r) => r.json()),
  sendMessage: (token, payload) => fetch('/api/messages', { method: 'POST', headers: headers(token), body: JSON.stringify(payload) }).then((r) => r.json())
};
